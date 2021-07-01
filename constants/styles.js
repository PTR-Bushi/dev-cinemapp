import {
  appBG,
  boxBG,
  darkBoxBorder,
  generalText,
  lightBoxBorder
} from "./colors";
import {
  boxBorder,
  generalPadding,
  componentsSeparation,
  headerLeftSize
} from "./dimensions";

export const mainContainer = {
  flex: 1,
  backgroundColor: appBG,
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

export const selectedBox = { ...loweredBox, backgroundColor: "#00000010" };

export const elevatedButton = {
  ...elevatedBox,
  backgroundColor: "#fdfdfd",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
};

export const loweredButton = { ...elevatedButton, ...loweredBox };

export const separatorVer = { height: componentsSeparation };

export const headerLeftStyle = {
  width: headerLeftSize,
  height: headerLeftSize,
  tintColor: generalText
};
