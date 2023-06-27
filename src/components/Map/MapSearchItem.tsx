import { IStore } from "@/types/store";
import React from "react";
import styled from "styled-components";
import { ReactComponent as MarkerIcon } from "@assets/icons/marker-icon.svg";
import { ReactComponent as CategoryIcon } from "@assets/icons/category-icon.svg";

type MapSearchItemPropTypes = {
    name: string | null;
    category: string | null;
    address: string | null;
    clickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const MapSearchItem = ({
    name,
    category,
    address,
    clickHandler,
}: MapSearchItemPropTypes) => {
    return (
        <Container onClick={clickHandler}>
            <StoreName>{name}</StoreName>
            {category && (
                <Category>
                    <CategoryIcon width="12" />
                    <StoreCategory>{category}</StoreCategory>
                </Category>
            )}
            {address && (
                <Address>
                    <MarkerIcon width="12" />
                    <StoreAddress>{address}</StoreAddress>
                </Address>
            )}
        </Container>
    );
};

const Container = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 5px;
    border-bottom: 1px solid #eee;
    &:last-child {
        border-bottom: none;
    }
`;

const StoreName = styled.h1`
    width: auto;
    font-size: ${({ theme }) => theme.sizes.m};
    font-family: "OAGothic";
    font-weight: 500;
    text-align: left;
    line-height: 20px;
    padding-bottom: 5px;
`;

const Category = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
`;

const StoreCategory = styled(StoreName)`
    padding-bottom: 0;
    font-size: ${({ theme }) => theme.sizes.s};
    font-weight: 400;
`;

const Address = styled(Category)``;

const StoreAddress = styled(StoreCategory)`
    font-size: ${({ theme }) => theme.sizes.s};
`;

export default MapSearchItem;
