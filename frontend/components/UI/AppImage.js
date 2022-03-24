import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";

export default function AppImage() {
  return (
    <View
      style={{
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: 130,
          height: 130,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 80,
          borderWidth: 2,
          borderStyle: "dashed",
          borderColor:colors.grey
        }}
      >
        <Ionicons name="camera-outline" size={60} color={colors.grey} />
      </TouchableOpacity>
    </View>
  );
}
