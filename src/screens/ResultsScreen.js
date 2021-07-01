import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { mainContainer } from "../../constants/styles";

const ResultsScreen = ({ route, navigation }) => {
  const { search } = route.params;
  return <View style={styles.mainContainer}></View>;
};

const styles = StyleSheet.create({
  mainContainer: mainContainer
});

export default ResultsScreen;
