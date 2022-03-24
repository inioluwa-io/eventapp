import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function AppBackComp({ children, overrideOnPress }) {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row", height: 60 }}>
      <View style={{ position: "absolute", zIndex: 9999, elevation: 999 }}>
        <TouchableOpacity
          onPress={() => {
            if (typeof overrideOnPress === "function") {
              overrideOnPress();
            } else {
              navigation.goBack();
            }
          }}
          style={{
            width: 60,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
      </View>
      {children && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {children}
        </View>
      )}
    </View>
  );
}
