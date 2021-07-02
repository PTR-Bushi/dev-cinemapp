import { Dimensions } from "react-native";

const dims = Dimensions.get("window");
const WIDTH = dims.width;

export const generalPadding = WIDTH * 0.03;

export const titleSize = WIDTH * (1 / 20);
export const textSize = WIDTH * (1 / 25);

export const boxPadding = generalPadding / 2;
export const boxBorder = 1;
export const boxWidth = "100%";

export const componentsSeparation = WIDTH * 0.144;

export const headerLeftSize = WIDTH * 0.072;

export const posterWidthBig = WIDTH * 0.3;
export const posterHeightBig = posterWidthBig * 1.44;
export const posterWidthSma = WIDTH * 0.1;
export const posterHeightSma = posterWidthSma * 1.44;

export const circleButtonSize = WIDTH * 0.144;
