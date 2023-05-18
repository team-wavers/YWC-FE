import { useEffect, useState } from "react";

const useDebounce = (
    value: { result: string | null; lat: number; lng: number },
    delay: number,
) => {
    const [dValue, setdValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setdValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    });

    return dValue;
};

export default useDebounce;
