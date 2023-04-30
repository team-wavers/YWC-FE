import React from "react";
import styled from "styled-components";

type SearchInputPropsType = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    defaultValue: string;
};

const index = ({
    onChange,
    onKeyPress,
    defaultValue,
}: SearchInputPropsType) => {
    return (
        <Input
            onChange={onChange}
            onKeyPress={onKeyPress}
            defaultValue={defaultValue}
            placeholder="검색어를 입력하세요! (ex: 용용분식)"
        />
    );
};

const Input = styled.input`
    width: min(300px, 100%);
    height: 50px;
    border: none;
    outline: none;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.m};
    &::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }
`;

export default index;
