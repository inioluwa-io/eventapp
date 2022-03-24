import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-elements";
import Spacing from "../../../components/Spacing";
import AppButton from "../../../components/UI/AppButton";
import colors from "../../../constants/colors";
import globalStyles, { SHADOW_CONFIG } from "../../../constants/global.styles";

const ProfileCard = ({ src, name, description }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          title={"IS"}
          source={src}
          titleStyle={{ color: "#fff" }}
          rounded
          containerStyle={{ backgroundColor: colors.darkGray }}
          size={120}
          iconStyle={{ color: "green" }}
        />
      </View>
      <View style={[styles.userInfo]}>
        <Text
          style={[
            globalStyles.centeredText,
            globalStyles.boldText,
            globalStyles.sectionTitle,
          ]}
        >
          {name}
        </Text>
        <Text style={[globalStyles.centeredText]}>{description}</Text>
        <Spacing />
        <View style={[globalStyles.sectionTitleWrap]}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <AppButton title="Message" size="xs" />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <AppButton title="Message" size="xs" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    marginTop: 90,
  },
  avatar: { position: "absolute", zIndex: 99, elevation: 9 },
  userInfo: {
    ...SHADOW_CONFIG,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 60,
    marginHorizontal: 30,
    paddingTop: 80,
    borderRadius: 10,
  },
});
