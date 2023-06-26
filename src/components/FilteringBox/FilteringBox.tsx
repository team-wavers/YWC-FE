import React from "react";
import styled from "styled-components";

// 목표 : 검색된 리스트들의 지역을 가져와서 필터링 박스로 나열하기.
// 목표 : 박스를 클릭하면 해당 지역이 포함된 검색결과만 필터링.

type FilteringBoxPropTypes = {
    children: React.ReactNode;
};
const FilteringBox = ({ children }: FilteringBoxPropTypes) => {
    return <FilteringContainer>{children}</FilteringContainer>;
};
const FilteringContainer = styled.ul`
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
    max-width: 100%;
`;
export default FilteringBox;
