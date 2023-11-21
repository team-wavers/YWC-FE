import React from "react";
import styled, { keyframes } from "styled-components";

const Pending = () => {
    return (
        <Container>
            <DotFlashing />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 40px;
    height: auto;
`;

const FlashingAnimation = keyframes`
    0% {
        background-color: #6babe7;
    }
    50%,
    100% {
        background-color: rgba(107,171,231,.2);
    }
`;

const DotFlashing = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #6babe7;
    color: #6babe7;
    animation: ${FlashingAnimation} 1s infinite linear alternate;
    animation-delay: 0.5s;
    &::before,
    &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
    }
    &::before {
        left: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #6babe7;
        color: #6babe7;
        animation: ${FlashingAnimation} 1s infinite alternate;
        animation-delay: 0s;
    }
    &::after {
        left: 15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #6babe7;
        color: #6babe7;
        animation: ${FlashingAnimation} 1s infinite alternate;
        animation-delay: 1s;
    }
`;

export default Pending;
