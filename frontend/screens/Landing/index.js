import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import AppButton from "../../components/UI/AppButton";
import Spacing from "../../components/Spacing";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AppButton
          title="Architect"
          onPress={() => {
            navigation.navigate("Home");
          }}
          customStyle={{ width: 200, height: 150 }}
        />
        <Spacing />
        <AppButton
          title="Adverts"
          onPress={() => {
            navigation.navigate("Advert");
          }}
          customStyle={{ width: 200, height: 150 }}
        />
      </View>
    </View>
  );
};
export default Landing;
