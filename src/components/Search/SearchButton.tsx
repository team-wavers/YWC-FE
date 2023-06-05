import React, { forwardRef } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@assets/icons/search-icon.svg"; // 추후에 수정

const SearchButton = (
    _props: unknown,
    ref: React.ForwardedRef<HTMLButtonElement>,
) => {
    return (
        <Container ref={ref}>
            <SearchIcon width="24" fill="#fff" />
        </Container>
    );
};

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.pageBtnActive};
`;

export default forwardRef(SearchButton);
