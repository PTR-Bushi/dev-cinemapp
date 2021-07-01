import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../screens/SearchScreen";
import ResultsScreen from "../screens/ResultsScreen";
import FavesScreen from "../screens/FavesScreen";
import TabIcon from "../components/TabIcon";
import { activeIcon, inactiveIcon } from "../../constants/colors";

const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    <SearchStack.Screen name="Results" component={ResultsScreen} />
  </SearchStack.Navigator>
);

const FavesStack = createStackNavigator();

const FavesStackScreen = () => (
  <FavesStack.Navigator>
    <FavesStack.Screen name="Favorites" component={FavesScreen} />
  </FavesStack.Navigator>
);

const Tab = createBottomTabNavigator();

const Navigator = ({}) => (
  <NavigationContainer>
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: activeIcon,
        activeBackgroundColor: activeIcon + "80",
        inactiveTintColor: inactiveIcon,
        inactiveBackgroundColor: activeIcon + "20"
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon focused={focused} color={color} size={size} route={route} />
        )
      })}
    >
      <Tab.Screen name="Search" component={SearchStackScreen} />
      <Tab.Screen name="Favorites" component={FavesStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigator;
