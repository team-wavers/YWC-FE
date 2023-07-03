import { useRef } from "react";

const useObserver = (callback: () => void) => {
    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                entry.isIntersecting && callback();
            });
        }),
    );

    const observe = (e: HTMLDivElement) => {
        observer.current.observe(e);
    };

    const unobserve = (e: HTMLDivElement) => {
        observer.current.unobserve(e);
    };

    return [observe, unobserve];
};

export default useObserver;
