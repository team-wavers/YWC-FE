import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const usePagination = (
    total: number,
    limit: number,
    maxPage: number,
    currentPage: number,
) => {
    const totalPages = Math.ceil(total / limit);
    const [params] = useSearchParams();

    const pageRefresher = (page: number) => {
        return Array.from({ length: maxPage }, (_, index) => index + page);
    };

    const [startPage, setStartPage] = useState<number>(1);
    const pageRange = useMemo<Array<number>>(
        () => pageRefresher(startPage),
        [startPage],
    );

    const prevPage = () => {
        if (currentPage > 1) {
            if ((currentPage - 1) % maxPage === 0) {
                setStartPage((prev) => prev - maxPage);
            }
            return currentPage - 1;
        }
        return null;
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            if ((currentPage + 1) % maxPage === 1) {
                setStartPage((prev) => prev + maxPage);
            }
            return currentPage + 1;
        }
        return null;
    };

    useEffect(() => {
        setStartPage(1);
    }, [params.get("q")]);

    useEffect(() => {
        setStartPage(currentPage - ((currentPage - 1) % maxPage));
    }, [currentPage]);

    return { prevPage, nextPage, pageRefresher, pageRange, totalPages };
};

export default usePagination;
