import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { elevatedButton, loweredButton } from "../../constants/styles";

export const PrimaryButton = ({
  style = {},
  text = "",
  onPress = () => {}
}) => {
  const [down, setDown] = useState(false);
  return (
    <Pressable
      onPressIn={() => setDown(true)}
      onPressOut={() => setDown(false)}
      onPress={onPress}
    >
      <View style={[!down ? elevatedButton : loweredButton, style]}>
        <Text>{text}</Text>
      </View>
    </Pressable>
  );
};
