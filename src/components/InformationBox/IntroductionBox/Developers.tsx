import React from "react";
import styled from "styled-components";
import 조용원 from "@assets/pictures/조용원.png";
import 이혜인 from "@assets/pictures/이혜인.png";
import 강태양 from "@assets/pictures/강태양.png";
import 홍은성 from "@assets/pictures/홍은성.png";
import 정다운 from "@assets/pictures/정다운.png";
import 조형근 from "@assets/pictures/조형근.png";

const Developers = () => {
    return (
        <div>
            <table cellPadding="0" cellSpacing="0">
                <tbody>
                    <tr>
                        <td
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                                paddingTop: 20,
                            }}
                            align="center"
                            colSpan={3}
                        >
                            Front-end
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Img src={조용원} />
                        </td>
                        <td>
                            <Img src={이혜인} />
                        </td>
                        <td>
                            <Img src={강태양} />
                        </td>
                    </tr>
                    <tr>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            👑 조용원
                        </td>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            이혜인
                        </td>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            강태양
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a
                                style={{ display: "block" }}
                                href="https://github.com/nyongone"
                            >
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                        <td align="center">
                            <a href="https://github.com/HAECHAN66">
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                        <td align="center">
                            <a href="https://github.com/zxcv2987">
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                                paddingTop: 20,
                            }}
                            align="center"
                            colSpan={3}
                        >
                            Back-end
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Img src={홍은성} />
                        </td>
                        <td>
                            <Img src={정다운} />
                        </td>
                        <td>
                            <Img src={조형근} />
                        </td>
                    </tr>
                    <tr>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            👑 홍은성
                        </td>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            정다운
                        </td>
                        <td
                            align="center"
                            style={{ fontSize: 14, fontWeight: 700 }}
                        >
                            조형근
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a href="https://github.com/lightpurple">
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                        <td align="center">
                            <a href="https://github.com/jdw611">
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                        <td align="center">
                            <a href="https://github.com/woomae">
                                <img
                                    style={{ display: "block" }}
                                    src="https://img.shields.io/badge/Github-black?style=flat-square&logo=&logoColor=white"
                                />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
const Img = styled.img`
    width: 100%;
`;

export default Developers;
