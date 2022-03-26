import React from "react";
import { Text, View, Image } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Input } from "react-native-elements";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import appValues from "../../constants/appValues";
import globalStyles from "../../constants/global.styles";
import Layout from "../../constants/Layout";
import { useToggle } from "../../lib/hooks";
import Colors from "../../constants/Colors";

const OTPCode: React.FC = () => {
  const [showPassword, setShowPassword] = useToggle(true);
  return (
    <ContainerScrollView>
      <PaddedView style={[globalStyles.marginTop]}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "center", width: "65%" }}>
            We have sent OTP on your number
          </Text>
          <Text
            style={[
              globalStyles.marginTopSm,
              { color: Colors.secondary, textAlign: "center", width: "65%" },
            ]}
          >
            Carrier rates may apply
          </Text>
        </View>
        <OTPInputView
          style={{ width: "100%", height: 200 }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          onCodeFilled={(code: unknown) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
          codeInputFieldStyle={{
            color: "#222",
            borderColor: "#999",
            width: 60,
            height: 60,
          }}
        />
      </PaddedView>
    </ContainerScrollView>
  );
};

export default OTPCode;
