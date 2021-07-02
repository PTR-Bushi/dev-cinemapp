import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { activeIcon, inactiveIcon } from "../../constants/colors";
import {
  circleButtonSize,
  generalPadding,
  posterHeightBig,
  posterHeightSma,
  posterWidthBig,
  posterWidthSma
} from "../../constants/dimensions";
import { elevatedBox, selectedBox, starCircle } from "../../constants/styles";
import { year } from "../../constants/texts";

const StarCircle = ({ fill, onPress, width = circleButtonSize }) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={[fill ? selectedBox : elevatedBox, starCircle, { width: width }]}
    >
      <Image
        resizeMode="contain"
        style={{
          width: "100%",
          height: "100%",
          tintColor: fill ? activeIcon : inactiveIcon
        }}
        source={
          fill
            ? require("../../assets/star-fill.png")
            : require("../../assets/star-outline.png")
        }
      />
    </View>
  </TouchableOpacity>
);

const MovieCard = ({
  itemPoster,
  itemTitle,
  itemYear,
  selected,
  favorited,
  toggleFavorite
}) => (
  <View
    style={{
      ...elevatedBox,
      flexDirection: "row",
      justifyContent: "space-between"
    }}
  >
    <View style={{ flexDirection: "row", flexShrink: 1 }}>
      <View
        style={{
          width: selected ? posterWidthBig : posterWidthSma,
          height: selected ? posterHeightBig : posterHeightSma,
          marginRight: generalPadding
        }}
      >
        {!!itemPoster && itemPoster !== "N/A" && (
          <Image
            resizeMode="contain"
            source={{ uri: itemPoster }}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        )}
      </View>
      <View
        style={{
          flexShrink: 1,
          width: "100%",
          justifyContent: selected ? "space-between" : "flex-start"
        }}
      >
        <Text>{itemTitle}</Text>
        <Text>
          {year}: {itemYear}
        </Text>
        {!!selected && (
          <StarCircle
            fill={favorited}
            onPress={() => toggleFavorite(!favorited)}
            width="100%"
          />
        )}
      </View>
    </View>
    {!selected && (
      <StarCircle fill={favorited} onPress={() => toggleFavorite(!favorited)} />
    )}
  </View>
);

export default MovieCard;
