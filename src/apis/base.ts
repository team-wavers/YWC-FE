import axios from "axios";

export const instance = () => {
    const api = axios.create({
        baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
    });

    return api;
};
