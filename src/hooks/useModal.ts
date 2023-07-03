import { useState, useEffect, useRef } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current) {
            if (isOpen) {
                modalRef.current.style.display = "block";
                document.body.style.overflow = "hidden";
            } else {
                modalRef.current.style.display = "none";
                document.body.style.overflow = "auto";
            }
        }
    }, [isOpen]);
    return { isOpen, setIsOpen, modalRef };
};

export default useModal;
