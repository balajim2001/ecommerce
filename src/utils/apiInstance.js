import axios from "axios";

const apiInstance = axios.create({
    // baseURL: "http://192.168.1.54:8080/vkyc",
    baseURL: "http://localhost:3000/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response && error?.response?.status === 401) {
            if (window?.location?.pathname !== '/') {
                window.location.href = '/';
            }
        }

        return Promise.reject(error);
    }
);

export default apiInstance;