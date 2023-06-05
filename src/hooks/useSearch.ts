import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const useSearch = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [searchParams] = useSearchParams();
    const nav = useNavigate();

    const searchHandler = () => {
        const keyword = inputRef.current ? inputRef.current.value : "";
        keyword &&
            !searchParams.get("page") &&
            nav(`search?q=${keyword}&page=1`);
    };

    useEffect(() => {
        buttonRef.current &&
            buttonRef.current.addEventListener("click", searchHandler);

        inputRef.current &&
            inputRef.current.addEventListener("keypress", (e) => {
                e.key === "Enter" && searchHandler();
            });
    }, []);

    return { inputRef, buttonRef };
};

export default useSearch;
