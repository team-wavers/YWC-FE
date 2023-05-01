import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const index = () => {
	return (
		<Container>
			<Link to={"/"}>
				<Title>
					문화복지카드
					<br />
					사용처 목록
				</Title>
			</Link>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 130px;
	padding: 30px 0 0 0;
	background-color: #1483e9;
`;

const Title = styled.h1`
	font-size: ${({ theme }) => theme.l};
	font-family: "OAGothic";
	font-weight: 800;
	line-height: ${({ theme }) => theme.xl};
	color: ${({ theme }) => theme.white};
	text-align: center;
`;

export default index;
