import { boxBG, darkBoxBorder, lightBoxBorder } from "./colors";
import { boxBorder, generalPadding } from "./dimensions";

export const mainContainer = {
  flex: 1,
  backgroundColor: "#f8f8f8",
  padding: generalPadding
};

export const genericBox = {
  padding: generalPadding,
  borderRadius: generalPadding
};

export const elevatedBox = {
  ...genericBox,
  backgroundColor: boxBG,
  borderWidth: boxBorder,
  borderColor: darkBoxBorder,
  borderRightColor: lightBoxBorder,
  borderTopColor: lightBoxBorder
};

export const loweredBox = {
  ...elevatedBox,
  borderRightColor: darkBoxBorder,
  borderTopColor: darkBoxBorder,
  borderLeftColor: lightBoxBorder,
  borderBottomColor: lightBoxBorder
};
