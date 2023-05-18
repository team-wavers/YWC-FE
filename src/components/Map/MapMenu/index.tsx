import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../../assets/icons/home-icon.svg";

const index = () => {
    return (
        <Link to={"/"}>
            <Container>
                <HomeIcon />
            </Container>
        </Link>
    );
};

const Container = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    margin: 20px;
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50px;
    outline: none;
    border: none;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
    z-index: 999;
`;

export default index;
