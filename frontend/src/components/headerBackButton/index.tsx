import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const BackArrow: React.FC<{ onPress: any; color?: string }> = ({
  onPress,
  color,
}) => {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{ padding: 5 }}
      >
        <Feather name="arrow-left" size={24} color={color ? color : "black"} />
      </TouchableOpacity>
    </View>
  );
};

export default BackArrow;
