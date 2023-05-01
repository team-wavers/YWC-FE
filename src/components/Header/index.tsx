import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const index = () => {
    return (
        <Container>
            <Link to={"/"}>
                <Title>문화복지카드 사용처 검색</Title>
            </Link>
        </Container>
    );
};

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 130px;
    padding: 30px 0 0 0;
    background: rgb(65 145 222);
`;

const Title = styled.h1`
    font-size: ${({ theme }) => theme.l};
    font-family: "OAGothic";
    font-weight: 800;
    line-height: ${({ theme }) => theme.x2l};
    color: ${({ theme }) => theme.white};
    text-align: center;
`;

export default index;
