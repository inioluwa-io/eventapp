import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsButton: React.FC<{
  onPress: any;
  color?: string;
}> = ({ onPress, color }) => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 20,
        elevation: 0,
        padding: 3,
        shadowOpacity: 0.1,
        shadowOffset: { height: 1, width: 0 },
        // elevation: 9,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{ padding: 5 }}
      >
        <Ionicons
          name="settings-outline"
          size={24}
          color={color ? color : "black"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsButton;
