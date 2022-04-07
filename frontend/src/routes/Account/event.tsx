import React, { useState } from "react";
import { View, Alert, Text } from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { showToast } from "../../../utils";
import appValues from "../../constants/appValues";
import Colors from "../../constants/Colors";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Event: React.FC<Props> = ({ navigation }) => {
  const handleDelete = () => {
    showToast("success", undefined, "Successfully Deleted", "top");
    navigation.goBack();
  };

  const createTwoButtonAlert = () => {
    Alert.alert("Are you sure?", "", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      {
        text: "Yes",
        onPress: () => {
          handleDelete();
        },
        style: "destructive",
      },
    ]);
  };

  return (
    <ContainerScrollView>
      <PaddedView>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 10,
            },
          ]}
          onPress={() => {}}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={[
                globalStyles.text,
                {
                  fontSize: appValues.font.h3,
                  fontFamily: "DMSans_500Medium",
                },
              ]}
            >
              Title
            </Text>
            <Text
              style={[
                globalStyles.text,
                { color: Colors.darkGrayText, fontSize: appValues.font.h4 },
              ]}
            >
              4 March
            </Text>
          </View>
        </TouchableOpacity>
        <View style={[globalStyles.marginTop]}>
          <BlockButton onPress={createTwoButtonAlert} color={Colors.danger}>
            Delete Event
          </BlockButton>
        </View>
      </PaddedView>
    </ContainerScrollView>
  );
};

export default Event;
