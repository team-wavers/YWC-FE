import React from "react";
import styled from "styled-components";

const index = () => {
    return <Container>Ad Section</Container>;
};

const Container = styled.div`
    width: 320px;
    height: 100px;
    background-color: ${({ theme }) => theme.pageBtn};
    margin-bottom: 20px;
    opacity: 0.1;
`;

export default index;
