import { createGlobalStyle } from "styled-components";
import "./reset.css";
import "../assets/fonts/fonts.css";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: "Pretendard", sans-serif;
    }

    html, body {
        margin: 0;
        width: 100%;
        height: 100vh;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f1f2f4;
    }

    &:link, &:visited {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
