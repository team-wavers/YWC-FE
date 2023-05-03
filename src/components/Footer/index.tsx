import React from "react";
import styled from "styled-components";
import Advertisement from "../Advertisement";

const index = () => {
    return (
        <FooterContainer>
            <Advertisement />
            <Text>© 2023 youthwelfare.kr - All Rights Reserved.</Text>
        </FooterContainer>
    );
};

const FooterContainer = styled.footer`
    width: 100%;
    min-height: 70px;
    padding-bottom: 20px;
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
