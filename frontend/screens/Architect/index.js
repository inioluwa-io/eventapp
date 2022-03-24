import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "../../utilities/actions/auth";
import { ScrollView } from "react-native-gesture-handler";
import AppPaddedView from "../../components/UI/AppPaddedView";
import appValues from "../../constants/appValues";
import ProfileItem from "./components/ProfileItem";
import architects from "../../data/architects";
import Spacing from "../../components/Spacing";
import { AppSearchBar } from "../../components/AppSearchBar";
import AppBackComp from "../../components/UI/AppBackComp";

function Architect() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AppBackComp />
      <ScrollView>
        <AppPaddedView>
          <Spacing size={20} />
          <Text style={{ fontSize: appValues.font.h1, fontWeight: "700" }}>
            Architects
          </Text>
          <Spacing size={20} />
          {architects.map(({ firstName, lastName, src, location, id }) => (
            <ProfileItem
              key={id}
              src={src}
              name={`${firstName} ${lastName}`}
              location={location}
            />
          ))}
        </AppPaddedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Architect);
