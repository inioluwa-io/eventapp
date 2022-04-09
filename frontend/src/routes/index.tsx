import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./auth";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import FilterPanel from "../components/FilterPanel";
import { useIsLoggedIn } from "../lib/hooks";
import Home from "./Home";

const RootAppNavigator = createStackNavigator();

export const headerStyles = () => {
  return {
    headerBackTitle: " ",
    title: " ",
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
    },
  };
};

const MainRoute = () => {
  const [isLoggedIn] = useIsLoggedIn();

  return (
    <>
      <RootAppNavigator.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        {!isLoggedIn ? (
          <RootAppNavigator.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <RootAppNavigator.Screen name="Tabs" component={Home} />
        )}
      </RootAppNavigator.Navigator>
      <FilterPanel />
    </>
  );
};

const Routes = () => {
  const [fontLoading] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
  });
  if (!fontLoading) {
    return <View></View>;
  }
  return <MainRoute />;
};

export default Routes;
