import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../../../constants/global.styles";
import { Avatar } from "react-native-elements";
import appValues from "../../../constants/appValues";
import { ProfileItemProps } from "../../../../types";
import Colors from "../../../constants/Colors";

const ProfileItem: React.FC<ProfileItemProps> = ({
  src,
  registration_numbers,
  location,
  navigation,
}) => {
  const gotoProfileScreen = () => {
    navigation?.navigate("ArchitectScreen", {
      registration_numbers,
      src,
      location,
    });
  };

  const getInitialsFromName = (str: string) => {
    const arr = str.split(" ");

    return `${arr[0][0]}${arr[1][0]}`;
  };

  return (
    <Pressable
      style={[styles.container, { flexDirection: "row", alignItems: "center" }]}
      onPress={gotoProfileScreen}
    >
      {
        //   <View style={{ marginRight: 10 }}>
        //   <Avatar
        //     title={getInitialsFromName(name)}
        //     source={src}
        //     titleStyle={{ color: "#fff" }}
        //     rounded
        //     size={55}
        //   />
        // </View>
      }
      <View>
        <Text
          style={[
            { fontSize: appValues.font.h3, fontFamily: "DMSans_700Bold" },
          ]}
        >
          {registration_numbers}
        </Text>
        <Text style={[globalStyles.text, { color: Colors.darkGray }]}>
          {location}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({ container: { marginVertical: 10 } });
