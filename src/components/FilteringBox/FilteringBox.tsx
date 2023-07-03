import React from "react";
import styled from "styled-components";

type FilteringBoxPropTypes = {
    children: React.ReactNode;
};
const FilteringBox = ({ children }: FilteringBoxPropTypes) => {
    return <FilteringContainer>{children}</FilteringContainer>;
};
const FilteringContainer = styled.div`
    ::-webkit-scrollbar {
        width: 0%;
    }
    white-space: nowrap;
    overflow: auto;
    list-style: none;
    text-align: center;
    display: inline-block;
    background: ${({ theme }) => theme.colors.bg};
    margin-right: 10px;
    padding: 5px 0;
    max-width: 100%;
`;
export default FilteringBox;
