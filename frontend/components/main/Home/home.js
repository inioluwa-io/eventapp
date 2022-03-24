import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "../../../utilities/actions/auth";
import AppButton from "../../UI/AppButton";

function Home(props) {
  return (
    <View>
      <Text>Home</Text>
      <AppButton title="Sign Out" onPress={() => props.logoutUser()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
