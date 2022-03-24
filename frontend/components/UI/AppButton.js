import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import appValues from "../../constants/appValues";
import colors from "../../constants/colors";
import globalStyles from "../../constants/global.styles";

export default function AppButton({
  title,
  transparent,
  onPress,
  disabled,
  outline,
  size = "md",
  customStyle = {},
}) {
  const getButtonSize = (size) => {
    switch (size) {
      case "xs": {
        return globalStyles.blockButtonXs;
      }
      case "sm": {
        return globalStyles.blockButtonSm;
      }
      default: {
        return globalStyles.blockButton;
      }
    }
  };
  return (
    <TouchableOpacity
      style={[
        getButtonSize(size),
        transparent && { backgroundColor: "transparent" },
        disabled && { backgroundColor: colors.primary + 80 },
        outline && {
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: colors.primary,
        },
        customStyle,
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      <Text
        style={[
          globalStyles.buttonLabel,
          transparent && { color: colors.primary },
          outline && { color: colors.primary },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
