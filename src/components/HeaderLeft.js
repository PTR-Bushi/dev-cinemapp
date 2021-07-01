import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { headerLeftStyle } from "../../constants/styles";

const HeaderLeft = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require("../../assets/chevron-left.png")}
        resizeMode="contain"
        style={headerLeftStyle}
      />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
