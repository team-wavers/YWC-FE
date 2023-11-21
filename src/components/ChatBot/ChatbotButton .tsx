import React from "react";
import styled from "styled-components";
import { ReactComponent as ChatbotIcon } from "@assets/icons/chatbot-icon.svg";

type ShareButtonPropsType = {
    onClick: () => void;
};

const ShareButton = ({ onClick }: ShareButtonPropsType) => {
    return (
        <Container>
            <ButtonContainer onClick={onClick}>
                <ChatbotIcon
                    width={30}
                    height={30}
                    style={{
                        marginTop: "3px",
                        marginLeft: "2px",
                        fill: "#fff",
                    }}
                />
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    left: calc(50% - 20px);
    bottom: 100px;
    transform: translateX(-50%);
    width: min(480px, 100%);
    height: 50px;
    z-index: 999;
`;

const ButtonContainer = styled.button`
    width: 60px;
    height: 60px;
    background-color: #f5708c;
    outline: none;
    border: none;
    border-radius: 60px;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
`;

export default ShareButton;
