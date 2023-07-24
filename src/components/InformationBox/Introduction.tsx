import React from "react";
import styled from "styled-components";
import IntroductionBox from "./IntroductionBox/IntroductionBox";
import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <>
            <Container>
                <Tiltle>이 프로젝트에 대한 자세한 내용👇</Tiltle>
                <SubTitle>서비스 개요, 참여 개발자, 기술 스택 등</SubTitle>
            </Container>
            <Link
                to="https://github.com/team-culfare"
                style={{
                    color: "white",
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: "black",
                }}
            >
                Github Website
            </Link>
            <IntroductionBox />
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 60px 20px 20px 20px;
`;

const Tiltle = styled.h3`
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.l};
    margin-bottom: 5px;
`;

const SubTitle = styled.h4`
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 500;
    line-height: ${({ theme }) => theme.sizes.l};
`;

export default Introduction;
