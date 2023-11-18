import React from "react";
import RobotImage from "@assets/icons/robot.jpeg";
import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
    const nav = useNavigate();
    return (
        <Container>
            <BackHomeButton onClick={() => nav("/")}>
                <ArrowLeft fill="#ddd" width={20} height={20} />
            </BackHomeButton>
            <ProfileImage src={RobotImage} />
            <InfoContainer>
                <Name>컬봇(CulBot)</Name>
            </InfoContainer>
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgba(235, 235, 235, 1);
    padding: 0px 10px;
    background-color: ${({ theme }) => theme.colors.white};
`;

const BackHomeButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    margin-right: 20px;
`;

const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid rgba(235, 235, 235, 1);
    padding: 3px;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: auto;
    height: auto;
    gap: 3px;
`;

const Name = styled.span`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 600;
`;

export default ChatHeader;
