import React from "react";
import styled from "styled-components";
import Feedback from "./Feedback";
import Table from "./Table";
import { ReactComponent as MapIcon } from "../../assets/icons/map-search-icon.svg";
import { Link } from "react-router-dom";

const InformationBox = () => {
    return (
        <Container>
            <Link to={"/map"} style={{ width: "auto" }}>
                <MapButton>
                    <MapIcon />
                    <span>지도로 보기</span>
                </MapButton>
            </Link>
            <Table />
            <Feedback />
        </Container>
    );
};

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100px;
    text-align: center;
    font-family: "OAGothic", sans-serif;
    padding: 20px;
    padding-top: 0;
    font-size: ${({ theme }) => theme.sizes.l};
    line-height: ${({ theme }) => theme.sizes.xl};
    color: ${({ theme }) => theme.colors.black};
`;

const MapButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 300px;
    height: 70px;
    margin-top: 20px;
    background-color: white;
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: ${({ theme }) => theme.sizes.xl};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
`;

export default InformationBox;
