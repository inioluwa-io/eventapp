import React from "react";
import { View, Text } from "react-native";
import appValues from "../../constants/appValues";
import colors from "../../constants/colors";

export default function LoginFooter({ text, linkText, navigation }) {
  return (
    <View style={{ width: "100%", marginTop: 30 }}>
      <Text
        style={{
          textAlign: "center",
          color: colors.black,
          fontSize: appValues.fontSize,
        }}
      >
        {text}
        <Text onPress={navigation} style={{ color: colors.primary }}>{linkText}</Text>
      </Text>
    </View>
  );
}
