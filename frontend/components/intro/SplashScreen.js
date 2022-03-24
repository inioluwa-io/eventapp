import React from "react";
import { useState, useEffect } from "react";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AnimatedSplash from "react-native-animated-splash-screen";
import png from "../../assets/png";
import colors from "../../constants/colors";
import Intro from "./Intro";
import GettingStarted from "./GettingStarted";
import IntroNav from "./IntroNav";
import Constants from "expo-constants";
import { connect } from "react-redux";
import MainNav from "../main/mainNav";

function SplashScreen(props) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    StatusBar.setHidden(true);
    setTimeout(() => {
        setLoaded(true)
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={png.FoodWhite} style={{ flex: 1 }}>
        <AnimatedSplash
          translucent={true}
          isLoaded={loaded}
          logoImage={png.ColorLogo}
          backgroundColor={"transparent"}
          logoHeight={150}
          logoWidth={150}
        >
          {!props.auth.loggedIn ? (!loaded ? <Intro /> : <IntroNav />): <MainNav/>}
        </AnimatedSplash>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight
  },
});

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};


export default connect(mapStateToProps, null)(SplashScreen);
