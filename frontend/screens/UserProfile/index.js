import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "../../utilities/actions/auth";
import AppButton from "../../components/UI/AppButton";
import { ScrollView } from "react-native-gesture-handler";
import AppPaddedView from "../../components/UI/AppPaddedView";
// import { HeaderTitle } from "@react-navigation/stack";

function UserProfile(props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <AppPaddedView>
          <AppButton title="Sign Out" onPress={() => props.logoutUser()} />
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
