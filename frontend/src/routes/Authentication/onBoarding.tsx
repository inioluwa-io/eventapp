import React from "react";
import { Text, View, Image } from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import BlockButton from "../../components/BlockButton";
import ContainerView from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import Layout from "../../constants/Layout";
import BannerPng from "../../../assets/onboarding.png";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const OnBoardingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ContainerView>
      <View
        style={{
          marginTop: 60,
          width: Layout.window.width / 1.4,
        }}
      >
        <Image resizeMode="contain" source={BannerPng} />
      </View>
      <PaddedView style={{ marginTop: -20 }}>
        <View
          style={[
            globalStyles.inputContainer,
            { width: Layout.window.width / 1.3 },
          ]}
        >
          <Text style={[globalStyles.boldText]}>Efficient workers.</Text>
          <Text style={[globalStyles.boldText]}>Easy connect </Text>
          <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
            Connect with you dream architect.
          </Text>
        </View>
        <View style={[globalStyles.marginTop]}>
          <BlockButton
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Let's go
          </BlockButton>
        </View>
      </PaddedView>
    </ContainerView>
  );
};

export default OnBoardingScreen;
