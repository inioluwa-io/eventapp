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
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { useToggle } from "../../lib/hooks";
import axios from "../../lib/axios";
import Colors from "../../constants/Colors";
import { showToast } from "../../../utils";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type FormDataProps = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password2: string;
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
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSignUp = async () => {
    navigation.navigate("Login");
    if (canSubmit(formData)) {
      setLoading(true);
      try {
        // await axios.post("registers", formData);
        setLoading(false);
        setTimeout(() => {
          showToast("success", "Successfully Registered");
          navigation.navigate("Login");
        }, 700);
      } catch (err) {
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
              <Input
                placeholder="First name"
                label={formData.first_name && "First name"}
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.first_name}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, first_name: val.trim() })
                }
              />
              <Input
                placeholder="Last name"
                label={formData.last_name && "Last name"}
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.last_name}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, last_name: val.trim() })
                }
              />
              <Input
                placeholder="Email address"
                label={formData.email && "Email address"}
                keyboardType="email-address"
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
                label={formData.password2 && "Confirm Password"}
                textContentType="password"
                labelStyle={[globalStyles.text]}
                inputStyle={[globalStyles.text]}
                secureTextEntry={true}
                containerStyle={globalStyles.inputContainerSm}
                value={formData.password2}
                onChangeText={(val: string) =>
                  setFormData({ ...formData, password2: val.trim() })
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
                    style={[globalStyles.text, { color: Colors.primary }]}
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
