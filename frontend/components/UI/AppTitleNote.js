import React from "react";
import { View, Text } from "react-native";
import appValues from "../../constants/appValues";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function AppTitleNote(props) {
  const navigation = useNavigation();
  const words = (type) => {
    switch (type) {
      case "login":
        return { title: "Welcome", subtitle: "Sign in to continue" };

      case "signUp":
        return { title: "Create Account", subtitle: "Sign in to continue" };

      case "forgotPassword":
        return {
          title: "Forgot Your Password ?",
          subtitle:
            "Enter the email associated with your account and we’ll send an email with instruction to reset your password.",
        };
      case "emailSent":
        return {
          title: "Email has been sent !",
          subtitle:
            "Please check your inbox and click in the received link to reset a password",
        };

      default:
        return { title: "Title", subtitle: "Subtitle" };
    }
  };
  return (
    <View style={{ marginVertical: 30, width: "85%" }}>
      {props.login ? (
        <View>
          <Text
            style={{
              fontWeight: "700",
              fontSize: appValues.font.h1,
              marginBottom: 20,
              textAlign: props.type == "emailSent" ? "center" : "left",
            }}
          >
            {words(props.type).title}
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: appValues.fontSize - 1,
              textAlign: props.type == "emailSent" ? "center" : "left",
            }}
          >
            {words(props.type).subtitle}
          </Text>
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontWeight: "700",
              fontSize: appValues.fontSize + 2,
              marginBottom: 20,
            }}
          >
            Create Account
          </Text>
          <Text style={{ fontWeight: "500", fontSize: appValues.fontSize - 1 }}>
            Do you have an account ?{" "}
            <Text
              onPress={() => navigation.navigate("SignIn")}
              style={{ color: colors.green }}
            >
              Sign In
            </Text>
          </Text>
        </View>
      )}
    </View>
  );
}
