import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useStoreList } from "@hooks/queries/useStoreList";
import { Loading } from "@components/core";
import { ListView } from "@components/ListView";
import { ListItem } from "@components/ListView";
import { Pagination } from "@components/core";
import { IStore } from "@_types/store";
import { ReactComponent as NoResultIcon } from "@assets/icons/no-result-emoji-icon.svg";
import FilteringBox from "@/components/FilteringBox/FilteringBox";
import cityList from "@/constants/city";
import FilteringItem from "@/components/FilteringBox/FilteringItem";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [query, page] = [searchParams.get("q"), searchParams.get("page")];
    const [city, setCity] = useState<string | null>(null);
    const { status, data, refetch } = useStoreList(
        String(query),
        Number(page),
        5,
        city,
    );

    useEffect(() => {
        refetch();
    }, [query, page, city]);

    useEffect(() => {
        const c = searchParams.get("city");
        if (c) {
            setCity(c);
        } else {
            setCity(null);
        }
    }, [searchParams.get("city")]);

    useEffect(() => {
        setCity(null);
    }, [query]);

    if (status === "loading") return Loading();
    return (
        <LVContainer>
            <FilteringBox>
                <FilteringItem selected={false} city={null}>
                    전체
                </FilteringItem>

                {cityList.map((e: string, i) => {
                    return (
                        <FilteringItem selected={city === e} city={e} key={i}>
                            {e}
                        </FilteringItem>
                    );
                })}
            </FilteringBox>
            {data && data.result.count === 0 ? (
                <NoResultContainer>
                    <NoResultIcon width={50} height={50} fill="#afafaf" />
                    <NoResultTitle>
                        &quot;{query}&quot; 에 대한 검색 결과가 없습니다.
                    </NoResultTitle>
                    <NoResultSubTitle>
                        검색어를 다시 확인해 보시겠어요?
                    </NoResultSubTitle>
                </NoResultContainer>
            ) : (
                data && (
                    <>
                        <ResultCount>
                            {data?.result.count}개의 사용처가 있습니다.
                        </ResultCount>
                        <ListView>
                            {data?.result.rows.map((e: IStore) => {
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
                    </>
                )
            )}

            <Pagination
                total={data ? data.result.count : -1}
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
