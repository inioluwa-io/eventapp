import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image, Button } from "react-native";
import png from "../../assets/png";
import AppBackground from "../UI/AppBackground";
import { useNavigation } from "@react-navigation/native";

export default function GettingStarted() {
  const navigation = useNavigation()
  return (
    <AppBackground>
      <Text>Getting Started</Text>
      <View>
        <Button title="Sign In" onPress={() => navigation.navigate("SignIn")} />
        <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
    </AppBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width:"100%"
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  imageBackground: {
    //   flex:1,
    width: "10%",
    height: "10%",
    resizeMode: "contain",
  },
});
