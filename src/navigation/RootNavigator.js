import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/SearchScreen";
import ResultsScreen from "../screens/ResultsScreen";
import FavesScreen from "../screens/FavesScreen";
import TabIcon from "../components/TabIcon";
import { activeIcon, inactiveIcon } from "../../constants/colors";
import HeaderLeft from "../components/HeaderLeft";
import {
  FavesScreenName,
  ResultsScreenName,
  screenNames,
  SearchScreenName
} from "../../constants/texts";

const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerLeft: ({ onPress, canGoBack }) =>
        canGoBack ? <HeaderLeft onPress={onPress} /> : null
    }}
  >
    <SearchStack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: screenNames.Search }}
    />
    <SearchStack.Screen
      name="Results"
      component={ResultsScreen}
      options={{ title: screenNames.Results }}
    />
  </SearchStack.Navigator>
);

const FavesStack = createStackNavigator();

const FavesStackScreen = () => (
  <FavesStack.Navigator>
    <FavesStack.Screen
      name="Favorites"
      component={FavesScreen}
      options={{ title: screenNames.Favorites }}
    />
  </FavesStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Navigator = ({}) => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeIcon,
        activeBackgroundColor: activeIcon + "40",
        inactiveTintColor: inactiveIcon,
        inactiveBackgroundColor: activeIcon + "10"
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        ),
        title: screenNames[route.name]
      })}
    >
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Favorites" component={FavesStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
