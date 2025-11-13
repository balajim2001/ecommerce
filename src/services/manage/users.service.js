import apiInstance from "../../utils/apiInstance";

export const getUserListService = async (payload) => {
    return await apiInstance.get("/user/getUsers", payload)
        .then((response) => {
            return response?.data;
        })
        .catch((err) => {
            console.log("No active session found", err);
            return [];
        });
};

export const addUserService = async (payload) => {
    return await apiInstance.post('/user/createUser', payload)
        .then((response) => {
            return response?.data;
        })
        .catch((err) => {
            console.log("No active session found", err);
            return [];
        })
}

export const editUserService = async (payload) => {
    return await apiInstance.put("/user/editUser", payload)
        .then((response) => {
            return response?.data;
        })
        .catch((err) => {
            console.log("No active session found", err);
            return [];
        })
}

export const removeUserService = async (payload) => {
    return await apiInstance.delete("/user/deleteUser", payload)
        .then((response) => {
            return response?.data;
        })
        .catch((err) => {
            console.log("No active session found", err);
            return [];
        })
}