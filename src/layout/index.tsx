import React from "react";
import styled from "styled-components";
import Header from "../components/Header"; // 추후에 수정
import Footer from "../components/Footer";

type layoutPropsType = {
    children: React.ReactNode;
};

const index = ({ children }: layoutPropsType) => {
    return (
        <Container>
            <Header />
            {children}
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: min(480px, 100%);
    min-height: 100vh;
    margin: 0 auto;
    background-color: #cbd1d7;
    color: ${({ theme }) => theme.black}
    font-size: ${({ theme }) => theme.l};
`;

export default index;
