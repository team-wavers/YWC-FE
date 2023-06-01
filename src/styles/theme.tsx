import { DefaultTheme } from "styled-components";
import pxtorem from "./utils/pxtorem";

const colors = {
    black: "#222",
    white: "#fff",
    red: "#c0392b",
    blue: "#3498db",
    placeholder: "#AFAFAF",
    pageBtn: "#93A8BB",
    pageBtnActive: "#6BABE7",
    bg: "#f1f2f4",
};

const fontSizes = {
    x3l: pxtorem(96),
    x2l: pxtorem(60),
    xl: pxtorem(48),
    l: pxtorem(34),
    m: pxtorem(24),
    s: pxtorem(20),
    xs: pxtorem(16),
    x2s: pxtorem(14),
    x3s: pxtorem(12),
};

const theme: DefaultTheme = {
    colors: colors,
    sizes: fontSizes,
};

export type colorType = typeof colors;
export type fontSizeType = typeof fontSizes;

export default theme;
