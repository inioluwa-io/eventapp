import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { logoutUser } from "../../utilities/actions/auth";
import { ScrollView } from "react-native-gesture-handler";
import AppPaddedView from "../../components/UI/AppPaddedView";
import appValues from "../../constants/appValues";
import Spacing from "../../components/Spacing";
import states from "../../data/states";
import AppButton from "../../components/UI/AppButton";
import { useNavigation } from "@react-navigation/core";
import AppBackComp from "../../components/UI/AppBackComp";

function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <AppBackComp />
      <ScrollView>
        <AppPaddedView>
          <Spacing size={50} />
          <Text style={{ fontSize: appValues.font.h1, fontWeight: "700" }}>
            Connect with your dream architect in a state
          </Text>
          <Spacing size={40} />
        </AppPaddedView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 10,
            marginRight: 20,
          }}
        >
          {states.map((state) => (
            <View style={styles.stateButton} key={state}>
              <AppButton
                title={state}
                onPress={() => {
                  navigation.navigate("Architect");
                }}
                customStyle={{ height: 100 }}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  stateButton: {
    width: Dimensions.get("window").width / 2 - 30,
    marginLeft: 10,
    marginBottom: 10,
  },
});

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
