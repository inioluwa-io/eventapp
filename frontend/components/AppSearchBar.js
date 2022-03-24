import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { SearchBar } from "react-native-elements";

const AppSearchBar = ({
  onInputChange,
  defaultValue = "",
  darkTheme = false,
  loading,
  setRef,
  placeholder = "Search for an item or brand...",
  containerProps,
  ...props
}) => {
  const [value, setValue] = useState(defaultValue);

  const handleInputChange = (text) => {
    setValue(text);
    if (typeof onInputChange === "function") {
      onInputChange(text);
    }
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleOnFocus = () => {
    if (typeof props.handleOnFocus === "function") {
      props.handleOnFocus(true);
    }
  };

  const handleOnBlur = () => {
    if (typeof props.handleOnBlur === "function") {
      props.handleOnBlur(false);
    }
  };

  return (
    <View style={[styles.container, containerProps]}>
      <SearchBar
        placeholder={placeholder}
        lightTheme={false}
        containerStyle={styles.containerTextInput}
        inputContainerStyle={!darkTheme ? styles.textInput : styles.darkInput}
        showCancel
        showLoading={loading}
        value={value}
        platform={Platform.OS === "ios" ? "ios" : "android"}
        onChangeText={handleInputChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onCancel={handleOnBlur}
        cancelButtonProps={{ color: "#222" }}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: -5,
  },
  textInput: {
    borderRadius: 8,
    backgroundColor: "transparent",
    borderWidth: 0,
    fontSize: 8,
  },
  darkInput: {
    borderRadius: 8,
    backgroundColor: "#eaeaea",
    borderWidth: 0,
    fontSize: 8,
  },
  containerTextInput: {
    padding: 0,
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 8,
  },
});

export { AppSearchBar };
