import React from "react";
import styled from "styled-components";
import { ReactComponent as MarkerIcon } from "../../../assets/icons/marker-icon.svg";
import { ReactComponent as CategoryIcon } from "../../../assets/icons/category-icon.svg";
import { IStore } from "@_types/store";
import { Link } from "react-router-dom";

const index = ({ name, address, category }: IStore) => {
	return (
		<Container>
			<StoreName>{name}</StoreName>
			<Metadata>
				{address && (
					<Address>
						<MarkerIcon width="12" style={{ flexShrink: 0 }} />
						<Link
							to={`https://map.naver.com/v5/search/${name}`}
							style={{ textAlign: "left", fontSize: "1.25rem" }}
						>
							{address}
						</Link>
					</Address>
				)}
				{category && (
					<Category>
						<CategoryIcon width="12" style={{ flexShrink: 0 }} />
						{category}
					</Category>
				)}
			</Metadata>
		</Container>
	);
};
const Container = styled.li`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	min-height: 70px;
	font-size: ${({ theme }) => theme.l};
	padding: 15px 20px;
	list-style: none;
	background-color: ${({ theme }) => theme.white};
	border-radius: 15px;
	box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

const StoreName = styled.h2`
	width: auto;
	font-size: ${({ theme }) => theme.m};
	font-family: "OAGothic";
	font-weight: 500;
	text-align: left;
	line-height: 20px;
`;

// const Divider = styled.hr`
//     border: none;
//     border-left: 1px solid #ececec;
//     width: 1px;
//     height: 100%;
//     margin: 10px;
// `;

const Metadata = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3px;
	width: auto;
	height: auto;
`;

const Address = styled.span`
	position: relative;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: auto;
	float: right;
	gap: 7px;
	font-size: ${({ theme }) => theme.s};
	line-height: ${({ theme }) => theme.m};
`;

const Category = styled(Address)``;

export default index;
