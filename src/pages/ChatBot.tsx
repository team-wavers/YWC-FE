import SendButton from "@components/ChatBot/SendButton";
import Bubble from "@components/ChatBot/Bubble";
import MessageInput from "@components/ChatBot/MessageInput";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { sendMessage } from "@/apis/chatbot";
import { ChatDataType, ChatResponseType } from "@/types/chatbot";
import { AxiosResponse } from "axios";
import ChatHeader from "@/components/ChatBot/ChatHeader";
import { ChatbotMessages } from "@/constants/chatbot";
import Pending from "@/components/Pending";

const ChatBot = () => {
    const [response, setResponse] = useState<ChatDataType[] | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { CHATBOT_NO_REPLY, CHATBOT_SERVER_ERROR } = ChatbotMessages;

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [response]);

    const confirmHandler = () => {
        if (inputRef.current && inputRef.current.value) {
            const message = inputRef.current.value;
            const data: ChatDataType = {
                timestamp: Date.now(),
                message: message,
                type: "send",
            };
            setPending(true);
            setResponse((prev) => (prev ? [...prev, data] : [data]));
            inputRef.current.value = "";

            sendMessage(message)
                .then(
                    (
                        res: AxiosResponse<ChatResponseType, ChatResponseType>,
                    ) => {
                        if (res) {
                            const data: ChatDataType = {
                                timestamp: Date.now(),
                                message: res.data.result.reply,
                                type: "receive",
                            };
                            setResponse((prev) =>
                                prev ? [...prev, data] : [data],
                            );
                            setPending(false);
                        }
                    },
                )
                .catch((e) => {
                    console.log(e);
                    const data: ChatDataType = {
                        timestamp: Date.now(),
                        message: `${CHATBOT_SERVER_ERROR} 에러 코드: ${e.code}`,
                        type: "receive",
                    };
                    setResponse((prev) => (prev ? [...prev, data] : [data]));
                    setPending(false);
                });
        }
    };

    return (
        <Container>
            <ChatHeader />
            <ChatContainer ref={containerRef}>
                {response &&
                    response.map((e) => (
                        <Bubble
                            key={e.timestamp}
                            type={e.type === "send" ? "send" : "receive"}
                            timestamp={e.timestamp}
                        >
                            {e.message ? e.message : CHATBOT_NO_REPLY}
                        </Bubble>
                    ))}
                {pending && (
                    <Bubble type="receive">
                        <Pending />
                    </Bubble>
                )}
            </ChatContainer>
            <InputContainer
                onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    confirmHandler();
                }}
            >
                <MessageInput ref={inputRef} />
                <SendButton disabled={pending} />
            </InputContainer>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: min(480px, 100%);
    height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    overflow-y: hidden;
`;

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding-top: 80px;
`;

const InputContainer = styled.form`
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: min(480px, 100%);
    height: 70px;
    border-top: 1px solid rgba(235, 235, 235, 1);
    background-color: ${({ theme }) => theme.colors.white};
`;

export default ChatBot;
