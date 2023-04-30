import axios from "axios";

export const instance = () => {
    const api = axios.create({
        baseURL: process.env.REACT_APP_PUBLIC_API_ENDPOINT,
    });

    return api;
};
