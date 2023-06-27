import React, { forwardRef } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "@assets/icons/search-icon.svg";

type MapSearchPropTypes = {
    searchHandler: () => void;
};

const MapSearch = (
    props: MapSearchPropTypes,
    ref: React.ForwardedRef<HTMLInputElement>,
) => {
    const { searchHandler } = props;
    return (
        <Container>
            <SearchInput
                placeholder="사용처를 검색해 보세요!"
                onKeyDown={(e) => {
                    e.key === "Enter" && searchHandler();
                }}
                ref={ref}
            />
            <SearchButton>
                <SearchIcon
                    fill="#ccc"
                    onClick={() => {
                        searchHandler();
                    }}
                />
            </SearchButton>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    z-index: 999;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 50px;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 5px 20px;
    padding-right: 0;
    font-size: ${({ theme }) => theme.sizes.m};
`;

const SearchButton = styled.button`
    width: 70px;
    height: 50px;
    background-color: transparent;
    outline: none;
    border: none;
`;

export default forwardRef(MapSearch);
