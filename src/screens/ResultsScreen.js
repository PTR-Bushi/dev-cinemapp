import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { generalPadding } from "../../constants/dimensions";
import { mainContainer } from "../../constants/styles";
import {
  noResultsText,
  searchErrorTitle,
  STORAGE_FAVORITES
} from "../../constants/texts";
import MovieCard from "../components/MovieCard";
import { getSearch } from "../services/requests";

const ResultsScreen = ({ navigation, route }) => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(-1);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [resNum, setResNum] = useState(0);
  const { search } = route.params;

  const readfromFavorites = () =>
    AsyncStorage.getItem(STORAGE_FAVORITES).then(r =>
      setFavorites(JSON.parse(r))
    );

  const saveFavorites = list =>
    AsyncStorage.setItem(STORAGE_FAVORITES, JSON.stringify(list));

  const addFavorite = item => {
    const newList = { ...favorites };
    newList[item.imdbID] = {
      itemPoster: item.Poster,
      itemTitle: item.Title,
      itemYear: item.Year
    };
    saveFavorites(newList);
    setFavorites(newList);
  };

  const removeFavorite = item => {
    const newList = { ...favorites };
    delete newList[item.imdbID];
    saveFavorites(newList);
    setFavorites(newList);
  };

  const performSearch = () =>
    getSearch(search).then(r => {
      if (!r.data || !r.data.Search || !r.data.Search.length)
        return Alert.alert(searchErrorTitle, noResultsText, [
          { text: "Ok", onPress: () => navigation.goBack() }
        ]);
      setMovies(r.data.Search);
      setResNum(r.data.totalResults);
    });

  const loadExtra = () => {
    if (currentPage > 5 || currentPage * 10 > resNum) return;
    getSearch(search, currentPage + 1).then(r => {
      const newList = [...movies, ...r.data.Search];
      setMovies(newList);
    });
    setPage(currentPage + 1);
  };

  useFocusEffect(
    useCallback(() => {
      readfromFavorites();
      return () => {};
    }, [])
  );

  useEffect(() => {
    performSearch();
    return () => {};
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movies}
        onEndReached={loadExtra}
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
              favorited={!!favorites[item.imdbID]}
              toggleFavorite={add =>
                add ? addFavorite(item) : removeFavorite(item)
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
