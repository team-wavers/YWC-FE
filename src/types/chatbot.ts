export type ChatResponseType = {
    code: number;
    message: string;
    result: { reply: string };
};

export type ChatDataType = {
    timestamp: number;
    message: string;
    type: "receive" | "send";
};
