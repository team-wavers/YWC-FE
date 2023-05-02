import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const index = () => {
    return (
        <>
            <FeedbackContainer>
                <FeedbackTitle>여러분의 피드백이 필요해요! 👇</FeedbackTitle>
                <FeedbackSubTitle>
                    원하는 기능, 잘못된 정보, 개선 사항 등의 피드백이
                    <br />
                    서비스 개선에 큰 도움이 됩니다!
                </FeedbackSubTitle>
                <EmailContainer>
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
                </EmailContainer>
            </FeedbackContainer>
        </>
    );
};

const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 60px 20px 0 20px;
`;

const FeedbackTitle = styled.h3`
    width: 100%;
    font-size: ${({ theme }) => theme.l};
    margin-bottom: 5px;
`;

const FeedbackSubTitle = styled.h4`
    font-size: ${({ theme }) => theme.m};
    font-weight: 500;
    line-height: ${({ theme }) => theme.l};
`;

const EmailContainer = styled.div`
    width: 200px;
    height: 40px;
    background-color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.m};
    line-height: 40px;
    padding: 0 10px;
    border-radius: 20px;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.1);
    margin: 15px;
`;

export default index;
