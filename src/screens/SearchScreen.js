import React, { useState } from "react";
import { Alert, View, StyleSheet, TextInput } from "react-native";
import {
  loweredBox,
  mainContainer,
  separatorVer
} from "../../constants/styles";
import { searchButton, searchPlaceholder } from "../../constants/texts";
import { PrimaryButton } from "../components/Buttons";

const SearchBar = ({ text, setText }) => (
  <View style={styles.searchBar}>
    <TextInput
      placeholder={searchPlaceholder}
      value={text}
      onChangeText={setText}
    />
  </View>
);

const SearchScreen = ({ navigation }) => {
  const [searchParam, setsearchParam] = useState("");

  return (
    <View style={styles.mainContainer}>
      <SearchBar text={searchParam} setText={text => setsearchParam(text)} />
      <View style={separatorVer} />
      <PrimaryButton text={searchButton} onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: mainContainer,
  searchBar: loweredBox
});

export default SearchScreen;
