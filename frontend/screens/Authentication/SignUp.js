import React, { useState, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleSheet,
} from "react-native";
import AppBackground from "../../components/UI/AppBackground";
import AppTitleNote from "../../components/UI/AppTitleNote";
import { AppInput } from "../../components/UI/AppInput";
import AppButton from "../../components/UI/AppButton";
import AppImage from "../../components/UI/AppImage";
import AppBackComp from "../../components/UI/AppBackComp";
import AppPaddedView from "../../components/UI/AppPaddedView";
import Loader from "../../components/UI/Loader";

export default function SignUp() {
  const _emailinput = useRef(0);
  const _passwordinput = useRef(0);
  const _firstName = useRef(0);
  const _lastName = useRef(0);
  const _companyName = useRef(0);
  const _companyAddress = useRef(0);
  const _phoneNumber = useRef(0);
  const _scrollRef = useRef();

  const handleScroll = (number) => {
    _scrollRef.current.scrollTo({ y: number, animated: true });
  };

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <AppBackground>
        <AppBackComp />
        <AppPaddedView>
          <AppImage />
          <AppTitleNote type="signUp" />

          <Animated.ScrollView
            ref={_scrollRef}
            showsVerticalScrollIndicator={false}
          >
            <AppInput
              label="First Name"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_firstName}
              onSubmitEditing={() => {
                _lastName.current.focus();
                handleScroll(10);
              }}
            />
            <AppInput
              label="Last Name"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_lastName}
              onSubmitEditing={() => {
                _emailinput.current.focus();
                handleScroll(70);
              }}
            />
            <AppInput
              label="Email Address"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_emailinput}
              onSubmitEditing={() => {
                _passwordinput.current.focus();
                handleScroll(250);
              }}
            />
            <AppInput
              label="Password"
              value={password}
              onChangeText={(input) => setPassword(input)}
              ref={_passwordinput}
              onSubmitEditing={() => {
                _companyName.current.focus();
                handleScroll(300);
              }}
            />
            <AppInput
              label="Company Name"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_companyName}
              onSubmitEditing={() => {
                _companyAddress.current.focus();
                handleScroll(450);
              }}
            />
            <AppInput
              label="Company Address"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_companyAddress}
              onSubmitEditing={() => {
                _phoneNumber.current.focus();
                handleScroll(600);
              }}
            />
            <AppInput
              label="Phone Number"
              value={email}
              onChangeText={(input) => setEmail(input)}
              ref={_phoneNumber}
              onSubmitEditing={() => {
                Keyboard.dismiss();
              }}
            />

            <AppButton title="Sign Up" onPress={() => console.log("a")} />
          </Animated.ScrollView>
          {/* <Loader loading /> */}
        </AppPaddedView>
      </AppBackground>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
