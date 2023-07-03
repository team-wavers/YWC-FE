import React, { forwardRef } from "react";
import styled from "styled-components";

type SearchListPropTypes = {
    children: React.ReactNode;
    isVisible: boolean;
};

const MapSearchList = (
    { isVisible, children }: SearchListPropTypes,
    ref: React.ForwardedRef<HTMLUListElement>,
) => {
    return (
        <Container ref={ref} isVisible={isVisible}>
            {children}
        </Container>
    );
};

const Container = styled.ul<{ isVisible: boolean }>`
    position: relative;
    display: ${({ isVisible }) => (isVisible ? `flex` : `none`)};
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
