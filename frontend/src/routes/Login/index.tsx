import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input } from "react-native-elements";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import appValues from "../../constants/appValues";
import globalStyles from "../../constants/global.styles";
import Layout from "../../constants/Layout";
import { useIsLoggedIn, useToggle } from "../../lib/hooks";
import Colors from "../../constants/Colors";
import { PageProps } from "../../../types";
import { canSubmit } from "../Authentication/register";
import axios from "../../lib/axios";
import { setCredentials, showToast } from "../../../utils";

type FormDataProps = {
  email: string;
  password: string;
};

const Login: React.FC<PageProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    password: "",
  });
  const [, setIsLoggedIn] = useIsLoggedIn();

  const handleSignIn = async () => {
    setIsLoggedIn(true);
    setTimeout(() => {
      showToast("success", "Successfully Logged In");
    }, 700);
    if (canSubmit(formData)) {
      setLoading(true);
      try {
        // const response = await axios.post("login", formData);
        // console.log(response.data);
        setLoading(false);
        // const { expiry, token } = response.data;

        // await setCredentials(token, expiry);
        setIsLoggedIn(true);
        setTimeout(() => {
          showToast("success", "Successfully Logged In");
        }, 700);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      showToast("error", "All fields are required");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerScrollView>
          <KeyboardAvoidingView>
            <PaddedView style={[globalStyles.marginTop]}>
              <View style={[globalStyles.inputContainer]}>
                <Text style={[globalStyles.boldText]}>Login</Text>
                <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
                  Find events nearby.
                </Text>
              </View>
              <View style={[globalStyles.marginTop]}>
                <Input
                  placeholder="Email"
                  label={formData.email && "Email"}
                  keyboardType="email-address"
                  labelStyle={[globalStyles.text]}
                  inputStyle={[globalStyles.text]}
                  containerStyle={globalStyles.inputContainerSm}
                  value={formData.email}
                  onChangeText={(val: string) =>
                    setFormData({ ...formData, email: val.trim() })
                  }
                />
                <Input
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry={true}
                  labelStyle={[globalStyles.text]}
                  inputStyle={[globalStyles.text]}
                  containerStyle={globalStyles.inputContainerSm}
                  value={formData.password}
                  onChangeText={(val: string) =>
                    setFormData({ ...formData, password: val.trim() })
                  }
                />
              </View>
              <View style={[globalStyles.marginTop, { alignItems: "center" }]}>
                <View
                  style={{
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={[globalStyles.text, { textAlign: "center" }]}>
                    Don't have an account?{" "}
                  </Text>
                  <Pressable>
                    <Text
                      style={[globalStyles.text, { color: Colors.primary }]}
                      onPress={() => {
                        navigation?.navigate("Register");
                      }}
                    >
                      Register
                    </Text>
                  </Pressable>
                </View>
              </View>
              <View style={[globalStyles.marginTop]}>
                <BlockButton
                  loading={loading}
                  disabled={loading}
                  onPress={handleSignIn}
                >
                  Login
                </BlockButton>
              </View>
            </PaddedView>
          </KeyboardAvoidingView>
        </ContainerScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
