import React from "react";
import { Text, View, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";
import { PageProps } from "../../../types";
import { removeCredentials } from "../../../utils";
import { useIsLoggedIn, useUser } from "../../lib/hooks";

const Settings: React.FC<PageProps> = ({ navigation }) => {
  const [, setIsLoggedIn] = useIsLoggedIn();
  const [user] = useUser();

  const list = [
    {
      name: "My Events",
      onClick: () => {
        navigation?.navigate("MyEventsScreen")
      },
    },
    {
      name: "Add Event",
      onClick: () => {
        navigation?.navigate("AddEventScreen")},
    },
  ];


  const createTwoButtonAlert = () =>
    Alert.alert("Log out", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "default",
      },
      {
        text: "Log out",
        onPress: () => {
          removeCredentials();
          setIsLoggedIn(false);
        },
        style: "destructive",
      },
    ]);

  return (
    <ScrollView nestedScrollEnabled>
      <View>
        {user?.role === "creator" && (
          <View style={{ padding: 17 }}>
            <Text style={[globalStyles.buttonLabel, { color: Colors.black }]}>
              Manage Events
            </Text>
          </View>
        )}
        {user?.role === "creator" &&
          list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={{ paddingVertical: 17 }}
              onPress={() => {
                l.onClick();
              }}
            >
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
