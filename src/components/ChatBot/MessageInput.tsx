import React, { forwardRef } from "react";
import styled from "styled-components";

const MessageInput = (
    props: unknown,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    return (
        <TextInput ref={ref} type="text" placeholder="메세지를 입력해주세요." />
    );
};

const TextInput = styled.input`
    width: 100%;
    height: 70px;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0 20px;
`;

export default forwardRef(MessageInput);
