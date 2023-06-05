import { responseType } from "@_types/response";
import { useQuery } from "@tanstack/react-query";
import { getStoreList } from "@apis/store";
import { AxiosError } from "axios";

export const useStoreList = (q: string, page: number, size = 5) => {
    return useQuery<
        responseType,
        AxiosError,
        responseType,
        [string, string, number]
    >(["ywc.storeList", q, page], async () => {
        const request = await getStoreList(q, String(page), size);
        return request;
    });
};
