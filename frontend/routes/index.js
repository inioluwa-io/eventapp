import React from "react";
import { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import png from "../assets/png";
import colors from "../constants/colors";
import Constants from "expo-constants";
import { connect } from "react-redux";
import SignIn from "../screens/Authentication/Signin";
import SignUp from "../screens/Authentication/SignUp";
import Intro from "../screens/Authentication/Intro";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import UserProfile from "../screens/UserProfile";
import Architect from "../screens/Architect";
import Advert from "../screens/Adverts";
import Landing from "../screens/Landing";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerBackTitle: " ",
      title: " ",
      headerShown: false,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: "gray",
      tabBarActiveBackgroundColor: colors.white,
      tabBarInactiveBackgroundColor: "#fff",
      tabBarStyle: [
        {
          display: "flex",
          backgroundColor: "#CE4418",
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarShowLabel: false,
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Orders"
      component={Home}
      options={{
        tabBarLabel: "Orders",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="clipboard" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={UserProfile}
      options={{
        tabBarLabel: "Account",
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

const IntroRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Intro" component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainRoute = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <HomeStack.Screen name="Landing" component={Landing} />
        <HomeStack.Screen name="Home" component={HomeTabs} />
        <HomeStack.Screen name="Architect" component={Architect} />
        <HomeStack.Screen name="Advert" component={Advert} />
        <HomeStack.Screen name="Profile" component={Profile} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

function SplashScreen(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    setTimeout(() => {
      StatusBar.setHidden(false);
      setLoaded(true);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedSplash
        translucent={true}
        isLoaded={loaded}
        logoImage={png.ColorLogo}
        backgroundColor={"transparent"}
        logoHeight={150}
        logoWidth={150}
      >
        {!props.auth.loggedIn ? (
          !loaded ? (
            <Intro />
          ) : (
            <IntroRoute />
          )
        ) : (
          <MainRoute />
        )}
      </AnimatedSplash>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#fff",
  },
});

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, null)(SplashScreen);
