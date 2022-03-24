import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import png from "../../assets/png";

export default function Intro() {
  return (
    <View style={styles.container}>
      <Image source={png.ColorLogo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  imageBackground: {
    //   flex:1,
    width: "100%",
    height: "100%",
    //   resizeMode:"contain"
  },
});
