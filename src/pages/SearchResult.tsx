import React, { useEffect } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useStoreList } from "@hooks/queries/useStoreList";
import Loading from "@components/Loading";
import ListView from "@components/ListView/ListView";
import ListItem from "@components/ListView/ListItem";
import Pagination from "@/components/Pagination";
import { IStore } from "@/types/store";
import { ReactComponent as NoResultIcon } from "@assets/icons/no-result-emoji-icon.svg";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [query, page] = [searchParams.get("q"), searchParams.get("page")];
    const { status, data, refetch } = useStoreList(
        String(query),
        Number(page),
        5,
    );

    // refetch data when query or page changeds
    useEffect(() => {
        refetch();
    }, [query, page]);

    if (status === "loading") return Loading();
    if (data && data.result.count === 0)
        return (
            <NoResultContainer>
                <NoResultIcon width={50} height={50} fill="#afafaf" />
                <NoResultTitle>
                    &quot;{query}&quot; 에 대한 검색 결과가 없습니다.
                </NoResultTitle>
                <NoResultSubTitle>
                    검색어를 다시 확인해 보시겠어요?
                </NoResultSubTitle>
            </NoResultContainer>
        );
    if (data && data.result.count > 0)
        return (
            <LVContainer>
                <ResultCount>
                    {data.result.count}개의 사용처가 있습니다.
                </ResultCount>
                <ListView>
                    {data.result.rows.map((e: IStore) => {
                        return (
                            <ListItem
                                key={e._id}
                                _id={e._id}
                                name={e.name}
                                category={e.category}
                                address={e.address}
                                phone={e.phone}
                            />
                        );
                    })}
                </ListView>
                <Pagination
                    total={data.result.count}
                    limit={Number(5)}
                    maxPage={5}
                />
            </LVContainer>
        );
    return <></>;
};

const LVContainer = styled.section`
    width: 100%;
    height: auto;
    padding: 14px 20px;
`;

const ResultCount = styled.h3`
    display: block;
    width: 100%;
    height: 30px;
    color: ${({ theme }) => theme.colors.pageBtn};
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 600;
`;

const NoResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 100%;
    height: 300px;
    padding: 14px 20px;
`;

const NoResultTitle = styled.h1`
    font-size: ${({ theme }) => theme.sizes.l};
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.colors.placeholder};
`;

const NoResultSubTitle = styled.h2`
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 400;
    text-align: center;
    color: ${({ theme }) => theme.colors.placeholder};
`;

export default SearchResult;
