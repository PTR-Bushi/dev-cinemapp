import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { generalPadding } from "../../constants/dimensions";
import { mainContainer } from "../../constants/styles";
import { STORAGE_FAVORITES } from "../../constants/texts";
import MovieCard from "../components/MovieCard";
import { getSearch } from "../services/requests";

const ResultsScreen = ({ route }) => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [favorites, setFavorites] = useState([]);
  const { search } = route.params;

  const readfromFavorites = () =>
    AsyncStorage.getItem(STORAGE_FAVORITES).then(r =>
      setFavorites(JSON.parse(r))
    );

  const saveFavorites = list =>
    AsyncStorage.setItem(STORAGE_FAVORITES, JSON.stringify(list));

  const addFavorite = id => {
    const newList = [...favorites];
    if (newList.includes(id)) return;
    newList.push(id);
    saveFavorites(newList);
    setFavorites(newList);
  };

  const removeFavorite = id => {
    const newList = [...favorites];
    if (!newList.includes(id)) return;
    const idx = newList.indexOf(id);
    newList.splice(idx, 1);
    saveFavorites(newList);
    setFavorites(newList);
  };

  const performSearch = () =>
    getSearch(search).then(r => setMovies(r.data.Search));

  useEffect(() => {
    performSearch();
    readfromFavorites();
    return () => {};
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              selected == index ? setSelected(-1) : setSelected(index)
            }
          >
            <MovieCard
              itemPoster={item.Poster}
              itemTitle={item.Title}
              itemYear={item.Year}
              selected={index == selected}
              favorited={favorites.includes(item.imdbID)}
              toggleFavorite={add =>
                add ? addFavorite(item.imdbID) : removeFavorite(item.imdbID)
              }
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

export default ResultsScreen;
