import axios from "axios";

const client = (base_url: string) => {
    const client = axios.create({
        baseURL: base_url || "https://api.github.com",
        timeout: 30000,
        headers: {
            "Content-Type": "application/json"
        }
    });

    // client.interceptors.request.use((config) => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         config.headers.Authorization = `Bearer ${token}`;
    //     }
    //
    //     return config;
    // }, (error) => {
    //     return Promise.reject(error);
    // });
    //
    // client.interceptors.response.use((response) => {
    //     const token = response.data.accessToken;
    //     if (token) {
    //         localStorage.setItem("token", token);
    //     }
    //     return response;
    // }, (error) => console.log(error));

    return client;
};

export default client;