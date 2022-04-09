import React, { useState } from "react";
import {
  Text,
  View,
  KeyboardAvoidingView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { useToggle } from "../../lib/hooks";
import Colors from "../../constants/Colors";
import { showToast } from "../../../utils";
import { registerUser } from "../../redux/actions";
import { useIsLoggedIn, useUser } from "../../lib/hooks";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
};

export const canSubmit = (data: any): boolean => {
  const values = Object.values(data);
  for (let i = 0; i < values.length; i++) {
    if (values[i] === "") return false;
  }
  return true;
};

const Register: React.FC<Props> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useToggle(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "user",
  });
  const [pickerOpacity, setPickerOpacity] = useState<boolean>(false);
  const [, setLoggedIn] = useIsLoggedIn();
  const [, setUser] = useUser();

  const handleSignUp = async () => {
    if (canSubmit(formData)) {
      setLoading(true);
      try {
        const { data } = await registerUser(formData);
        await AsyncStorage.setItem("@Auth:token", data?.token);
        setUser(data?.user);
        setLoggedIn(true);
        setLoading(false);
        setTimeout(() => {
          showToast("success", "Successfully Registered");
          navigation.navigate("Login");
        }, 700);
      } catch (err: any) {
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
          <PaddedView style={[globalStyles.marginTop]}>
            <View style={[globalStyles.inputContainer]}>
              <Text style={[globalStyles.boldText]}>Registration</Text>
              <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
                Find events nearby.
              </Text>
            </View>
            <View style={[globalStyles.marginTop]}>
              {pickerOpacity && (
                <View>
                  <Picker
                    selectedValue={formData.role}
                    onValueChange={(itemValue, itemIndex) => {
                      setFormData({ ...formData, role: itemValue });
                      setPickerOpacity(false);
                    }}
                  >
                    <Picker.Item label="User" value="user" />
                    <Picker.Item label="Creator" value="creator" />
                  </Picker>
                </View>
              )}
              {!pickerOpacity && (
                <Input
                  placeholder="Role"
                  label={formData.role && "Role"}
                  labelStyle={[globalStyles.text]}
                  inputStyle={[globalStyles.text]}
                  containerStyle={globalStyles.inputContainerSm}
                  value={formData.role}
                  onChangeText={
                    (val: string) => {}
                    // setFormData({ ...formData, name: val.trim() })
                  }
                  onPressIn={() => {
                    setPickerOpacity(true);
                  }}
                />
              )}
              <Input
                placeholder="Fullname"
                label={formData.name && "Fullname"}
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.name}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, name: val.trim() })
                }
              />
              <Input
                placeholder="Email address"
                label={formData.email && "Email address"}
                keyboardType="email-address"
                textContentType="emailAddress"
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                containerStyle={[globalStyles.inputContainerSm]}
                value={formData.email}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, email: val.trim() })
                }
              />
              <Input
                placeholder="Password"
                label={formData.password && "Password"}
                textContentType="password"
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                secureTextEntry={showPassword}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.password}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, password: val.trim() })
                }
              />
              <Input
                placeholder="Confirm Password"
                label={formData.password_confirmation && "Confirm Password"}
                textContentType="password"
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                secureTextEntry={true}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.password_confirmation}
                onChangeText={(val: string) =>
                  setFormData({
                    ...formData,
                    password_confirmation: val.trim(),
                  })
                }
              />
            </View>
            <View style={[globalStyles.marginTop, { alignItems: "center" }]}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Text style={[globalStyles.text, { textAlign: "center" }]}>
                  Already have an account?{" "}
                </Text>
                <Pressable>
                  <Text
                    style={[globalStyles.text, { color: Colors.secondary }]}
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  >
                    Login
                  </Text>
                </Pressable>
              </View>
            </View>
            <View style={[globalStyles.marginTop]}>
              <BlockButton
                loading={loading}
                disabled={loading}
                onPress={() => {
                  handleSignUp();
                }}
              >
                Register
              </BlockButton>
            </View>
          </PaddedView>
        </ContainerScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;
