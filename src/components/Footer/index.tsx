import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const index = () => {
	return (
		<FooterContainer>
			<Text>© 2023 youthwelfare.kr - All Rights Reserved.</Text>
			<Text>
				Contact:{" "}
				<Link
					to="#"
					style={{ fontSize: "1.25rem", color: "#93A8BB" }}
					onClick={(e) => {
						window.location.href = "mailto:support@youthwelfare.kr";
						e.preventDefault();
					}}
				>
					support@youthwelfare.kr
				</Link>
			</Text>
		</FooterContainer>
	);
};

const FooterContainer = styled.footer`
	width: 100%;
	height: 70px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3px;
	font-size: ${({ theme }) => theme.s};
	color: ${({ theme }) => theme.pageBtn};
`;

const Text = styled.p`
	display: block;
`;

export default index;
