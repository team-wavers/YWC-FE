import "styled-components";
import { colorType, fontSizeType } from "./theme";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: colorType;
        sizes: fontSizeType;
    }
}
