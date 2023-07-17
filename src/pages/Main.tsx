import React from "react";
import { InformationBox } from "@components/InformationBox";

const Main = () => {
    function methodDoesNotExist(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <>
            <button onClick={() => methodDoesNotExist()}>
                Break the world
            </button>
            <InformationBox />
        </>
    );
};

export default Main;
