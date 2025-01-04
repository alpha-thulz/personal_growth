import axios from "axios";

const client = axios.create({
    baseURL: "https://api.github.com",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
});

client.interceptors.response.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default client;