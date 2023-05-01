import pxtorem from "./utils/pxtorem";

type colorType = {
    [name: string]: string;
};

type fontSizeType = {
    [name: string]: string;
};

const colors: colorType = {
    black: "#222",
    white: "#fff",
    red: "#c0392b",
    blue: "#3498db",
    placeholder: "#AFAFAF",
    pageBtn: "#93A8BB",
    pageBtnActive: "#6BABE7",
    bg: "#f1f2f4",
};

const fontSizes: fontSizeType = {
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

const theme = {
    ...colors,
    ...fontSizes,
};

export default theme;
