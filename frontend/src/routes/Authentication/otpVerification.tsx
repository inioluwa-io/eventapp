import React, { useState, useRef } from "react";
import { Text, View } from "react-native";
import { Input } from "react-native-elements";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import CountryPicker from "react-native-country-picker-modal";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import Colors from "../../constants/Colors";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const OTPVerification: React.FC<Props> = ({ navigation }) => {
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState<any>("NG");
  const [country, setCountry] = useState<any>(null);

  const onSelect = (country: any) => {
    setCountryCode(country.cca2);
    setCountry(country);

    console.log(country.cca2);
    // _phoneRef.current &&
    //   _phoneRef.current.selectCountry(country.cca2.toLowerCase());
  };

  return (
    <ContainerScrollView>
      <PaddedView style={[globalStyles.marginTopLg]}>
        <View style={[globalStyles.marginTopLg]}>
          <Text style={{ fontWeight: "bold" }}>Select Country</Text>

          <View style={globalStyles.inputContainer}>
            <CountryPicker
              onClose={() => setCountryModalVisible(false)}
              onSelect={onSelect}
              withFilter={true}
              withCallingCode={true}
              withCallingCodeButton={true}
              withCountryNameButton
              countryCode={countryCode}
              containerButtonStyle={globalStyles.inputWrap}
            />
          </View>
        </View>
        <View style={[globalStyles.marginTopLg]}>
          <Input placeholder="Enter your mobile number" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ textAlign: "center", width: "65%" }}>
            We will send you one time password (OTP)
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
        <View style={[globalStyles.marginTopLg]}>
          <BlockButton
            onPress={() => {
              navigation.navigate("OTPCode");
            }}
          >
            Next
          </BlockButton>
        </View>
      </PaddedView>
    </ContainerScrollView>
  );
};

export default OTPVerification;
