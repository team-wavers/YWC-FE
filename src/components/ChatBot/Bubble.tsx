import React from "react";
import styled from "styled-components";

type Props = {
    type: "send" | "receive";
    children: React.ReactNode;
    timestamp: number;
};

const Bubble = ({ type, children, timestamp }: Props) => {
    const date = new Date(timestamp);
    return (
        <Container type={type}>
            <BubbleContainer type={type}>{children}</BubbleContainer>
            <Time>
                {date.getHours() < 12 ? `오전 ` : `오후 `}
                {date.getHours() > 12 ? date.getHours() % 12 : date.getHours()}:
                {date.getMinutes() < 10
                    ? `0${date.getMinutes()}`
                    : date.getMinutes()}
            </Time>
        </Container>
    );
};

const Container = styled.div<{ type: "send" | "receive" }>`
    display: flex;
    flex-direction: column;
    ${({ type }) => type === "send" && `align-items: flex-end;`}
    ${({ type }) => type === "receive" && `align-items: flex-start;`}
    width: 100%;
    height: auto;
    font-family: "Pretendard", sans-serif;
    padding: 10px 20px;
`;

const BubbleContainer = styled.div<{ type: "send" | "receive" }>`
    display: inline-block;
    min-width: 30px;
    width: auto;
    max-width: 300px;
    min-height: 30px;
    ${({ type }) =>
        type === "send" &&
        `background-color: #6BABE7; color: white; border-radius: 15px 15px 5px 15px;`}
    ${({ type }) =>
        type === "receive" &&
        `background-color: rgb(234, 234, 234);  border-radius: 15px 15px 15px 5px;`}
    padding: 10px;
    font-size: ${({ theme }) => theme.sizes.m};
    word-break: break-all;
    line-height: ${({ theme }) => theme.sizes.l};
`;

const Time = styled.span`
    width: auto;
    display: inline-block;
    font-size: ${({ theme }) => theme.sizes.s};
    color: ${({ theme }) => theme.colors.placeholder};
    padding: 3px 0 0 2px;
`;

export default Bubble;
