import React from "react";
import { Image, Text, View } from "react-native";
import {
  generalPadding,
  posterHeightBig,
  posterHeightSma,
  posterWidthBig,
  posterWidthSma
} from "../../constants/dimensions";
import { elevatedBox } from "../../constants/styles";
import { year } from "../../constants/texts";

const StarCircle = () => (
  <View
    style={{ ...elevatedBox, flex: 0, width: 50, height: 50, borderRadius: 25 }}
  />
);

const MovieCard = ({ itemPoster, itemTitle, itemYear, selected }) => (
  <View
    style={{
      ...elevatedBox,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <View style={{ flexDirection: "row", flexShrink: 1 }}>
      <Image
        resizeMode="contain"
        source={{ uri: itemPoster }}
        style={{
          width: selected ? posterWidthBig : posterWidthSma,
          height: selected ? posterHeightBig : posterHeightSma,
          marginRight: generalPadding
        }}
      />
      <View
        style={{
          flexShrink: 1,
          justifyContent: selected ? "space-between" : "flex-start"
        }}
      >
        <Text>{itemTitle}</Text>
        <Text>
          {year}: {itemYear}
        </Text>
        {!!selected && <StarCircle />}
      </View>
    </View>
    {!selected && <StarCircle />}
  </View>
);

export default MovieCard;
