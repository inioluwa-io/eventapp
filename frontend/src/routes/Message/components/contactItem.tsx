import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import globalStyles from "../../../constants/global.styles";
import { Avatar } from "react-native-elements";
import appValues from "../../../constants/appValues";
import { ContactItemProps } from "../../../../types";
import Colors from "../../../constants/Colors";

const ContactItem: React.FC<ContactItemProps> = ({ src, name, navigation }) => {
  const gotoProfileScreen = () => {
    navigation?.navigate("Messages", {
      name,
      src,
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
      <View style={{ marginRight: 10 }}>
        <Avatar
          title={getInitialsFromName(name)}
          source={src}
          titleStyle={{ color: "#fff" }}
          rounded
          size={55}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={[
            { fontSize: appValues.font.h3, fontFamily: "DMSans_700Bold" },
          ]}
        >
          {name}
        </Text>
        <Text
          style={[globalStyles.text, { color: Colors.darkGray }]}
          numberOfLines={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed
          facilis itaque eligendi dolores sapiente nam vitae aspernatur
          explicabo quia ipsum et ad illum, odio quis numquam, est aut delectus!
        </Text>
      </View>
    </Pressable>
  );
};

export default ContactItem;

const styles = StyleSheet.create({ container: { marginVertical: 10 } });
