import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const index = () => {
    return (
        <FooterContainer>
            <Text>
                {/* Feedback:{" "}
                <Link
                    to="#"
                    style={{ color: "#ff3399", fontSize: "inherit" }}
                    onClick={(e) => {
                        window.location.href = "mailto:support@youthwelfare.kr";
                        e.preventDefault();
                    }}
                >
                    support@youthwelfare.kr
                </Link> */}
            </Text>
            <Text>© 2023 youthwelfare.kr - All Rights Reserved.</Text>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-size: ${({ theme }) => theme.s};
    color: ${({ theme }) => theme.pageBtn};
`;

const Text = styled.p`
    display: block;
    font-size: inherit;
`;

export default index;
