import React from "react";
import styled from "styled-components";
import Feedback from "./Feedback";
import Table from "./Table";

const index = () => {
    return (
        <Container>
            <Table />
            <Feedback />
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100px;
    text-align: center;
    font-family: "OAGothic", sans-serif;
    padding: 20px;
    padding-top: 0;
    font-size: ${({ theme }) => theme.l};
    line-height: ${({ theme }) => theme.xl};
    color: ${({ theme }) => theme.black};
`;

export default index;
