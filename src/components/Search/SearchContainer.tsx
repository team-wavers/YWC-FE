import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import useSearch from "@hooks/useSearch";

const SearchContainer = () => {
    const { inputRef, buttonRef } = useSearch();
    return (
        <Container>
            <SearchInput ref={inputRef} />
            <SearchButton ref={buttonRef} />
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 10px 10px -10px rgba(0, 0, 0, 0.1);
`;

export default SearchContainer;
