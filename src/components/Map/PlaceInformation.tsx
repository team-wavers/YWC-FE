import React from "react";
import styled from "styled-components";
import { ReactComponent as MarkerIcon } from "../../assets/icons/marker-icon.svg";
import { ReactComponent as CategoryIcon } from "../../assets/icons/category-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";

type PIPropsType = {
    name: string | null;
    category: string | null;
    address: string | null;
    onCloseEvent: () => void;
    visible?: `visible` | `hidden`;
};

const PlaceInformation = ({
    name,
    category,
    address,
    onCloseEvent,
}: PIPropsType) => {
    return (
        <Container>
            <CloseButton onClick={onCloseEvent}>
                <CloseIcon width="22" />
            </CloseButton>
            <StoreName>{name}</StoreName>
            <Metadata>
                {address && (
                    <Address>
                        <MarkerIcon width="12" style={{ flexShrink: 0 }} />
                        {address}
                    </Address>
                )}
                {category && (
                    <Category>
                        <CategoryIcon width="12" style={{ flexShrink: 0 }} />
                        {category}
                    </Category>
                )}
            </Metadata>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: calc(100% - 20px);
    min-height: 100px;
    font-size: ${({ theme }) => theme.sizes.l};
    padding: 15px 20px;
    list-style: none;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 15px;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
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

const StoreName = styled.h2`
    width: 70%;
    font-size: ${({ theme }) => theme.sizes.m};
    font-family: "OAGothic";
    font-weight: 500;
    text-align: left;
    line-height: 20px;
`;

const Metadata = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    width: auto;
    height: auto;
`;

const Address = styled.span`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    float: right;
    gap: 7px;
    font-size: ${({ theme }) => theme.sizes.s};
    line-height: ${({ theme }) => theme.sizes.m};
`;

const Category = styled(Address)``;

export default PlaceInformation;
