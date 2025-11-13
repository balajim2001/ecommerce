import apiInstance from "../../utils/apiInstance";

export const checkUserStatusApi = async () => {
    return await apiInstance.get("/auth/checkUserStatus")
        .then((response) => {
            return response?.data
        })
        .catch((err) => {
            console.error(err);
            return err
        })
}

export const authLoginService = async (body) => {
    return await apiInstance.post("/auth/login", body)
        .then((response) => {
            return response?.data
        })
        .catch((err) => {
            console.error(err);
            return err?.response?.data
        })
}

export const authLogoutService = async () => {
    return await apiInstance.post("/auth/logout")
        .then((response) => {
            return response?.data
        })
        .catch((err) => {
            console.error(err);
            return err
        })
}

export const refreshTokenService = async () => {
    return await apiInstance.post("/auth/refresh-token")
        .then((response) => {
            return response?.data
        })
        .catch((err) => {
            console.error(err);
            return err
        })
}