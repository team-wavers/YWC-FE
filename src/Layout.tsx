import React from "react";
import styled from "styled-components";
import Header from "@components/Header"; // 추후에 수정
import Footer from "@components/Footer";
import ShareModal from "@components/Share/ShareModal";
import ShareButton from "@components/Share/ShareButton";
import SearchContainer from "@components/Search/SearchContainer";
import { Outlet } from "react-router-dom";
import useModal from "@hooks/useModal";

const Layout = () => {
    const { isOpen, setIsOpen, modalRef } = useModal();
    return (
        <Container>
            <Header />
            <SearchContainer />
            <Main>
                <Outlet />
            </Main>
            {!isOpen && (
                <ShareButton onClick={() => setIsOpen((prev) => !prev)} />
            )}
            <ShareModal
                closeBtnHandler={() => setIsOpen((prev) => !prev)}
                ref={modalRef}
            />
            <Footer />
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: min(480px, 100%);
    min-height: 100vh;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.black}
    font-size: ${({ theme }) => theme.sizes.l};
`;

const Main = styled.main`
    width: 100%;
    height: auto;
    background-color: ${({ theme }) => theme.colors.bg};
`;

export default Layout;
