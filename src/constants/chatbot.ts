type MessageType = { [name: string]: string };

export const ChatbotMessages: MessageType = {
    CHATBOT_NO_REPLY:
        "챗봇에게서 적절한 답변을 받지 못했습니다. 다시 시도해주세요.",
    CHATBOT_SERVER_ERROR:
        "서버 통신 중 오류가 발생하였습니다. 다시 시도하거나 관리자에게 문의해주세요.",
};
