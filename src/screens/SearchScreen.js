import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { elevatedBox, mainContainer } from "../../constants/styles";
import { searchPlaceholder } from "../../constants/texts";

const SearchBar = ({}) => (
  <View style={styles.searchBar}>
    <TextInput placeholder={searchPlaceholder} />
  </View>
);

const SearchScreen = ({ navigation }) => {
  const [searchParam, setsearchParam] = useState("");

  return (
    <View style={styles.mainContainer}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: mainContainer,
  searchBar: elevatedBox
});

export default SearchScreen;
