import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Animated, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import appValues from "../../constants/appValues";

const AppInput = React.forwardRef((props, ref) => {
  const translation = useRef(new Animated.Value(0)).current;

  const [isFocused, setisFocused] = useState(false);
  const [value, setvalue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        {isFocused && <Text style={[styles.label]}>{props.label}</Text>}
      </View>
      {props.label !== "Password" ? (
        <View style={[styles.textInput]}>
          <Animated.Text
            style={{
              color: !isFocused ? '#aaa':'transparent',
              position: "absolute",
              left: 20,
              top: 22,
              display: props.value == '' ? isFocused ? 'none':'flex': 'none',
              transform:[{ translateY: translation }],
            }}
          >
            {props.label}
          </Animated.Text>
          <TextInput
            style={styles.input}
            value={props.value}
            onChangeText={(input) => setvalue(input)}
            ref={ref}
            onFocus={() => {
                Animated.timing(translation, {
                    toValue: -10,
                    useNativeDriver: true,
                    duration: 180,
                  }).start(() => setisFocused(true));
                  console.log('start',translation)
            }}
            onBlur={() => {
                Animated.timing(translation, {
                    toValue: 0,
                    useNativeDriver: true,
                    duration: 100,
                  }).start(() => setisFocused(false));
                  console.log(translation)
                  // props.focus()
            }}
            {...props}
          />
        </View>
      ) : (
        <View style={styles.passwordInput}>
          <Animated.Text
            style={{
              color: !isFocused ? '#aaa':'transparent',
              position: "absolute",
              left: 20,
              top: 22,
              display: props.value == '' ? isFocused ? 'none':'flex': 'none',
              transform:[{ translateY: translation }]
            }}
          >
            {props.label}
          </Animated.Text>
          <TextInput
          value={props.value}
            style={styles.textInput1}
            ref={ref}
            // ref={(ref) => {
            //   props.ref = ref;
            // }}
            onFocus={() => {
              Animated.timing(translation, {
                  toValue: -10,
                  useNativeDriver: true,
                  duration: 180,
                }).start(() => setisFocused(true));
                console.log('start',translation)
          }}
          onBlur={() => {
              Animated.timing(translation, {
                  toValue: 0,
                  useNativeDriver: true,
                  duration: 100,
                }).start(() => setisFocused(false));
                console.log(translation)
              //  props.focus()
          }}
            {...props}
          />
          <MaterialCommunityIcons
            name="eye"
            size={appValues.passwordIcon}
          />
        </View>
      )}
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    height: 65,
    position: "relative",
    backgroundColor: "transparent",
    marginBottom: 40,
    shadowColor: "grey",
    shadowOffset: { height: 12 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
  },
  labelContainer: {
    position: "absolute",
    backgroundColor: "white",
    top: -13,
    left: 20,
    padding: 5,
    zIndex: 50,
  },
  label: {
    color: "#135FDC",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#135FDC",
    justifyContent: "flex-end",
    height: 44,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor:'white'
  },
  input:{
      flex:1,
      fontSize:appValues.fontSize
  },
  passwordInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#135FDC",
    justifyContent: "flex-end",
    // height: 44,
    borderRadius: 5,
    // paddingHorizontal: 20,
    paddingRight: 5,
    backgroundColor:'white'
  },
  textInput1: {
    flex: 1,
    paddingHorizontal: 20,
    fontSize:appValues.fontSize
  },
  placeholder: {},
});

export { AppInput }
