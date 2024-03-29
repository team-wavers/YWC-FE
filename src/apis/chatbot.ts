import axios from "axios";

const sendMessage = async (message: string) => {
    const bodyData = `{"message": "${message}"}`;
    return await axios.post(
        `${import.meta.env.VITE_PUBLIC_API_ENDPOINT}/message`,
        bodyData,
        { headers: { "Content-Type": "application/json" } },
    );
};

export { sendMessage };
