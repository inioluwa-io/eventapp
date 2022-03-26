import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import { Feather, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";
import png from "../../../assets/png";
import Layout from "../../constants/Layout";
import { PageProps } from "../../../types";
import { removeCredentials } from "../../../utils";
import { useIsLoggedIn } from "../../lib/hooks";

const photosImg = [png.Arch1, png.Arch, png.Arch2, png.Arch3];

const list1 = [
  {
    name: "Favorites",
    icon: "heart-outline" as any,
    type: "ionicons",
  },
  {
    name: "My wallet",
    icon: "wallet-outline" as any,
    type: "ionicons",
  },
];

const list2 = [
  {
    name: "Need help",
    icon: "help-circle-outline" as any,
    type: "ionicons",
  },
  {
    name: "Rate this app",
    icon: "star" as any,
    type: "feather",
  },
  {
    name: "Privacy policy",
    icon: "shield" as any,
    type: "feather",
  },
  {
    name: "Terms of use",
    icon: "ios-document-text-outline" as any,
    type: "ionicons",
  },
];

const Settings: React.FC<PageProps> = ({ navigation }) => {
  const WIDTH = Layout.window.width - 40;
  const [height, setHeight] = useState<number>(100);
  const [, setIsLoggedIn] = useIsLoggedIn();

  const createTwoButtonAlert = () =>
    Alert.alert("Log out of Muhammed", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      {
        text: "Log out",
        onPress: () => {
          removeCredentials()
          setIsLoggedIn(false)
        },
        style: "destructive",
      },
    ]);

  return (
    <ScrollView nestedScrollEnabled>
      <View>
        <View style={{ padding: 17 }}>
          <Text style={[globalStyles.buttonLabel, { color: Colors.black }]}>
            About
          </Text>
        </View>
        {list2.map((l, i) => (
          <ListItem key={i} containerStyle={{ paddingVertical: 17 }}>
            {l.type === "feather" && (
              <Feather name={l.icon} size={21} color={Colors.black} />
            )}
            {l.type === "ionicons" && (
              <Ionicons name={l.icon} size={21} color={Colors.black} />
            )}
            <ListItem.Content>
              <ListItem.Title
                style={[globalStyles.buttonLabel, { color: Colors.black }]}
              >
                {l.name}
              </ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron color={Colors.black} />
          </ListItem>
        ))}
      </View>
      <View style={[globalStyles.marginTop]}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={createTwoButtonAlert}
          style={{
            backgroundColor: Colors.white,
            paddingVertical: 15,
          }}
        >
          <ListItem.Title
            style={[
              globalStyles.buttonLabel,
              globalStyles.centeredText,
              { color: Colors.danger },
            ]}
          >
            Log out
          </ListItem.Title>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Settings;
