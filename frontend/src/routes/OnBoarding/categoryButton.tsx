import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { lighten } from "polished";
import { Pressable, View, StyleSheet, Text } from "react-native";
import { CategoryButtonProps } from "../../../types";
import globalStyles from "../../constants/global.styles";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const CategoryButton: React.FC<CategoryButtonProps> = ({
  style,
  color,
  id,
  icon,
  onCategorySelect,
  selectedCategory,
  text,
  textStyle,
  ...props
}) => {
  return (
    <Pressable
      style={[
        styles.categoryButton,
        { backgroundColor: lighten(0.05, color) },
        selectedCategory === id && styles.categoryButtonSelected,
        style,
      ]}
      onPress={() => {
        if (typeof onCategorySelect === "function") onCategorySelect(id);
      }}
      {...props}
    >
      {icon}
      <Text style={[globalStyles.mediumText, textStyle]}>{text}</Text>
      {selectedCategory === id && (
        <View style={styles.checkIcon}>
          <Ionicons
            name="ios-checkmark-circle"
            size={32}
            color={Colors.success}
          />
        </View>
      )}
    </Pressable>
  );
};

export default CategoryButton;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  categoryButton: {
    position: "relative",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 200,
    width: Layout.window.width / 2 - 50,
    borderRadius: 10,
  },
  categoryButtonSelected: {},
  checkIcon: {
    position: "absolute",
    right: -15,
    top: -15,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 1.5,
    borderColor: Colors.success,
  },
});
