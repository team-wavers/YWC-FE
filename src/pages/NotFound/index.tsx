import React from "react";
import { ReactComponent as Warning } from "../../assets/icons/warning-icon.svg";
import styled from "styled-components";

const index = () => {
    return (
        <Container>
            <Warning fill="#93A8BB" />
            <Text>Page Not Found</Text>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;
    height: 300px;
`;

const Text = styled.p`
    font-size: ${({ theme }) => theme.l};
    color: ${({ theme }) => theme.pageBtn};
`;

export default index;
