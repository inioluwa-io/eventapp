import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BackArrow from "../components/headerBackButton";
import { headerStyles } from "../constants";
import Register from "./Authentication/register";
import OTPVerification from "./Authentication/otpVerification";
import OTPCode from "./Authentication/otpCode";
import Login from "./Login";
import IntroScreen from "./Authentication/intro";
import OnBoardingScreen from "./OnBoarding";

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
        name="OnBoarding"
        component={OnBoardingScreen}
        options={({ navigation }) => ({
          headerLeft: false,
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <AuthStackNavigator.Screen
        name="OTPVerification"
        component={OTPVerification}
        options={({ navigation }) => ({
          headerLeft: false,
          headerShown: true,
          title: "OTP Verification",
        })}
      />
      <AuthStackNavigator.Screen
        name="OTPCode"
        component={OTPCode}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          headerShown: true,
          title: "Enter Verification Code",
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
