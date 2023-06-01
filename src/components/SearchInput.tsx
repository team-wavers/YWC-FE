import React from "react";
import styled from "styled-components";

type SearchInputPropsType = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    defaultValue: string;
};

const SearchInput = ({
    onChange,
    onKeyPress,
    defaultValue,
}: SearchInputPropsType) => {
    return (
        <Input
            onChange={onChange}
            onKeyPress={onKeyPress}
            defaultValue={defaultValue}
            placeholder="검색어를 입력하세요! (ex: 순천대학생백화점)"
        />
    );
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

export default SearchInput;
