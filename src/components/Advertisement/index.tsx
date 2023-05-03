import React from "react";
import styled from "styled-components";

const index = () => {
    return <Container>Ad Section</Container>;
};

const Container = styled.div`
    width: calc(100% + 40px);
    height: 100px;
    background-color: ${({ theme }) => theme.pageBtn};
    opacity: 0.1;
`;

export default index;
