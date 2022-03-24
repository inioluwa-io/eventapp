import React, { useState, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Animated,
  StyleSheet,
  View,
  Image,
} from "react-native";
import AppBackground from "../UI/AppBackground";
import AppTitleNote from "../UI/AppTitleNote";
import { AppInput } from "../UI/AppInput";
import AppButton from "../UI/AppButton";
import AppImage from "../UI/AppImage";
import AppBackComp from "../UI/AppBackComp";
import AppPaddedView from "../UI/AppPaddedView";
import png from "../../assets/png";
import AppCenterView from "../UI/AppCenterView";

export default function EmailSent(props) {
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
          <AppCenterView>
            <View>
              <Image source={png.EmailSent} />
            </View>
            <AppTitleNote login type="emailSent" />
          </AppCenterView>
          <AppButton title="Sign in" onPress={() => props.navigation.navigate("SignIn") } />
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
