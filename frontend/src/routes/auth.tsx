import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BackArrow from "../components/headerBackButton";
import { headerStyles } from "../constants";
import Register from "./Authentication/register";
import Login from "./Authentication/login";
import IntroScreen from "./Authentication/intro";

const AuthStackNavigator = createStackNavigator();

export default function AuthStack() {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <AuthStackNavigator.Screen
        name="Intro"
        component={IntroScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerShown: false,
        })}
      />
      <AuthStackNavigator.Screen
        name="Register"
        component={Register}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerShown: false,
        })}
      />
      <AuthStackNavigator.Screen
        name="Login"
        component={Login}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerShown: false,
        })}
      />
    </AuthStackNavigator.Navigator>
  );
}
