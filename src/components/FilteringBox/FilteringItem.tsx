import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

type FIPropTypes = {
    city: string | null;
    children: React.ReactNode;
    selected: boolean;
};

type ButtonPropTypes = {
    selected: boolean;
};

const FilteringItem = ({ city, children, selected }: FIPropTypes) => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const nav = useNavigate();

    const clickHandler = () => {
        city
            ? nav(`?q=${query}&page=1&city=${city}`)
            : nav(`?q=${query}&page=1`);
    };

    return (
        <FilteringButton selected={selected} onClick={clickHandler}>
            {children}
        </FilteringButton>
    );
};
const FilteringButton = styled.button<ButtonPropTypes>`
    outline: none;
    display: inline-block;
    border: thin;
    padding: 10px 20px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-family: "OAGothic", sans-serif;
    font-size: ${({ theme }) => theme.sizes.s};
    border-radius: 15px;
    margin-right: 10px;
    box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.05);
    ${({ theme, selected }) =>
        selected &&
        `
        color: ${theme.colors.white};
        background-color: ${theme.colors.pageBtnActive};
    `}
`;

export default FilteringItem;
