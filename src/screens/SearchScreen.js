import React, { useState } from "react";
import { Alert, View, StyleSheet, Text, TextInput } from "react-native";
import {
  generalPadding,
  textSize,
  titleSize
} from "../../constants/dimensions";
import {
  loweredBox,
  mainContainer,
  separatorVer
} from "../../constants/styles";
import {
  searchButton,
  searchErrorText,
  searchErrorTitle,
  searchPlaceholder,
  welcomeText,
  welcomeTitle
} from "../../constants/texts";
import { PrimaryButton } from "../components/Buttons";

const SearchBar = ({ text, setText, submit }) => (
  <View style={styles.searchBar}>
    <TextInput
      placeholder={searchPlaceholder}
      value={text}
      onChangeText={setText}
      onSubmitEditing={submit}
    />
  </View>
);

const SearchScreen = ({ navigation }) => {
  const [searchParam, setsearchParam] = useState("");

  const checkProceed = () => {
    if (searchParam.length < 3)
      return Alert.alert(searchErrorTitle, searchErrorText);
    navigation.navigate("Results", { search: searchParam });
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeTitle}>{welcomeTitle}</Text>
      <Text style={styles.welcomeText}>{welcomeText}</Text>
      <SearchBar
        text={searchParam}
        setText={text => setsearchParam(text)}
        submit={checkProceed}
      />
      <View style={separatorVer} />
      <PrimaryButton text={searchButton} onPress={checkProceed} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: mainContainer,
  searchBar: loweredBox,
  welcomeTitle: {
    marginTop: generalPadding,
    fontSize: titleSize,
    fontWeight: "bold"
  },
  welcomeText: { marginBottom: generalPadding, fontSize: textSize }
});

export default SearchScreen;
