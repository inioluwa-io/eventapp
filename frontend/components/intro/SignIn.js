import React, { useState, useRef } from "react";
import { Image, Keyboard, StyleSheet, TextInput } from "react-native";
import png from "../../assets/png";
import AppBackground from "../UI/AppBackground";
import AppTitleNote from "../UI/AppTitleNote";
import TopImageWrapper from "../UI/TopImageWrapper";
import { AppInput } from "../UI/AppInput";
import ForgotPassword from "../UI/AppForgotPasswordLine";
import AppButton from "../UI/AppButton";
import LoginFooter from "../UI/LoginFooter";
import { useNavigation } from "@react-navigation/native";
import AppPaddedView from "../UI/AppPaddedView";
import { loginUser } from "../../utilities/actions/auth";
import { connect } from "react-redux";

function SignIn(props) {
  const navigation = useNavigation();
  const _emailinput = useRef(0);
  const _passwordinput = useRef(0);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AppBackground>
      <AppPaddedView>
        <TopImageWrapper>
          <Image source={png.ColorLogo} style={styles.image} />
        </TopImageWrapper>

        <AppTitleNote login type="login" />

        <AppInput
          label="Email Address"
          value={email}
          onChangeText={(input) => setEmail(input)}
          ref={_emailinput}
          onSubmitEditing={() => _passwordinput.current.focus()}
          // nextRef={_passwordinput}
          // focus={() => _passwordinput.current.focus()}
        />
        <AppInput
          label="Password"
          value={password}
          onChangeText={(input) => setPassword(input)}
          ref={_passwordinput}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <ForgotPassword />
        <AppButton title="Sign In" onPress={() => props.loginUser()} />
        <LoginFooter
          text={"Don't have an account ? "}
          linkText={"Sign up"}
          navigation={() => navigation.navigate("SignUp")}
        />
      </AppPaddedView>
    </AppBackground>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch(loginUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
