import React, { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

//클릭 시 해당 아이템의 키워드를 url에 추가하며 nav(`search?q=${keyword}&page=1&city={city}`); 페이지로 이동
//그럼 그 카테고리에 있는 애들만 검색결과에 뜨겠찌

//useref로 button element에 접근해서 해당 button의 value를 가져옴. 이 value를 na
//버튼 클릭 시 useref로 가져온

//그냥 클릭하면 파라미터에 도시 추가해서 nav
type citytype = {
    city: string;
};
const FilteringItem = ({ city }: citytype) => {
    const [searchParms] = useSearchParams();
    const nav = useNavigate();
    const q = searchParms.get("q");

    const searchHandler = () => {
        const cityname = { city }.city;
        console.log({ city }.city);

        nav(`?q=${q}&page=1&city=${cityname}`);
    };

    return <FilteringButton onClick={searchHandler}>{city}</FilteringButton>;
};
const FilteringButton = styled.button`
    outline: none;
    display: inline-block;
    border: thin;
    padding: 10px 20px;
    background: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.sizes.s};
    border-radius: 15px;
    margin-right: 10px;
    box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.05);
`;

export default FilteringItem;
