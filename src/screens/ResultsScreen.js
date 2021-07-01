import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { generalPadding } from "../../constants/dimensions";
import { mainContainer } from "../../constants/styles";
import MovieCard from "../components/MovieCard";
import { getSearch } from "../services/requests";

const ResultsScreen = ({ route }) => {
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(-1);
  const { search } = route.params;

  useEffect(() => {
    getSearch(search).then(r => setMovies(r.data.Search));
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              selected == index ? setSelected(-1) : setSelected(index)
            }
          >
            <MovieCard
              itemPoster={item.Poster}
              itemTitle={item.Title}
              itemYear={item.Year}
              selected={index == selected}
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
