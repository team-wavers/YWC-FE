import { responseType } from "@_types/response";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getStoreList } from "@apis/store";
import { AxiosError, AxiosResponse } from "axios";

export const useStoreList = (
    q: string,
    page: number,
    size = 5,
    city: string | null,
) => {
    return useQuery<
        Promise<AxiosResponse<responseType>>,
        AxiosError,
        responseType,
        [string, string, number]
    >(
        ["ywc.storeList", q, page],
        async () => {
            const request = await getStoreList(q, String(page), size, city);
            return request.data;
        },
        { enabled: false },
    );
};

export const useSLInfQuery = (q: string) => {
    const { data, status, isFetching, fetchNextPage, hasNextPage } =
        useInfiniteQuery<{
            result: responseType;
            nextPage: number;
            currentPage: number;
            maxPage: number;
        }>(
            ["ywc.storeList.infQuery", q],
            async ({ pageParam = 1 }) => {
                const request: AxiosResponse<responseType> = await getStoreList(
                    q,
                    String(pageParam),
                    10,
                    null,
                );
                return {
                    currentPage: pageParam,
                    result: request.data,
                    nextPage: pageParam + 1,
                    maxPage: Math.ceil(request.data.result.count / 10),
                };
            },
            {
                getNextPageParam: (lastPage) => {
                    return lastPage.currentPage >= lastPage.maxPage
                        ? undefined
                        : lastPage.nextPage;
                },
            },
        );

    return { data, status, isFetching, fetchNextPage, hasNextPage };
};
