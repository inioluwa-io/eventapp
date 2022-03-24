import React from "react";
import { View, Text, Image } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "../../utilities/actions/auth";
import AppButton from "../../components/UI/AppButton";
import { ScrollView } from "react-native-gesture-handler";
import AppPaddedView from "../../components/UI/AppPaddedView";
import Spacing from "../../components/Spacing";
import png from "../../assets/png";
import AppBackComp from "../../components/UI/AppBackComp";
// import { HeaderTitle } from "@react-navigation/stack";

function Advert(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AppBackComp>
        <Text>Brand</Text>
      </AppBackComp>
      <ScrollView style={{ flex: 1 }}>
        <Spacing />
        <AppPaddedView style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={png.Brand}
            style={{ width: "100%", height: 200, resizeMode: "contain" }}
          />
        </AppPaddedView>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Advert);
