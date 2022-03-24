import React, { useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { connect, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { Image, StyleSheet, View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import png from "../../assets/png";
import AppBackground from "../../components/UI/AppBackground";
import AppTitleNote from "../../components/UI/AppTitleNote";
import TopImageWrapper from "../../components/UI/TopImageWrapper";
import ForgotPassword from "../../components/UI/AppForgotPasswordLine";
import AppButton from "../../components/UI/AppButton";
import LoginFooter from "../../components/UI/LoginFooter";
import AppPaddedView from "../../components/UI/AppPaddedView";
import { loginUser } from "../../utilities/actions/auth";
import globalStyles from "../../constants/global.styles";
import colors from "../../constants/colors";
import customLabelStyles from "../../constants/floatingLabelStyles";

function SignIn(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    dispatch({
      type: "LOGIN",
      payload: {},
    });
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <AppPaddedView style={{ paddingTop: 70 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppTitleNote login type="login" />

          <View style={globalStyles.inputContainer}>
            <FloatingLabelInput
              label="Email Address"
              value={email}
              keyboardType="email-address"
              onChangeText={(input) => setEmail(input.trim())}
              containerStyles={globalStyles.inputWrap}
              labelStyles={globalStyles.floatingLabelStyle}
              customLabelStyles={customLabelStyles}
            />
          </View>
          <View style={globalStyles.inputContainer}>
            <FloatingLabelInput
              label={"Password"}
              isPassword
              togglePassword={showPassword}
              value={password}
              onChangeText={(value) => setPassword(value)}
              customShowPasswordComponent={
                <View style={{ padding: 4 }}>
                  <Feather name="eye" size={18} color={colors.mutedText} />
                </View>
              }
              customHidePasswordComponent={
                <View style={{ padding: 4 }}>
                  <Feather name="eye-off" size={18} color={colors.mutedText} />
                </View>
              }
              containerStyles={globalStyles.inputWrap}
              inputStyles={{ color: colors.darkGray }}
              labelStyles={globalStyles.floatingLabelStyle}
              customLabelStyles={customLabelStyles}
            />
          </View>
          <ForgotPassword />
          <AppButton title="Sign In" onPress={() => props.loginUser()} />
          <LoginFooter
            text={"Don't have an account ? "}
            linkText={"Sign up"}
            navigation={() => navigation.navigate("SignUp")}
          />
        </ScrollView>
      </AppPaddedView>
    </View>
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
