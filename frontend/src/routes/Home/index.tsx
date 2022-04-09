import React from "react";
import { Text } from "react-native";
import { headerStyles } from "../../constants";
import BackArrow from "../../components/headerBackButton";
import { createStackNavigator } from "@react-navigation/stack";
import Maps from "./maps";
import SettingsButton from "../../components/settingsButton";
import globalStyles from "../../constants/global.styles";
import AddEvent from "./addEvent";
import Settings from "./settings";
import MyEvents from "./myEvents";
import Event from "./event";

const AccountStackNavigator = createStackNavigator();

const Account: React.FC = () => {
  return (
    <AccountStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <AccountStackNavigator.Screen
        name="MapsScreen"
        component={Maps}
        options={({ navigation }) => ({
          headerLeft: () => <></>,
          gestureEnabled: true,
          headerShown: true,
          headerRight: () => (
            <SettingsButton
              onPress={() => navigation.navigate("SettingsScreen")}
            />
          ),
          headerTransparent: true,
        })}
      />
      <AccountStackNavigator.Screen
        name="SettingsScreen"
        component={Settings}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: true,
          headerShown: true,
          headerTitle: () => (
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: "DMSans_700Bold",
                },
              ]}
            >
              Settings
            </Text>
          ),
        })}
      />
      <AccountStackNavigator.Screen
        name="AddEventScreen"
        component={AddEvent}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: true,
          headerShown: true,
          headerTitle: () => (
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: "DMSans_700Bold",
                },
              ]}
            >
              Add Event
            </Text>
          ),
        })}
      />
      <AccountStackNavigator.Screen
        name="MyEventsScreen"
        component={MyEvents}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: true,
          headerShown: true,
          headerTitle: () => (
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: "DMSans_700Bold",
                },
              ]}
            >
              My Events
            </Text>
          ),
        })}
      />
      <AccountStackNavigator.Screen
        name="EventScreen"
        component={Event}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: true,
          headerShown: true,
          headerTitle: () => (
            <Text
              style={[
                globalStyles.text,
                {
                  fontFamily: "DMSans_700Bold",
                },
              ]}
            >
              Event
            </Text>
          ),
        })}
      />
    </AccountStackNavigator.Navigator>
  );
};

export default Account;
