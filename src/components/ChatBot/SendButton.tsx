import React from "react";
import styled from "styled-components";
import { ReactComponent as SendIcon } from "@assets/icons/airplane-icon.svg";

type Props = {
    disabled: boolean;
};

const SendButton = ({ disabled }: Props) => {
    return (
        <ButtonContainer disabled={disabled}>
            <SendIcon fill="#ffffff" />
        </ButtonContainer>
    );
};

const ButtonContainer = styled.button<{ disabled: boolean }>`
    width: 100px;
    height: 70px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.pageBtnActive};
    ${(props) => props.disabled && `background-color: rgb(148,148,148);`}
`;

export default SendButton;
