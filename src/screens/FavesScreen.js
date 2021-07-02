import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { generalPadding } from "../../constants/dimensions";
import { mainContainer } from "../../constants/styles";
import { STORAGE_FAVORITES } from "../../constants/texts";
import MovieCard from "../components/MovieCard";

const FavesScreen = ({}) => {
  const [selected, setSelected] = useState(-1);
  const [favorites, setFavorites] = useState([]);

  const readfromFavorites = () =>
    AsyncStorage.getItem(STORAGE_FAVORITES).then(r =>
      setFavorites(JSON.parse(r))
    );

  const saveFavorites = list =>
    AsyncStorage.setItem(STORAGE_FAVORITES, JSON.stringify(list));

  const removeFavorite = item => {
    const newList = { ...favorites };
    delete newList[item];
    saveFavorites(newList);
    setFavorites(newList);
    setSelected(-1);
  };

  useFocusEffect(
    useCallback(() => {
      readfromFavorites();
      return () => {};
    }, [])
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={Object.keys(favorites)}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              selected == index ? setSelected(-1) : setSelected(index)
            }
          >
            <MovieCard
              itemPoster={favorites[item].itemPoster}
              itemTitle={favorites[item].itemTitle}
              itemYear={favorites[item].itemYear}
              selected={index == selected}
              favorited={true}
              toggleFavorite={add => removeFavorite(item)}
            />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: generalPadding }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: mainContainer
});

export default FavesScreen;
