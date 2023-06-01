import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeft } from "../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/arrow-right.svg";
import usePagination from "../hooks/usePagination";
import { useSearchParams } from "react-router-dom";

type PaginationPropsType = {
    total: number;
    limit: number;
    maxPage: number;
};

type PageButtonPropsType = {
    activated?: boolean;
};

const Pagination = ({ total, limit, maxPage }: PaginationPropsType) => {
    const [params, setParams] = useSearchParams();
    const { prevPage, nextPage, pageRange, totalPages } = usePagination(
        total,
        limit,
        maxPage,
        Number(params.get("page")),
    );

    const pageHandler = (page: number | null) => {
        page !== null &&
            setParams({ q: String(params.get("q")), page: String(page) });
    };

    return (
        <Container>
            <PageButton
                style={{ width: "50px" }}
                onClick={() => {
                    pageHandler(prevPage());
                }}
            >
                <ArrowLeft width="20" fill="#93A8BB" />
            </PageButton>
            {pageRange
                .filter((c) => c <= totalPages)
                .map((i) => {
                    return (
                        <PageButton
                            onClick={() => pageHandler(i)}
                            key={i}
                            activated={Number(params.get("page")) === i}
                        >
                            {i}
                        </PageButton>
                    );
                })}
            <PageButton
                style={{ width: "50px" }}
                onClick={() => {
                    pageHandler(nextPage());
                }}
            >
                <ArrowRight width="20" fill="#93A8BB" />
            </PageButton>
        </Container>
    );
};

const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    min-height: 100px;
    padding: 10px 20px;
    padding-bottom: 70px;
`;

const PageButton = styled.button<PageButtonPropsType>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.pageBtn};
    ${({ activated, theme }) =>
        activated &&
        `background-color: ${theme.colors.pageBtnActive}; border-radius: 10px; color: white;`};
`;

export default Pagination;
