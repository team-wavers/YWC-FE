import React from "react";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const index = () => {
    return (
        <LoaderContainer>
            <Oval
                color="#3498db"
                secondaryColor="#3498db"
                width={30}
                height={30}
            />
        </LoaderContainer>
    );
};

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 300px;
`;

export default index;
