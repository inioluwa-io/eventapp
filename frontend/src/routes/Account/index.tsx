import React from "react";
import { Text } from "react-native";
import { headerStyles } from "../../constants";
import BackArrow from "../../components/headerBackButton";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./account";
import SettingsButton from "../../components/settingsButton";
import globalStyles from "../../constants/global.styles";
import EditProfile from "./editProfile";
import Settings from "./settings";

const AccountStackNavigator = createStackNavigator();

const Account: React.FC = () => {
  return (
    <AccountStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <AccountStackNavigator.Screen
        name="AccountScreen"
        component={AccountScreen}
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
        name="EditProfileScreen"
        component={EditProfile}
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
              Edit Profile
            </Text>
          ),
        })}
      />
    </AccountStackNavigator.Navigator>
  );
};

export default Account;
