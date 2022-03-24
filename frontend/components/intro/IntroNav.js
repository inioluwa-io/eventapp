import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GettingStarted from "./GettingStarted";
import Intro from "./Intro";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import EmailSent from "./EmailSent";

const Stack = createStackNavigator();

const mapStateToProps = (state) => {
  const { auth, intro } = state;
  return { auth };
};

function IntroNav() {
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
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        <Stack.Screen name="EmailSent" component={EmailSent} />
        <Stack.Screen name="Intro" component={Intro} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default IntroNav;