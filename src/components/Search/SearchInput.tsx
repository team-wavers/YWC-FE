import React, { forwardRef } from "react";
import styled from "styled-components";

const SearchInput = (
    _props: unknown,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return <Input ref={ref} placeholder="사용처를 검색해 보세요!" />;
};

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.sizes.m};
    &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }
`;

export default forwardRef(SearchInput);
