import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
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
import BannerPng from "../../../assets/architect.png";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const IntroScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ContainerView>
      <View
        style={{
          marginTop: 60,
          width: Layout.window.width / 1.4,
          flex: 1,
        }}
      >
        <Image
          style={styles.thumbnail}
          source={BannerPng}
          height={Layout.window.height - 300}
        />
      </View>
      <PaddedView style={{ marginTop: 0, flex: 0 }}>
        <View
          style={[
            globalStyles.inputContainer,
            { width: Layout.window.width / 1.3 },
          ]}
        >
          <Text style={[globalStyles.boldText]}>Fun events.</Text>
          <Text style={[globalStyles.boldText]}>Easy connect </Text>
          <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
            Find events nearby.
          </Text>
        </View>
        <View style={[globalStyles.marginTop, { flexDirection: "row" }]}>
          <View style={[globalStyles.marginRightSm, { flex: 1 }]}>
            <BlockButton
              outline
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Login
            </BlockButton>
          </View>
          <View style={{ flex: 1 }}>
            <BlockButton
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Register
            </BlockButton>
          </View>
        </View>
      </PaddedView>
    </ContainerView>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  thumbnail: {
    resizeMode: "contain",
    marginLeft: -(Layout.window.width / 3.15),
    height: Layout.window.height - 300,
  },
  container: {
    shadowRadius: 8,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginBottom: 8,
  },
  image: {
    borderRadius: 10,
    overflow: "hidden",
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
