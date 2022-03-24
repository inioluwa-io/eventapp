import React from "react";
import { StyleSheet, Text, View } from "react-native";
import appValues from "../constants/appValues";
import { HeaderTitle } from "@react-navigation/stack";

const Header = ({ children, title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <HeaderTitle>{children}</HeaderTitle>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#e1e1e1",
    borderBottomWidth: 1,
    flex: 1,
  },
  title: {
    fontSize: appValues.font.h4,
  },
});
