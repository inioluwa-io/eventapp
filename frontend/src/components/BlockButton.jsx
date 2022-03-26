import React from "react";
import { lighten } from "polished";
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from "react-native";
import globalStyles from "../constants/global.styles";
import Colors from "../constants/Colors";

export default function BlockButton({
  children,
  disabled = false,
  color = Colors.black,
  loading = false,
  style = {},
  size = "md",
  ...props
}) {
  const { transparent, onPress, outline } = props;

  const getButtonStyle = () => {
    switch (size) {
      case "sm": {
        return globalStyles.blockButtonSm;
      }
      default: {
        return globalStyles.blockButton;
      }
    }
  };

  const getOutlineButtonStyle = () => {
    switch (size) {
      case "sm": {
        return globalStyles.blockButtonOutlineSm;
      }
      default: {
        return globalStyles.blockButtonOutline;
      }
    }
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        transparent && { backgroundColor: "transparent" },
        outline && {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: color,
        },
        outline && getOutlineButtonStyle(),
        !outline && { backgroundColor: color },
        !outline && disabled && { backgroundColor: lighten(0.15, color) },
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator
          color={Platform.OS === "android" ? "#ccc" : undefined}
        />
      ) : (
        <Text
          style={[
            globalStyles.buttonLabel,
            transparent && { color: color },
            outline && { color: color },
            { lineHeight: 20 },
          ]}
        >
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
}
