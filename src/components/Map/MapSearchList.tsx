import React, { forwardRef } from "react";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "@assets/icons/close-icon.svg";

type SearchListPropTypes = {
    children: React.ReactNode;
    isVisible: boolean;
    onClick: () => void;
};

const MapSearchList = (
    { isVisible, children, onClick }: SearchListPropTypes,
    ref: React.ForwardedRef<HTMLDivElement>,
) => {
    return (
        <Container ref={ref} isVisible={isVisible}>
            <CloseButton onClick={onClick}>
                <CloseIcon width="22" />
            </CloseButton>
            <ListContainer>{children}</ListContainer>
        </Container>
    );
};

const Container = styled.div<{ isVisible: boolean }>`
    position: relative;
    display: ${({ isVisible }) => (isVisible ? `block` : `none`)};
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: transparent;
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    min-height: 100px;
    max-height: 200px;
    margin-bottom: -20px;
    padding: 20px;
    padding-bottom: 30px;
    background-color: white;
    box-shadow: 0px 4px 5px 2px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0%;
    }
`;

export default forwardRef(MapSearchList);
