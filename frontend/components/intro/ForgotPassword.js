import React, { useState, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleSheet,
} from "react-native";
import AppBackground from "../UI/AppBackground";
import AppTitleNote from "../UI/AppTitleNote";
import { AppInput } from "../UI/AppInput";
import AppButton from "../UI/AppButton";
import AppImage from "../UI/AppImage";
import AppBackComp from "../UI/AppBackComp";
import AppPaddedView from "../UI/AppPaddedView";

export default function ForgotPassword(props) {
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
          {/* <AppImage /> */}
          <AppTitleNote login type="forgotPassword" />
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

<AppButton title="Send" onPress={() => props.navigation.navigate("EmailSent")} />

          
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
