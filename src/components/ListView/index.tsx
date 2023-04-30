import React from "react";
import styled from "styled-components";

type ListViewPropTypes = {
    children: React.ReactNode;
};

const index = ({ children }: ListViewPropTypes) => {
    return <Container>{children}</Container>;
};

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 10px;
`;
export default index;
