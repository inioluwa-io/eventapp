import React from "react";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import png from "../../assets/png";


export default function AppBackground({ children }) {
  return (
    <ImageBackground source={png.FoodWhite} style={{ flex: 1, paddingHorizontal:0 }}>
      {children}
    
    </ImageBackground>
  );
}
