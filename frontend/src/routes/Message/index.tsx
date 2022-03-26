import React from "react";
import { Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import { headerStyles } from "../../constants";
import BackArrow from "../../components/headerBackButton";
import globalStyles from "../../constants/global.styles";
import MessageScreen from "./message";
import Contacts from "./contacts";

const MessageStackNavigator = createStackNavigator();

const getInitialsFromName = (str: string) => {
  const arr = str.split(" ");

  return `${arr[0][0]}${arr[1][0]}`;
};

const Message: React.FC = () => {
  return (
    <MessageStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <MessageStackNavigator.Screen
        name="Contacts"
        component={Contacts}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: false,
          headerShown: false,
        })}
      />
      <MessageStackNavigator.Screen
        name="Messages"
        component={MessageScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => {
            const { params } = route;
            const { name, src } = params as any;
            return (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <BackArrow onPress={() => navigation.goBack()} />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      marginRight: 7,
                    }}
                  >
                    <Avatar
                      title={getInitialsFromName(name)}
                      source={src}
                      titleStyle={{ color: "#fff" }}
                      rounded
                      size={40}
                    />
                  </View>
                  <Text
                    style={[
                      globalStyles.text,
                      {
                        fontFamily: "DMSans_700Bold",
                      },
                    ]}
                  >
                    {name}
                  </Text>
                </View>
              </View>
            );
          },
          gestureEnabled: true,
          headerShown: true,
        })}
      />
    </MessageStackNavigator.Navigator>
  );
};

export default Message;
