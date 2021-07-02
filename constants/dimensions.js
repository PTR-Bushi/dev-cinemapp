import { Dimensions } from "react-native";

const dims = Dimensions.get("window");

export const generalPadding = 10;

export const titleSize = dims.width * (1 / 20);
export const textSize = dims.width * (1 / 25);

export const boxPadding = generalPadding / 2;
export const boxBorder = 1;
export const boxWidth = "100%";

export const componentsSeparation = 50;

export const headerLeftSize = 25;

export const posterWidthBig = dims.width * 0.3;
export const posterHeightBig = posterWidthBig * 1.44;
export const posterWidthSma = dims.width * 0.1;
export const posterHeightSma = posterWidthSma * 1.44;
