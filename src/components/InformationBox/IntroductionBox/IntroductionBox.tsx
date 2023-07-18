import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TechStack from "./TechStack";
import Developers from "./Developers";

const IntroductionBox = () => {
    return (
        <Container>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>🔎 서비스 개요 </SubTitle>
                    전라남도 청년들에게 제공되는 문화복지카드 사용처를 쉽게
                    검색할 수 있는 웹 서비스 입니다.
                    <br />
                    키워드로 가맹점을 검색할 수 있는 기능과 현 위치 중심으로
                    지도를 통해 가맹점을 검색할 수 있는 기능을 제공합니다.
                </TableBodyCell>
            </TableBodyContainer>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>👥 참여 개발자</SubTitle>
                    <Developers />
                </TableBodyCell>
            </TableBodyContainer>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>📆 개발 기간</SubTitle>
                    1차 : 2023.4.20 ~ 2023.5.02 <br />
                    2차 : 2023.5.02 ~ 2023.5.25
                </TableBodyCell>
            </TableBodyContainer>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>🗒️ 프로젝트 아카이브</SubTitle>

                    <img src="https://img.shields.io/badge/Notion-white?style=flat&logo=notion&logoColor=black" />
                </TableBodyCell>
            </TableBodyContainer>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>🔧 기술 스택</SubTitle>
                    <TechStack />
                </TableBodyCell>
            </TableBodyContainer>
            <TableBodyContainer>
                <TableBodyCell>
                    <SubTitle>📞 Contact</SubTitle>
                    <Link
                        to="#"
                        style={{ color: "#ff3399", fontSize: "inherit" }}
                        onClick={(e) => {
                            window.location.href =
                                "mailto:support@youthwelfare.kr?Subject=건의합니다.";
                            e.preventDefault();
                        }}
                    >
                        support@youthwelfare.kr
                    </Link>
                </TableBodyCell>
            </TableBodyContainer>
        </Container>
    );
};

export default IntroductionBox;

const Container = styled.div`
    width: 100%;
    margin: 30px 0px;
    margin-bottom: 15px;
    box-shadow: 0 2px 10px -5px rgba(0, 0, 0, 0.2);
`;
const SubTitle = styled.h3`
    width: auto;
    height: 45px;
    text-align: left;
    font-family: "OAGothic", sans-serif;
    font-weight: 500;
    font-size: 20px;
`;

const TableBodyContainer = styled.div`
    padding-top: 10px;
    display: flex;
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid #eee;
    &:last-child {
        border-radius: 0 0 20px 20px;
        border: none;
    }
    &:first-child {
        border-radius: 20px 20px 0 0;
    }
`;

const TableBodyCell = styled.div`
    width: 100%;
    font-size: ${({ theme }) => theme.sizes.m};
    padding: 10px 18px;
    &:nth-child {
        text-align: left;
        width: 70%;
    }
`;
