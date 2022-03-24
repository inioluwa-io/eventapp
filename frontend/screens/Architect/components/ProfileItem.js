import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../../../constants/global.styles";
import { Avatar } from "react-native-elements";
import appValues from "../../../constants/appValues";
import colors from "../../../constants/colors";
import { useNavigation } from "@react-navigation/core";

const ProfileItem = ({ src, name, location, rating }) => {
  const navigation = useNavigation();

  const gotoProfileScreen = () => {
    navigation.navigate("Profile");
  };

  const getInitialsFromName = (str) => {
    const arr = str.split(" ");

    return `${arr[0][0]}${arr[1][0]}`;
  };

  return (
    <Pressable
      style={[globalStyles.rowStart, styles.container]}
      onPress={gotoProfileScreen}
    >
      <View style={{ marginRight: 10 }}>
        <Avatar
          title={getInitialsFromName(name)}
          source={src}
          titleStyle={{ color: "#fff" }}
          rounded
          size={50}
        />
      </View>
      <View>
        <Text style={{ fontSize: appValues.font.h3, fontWeight: "700" }}>
          {name}
        </Text>
        <Text style={{ color: colors.darkGray }}>{location}</Text>
      </View>
    </Pressable>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({ container: { marginVertical: 10 } });
