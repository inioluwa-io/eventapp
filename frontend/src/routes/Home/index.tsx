import React from "react";
import { Text } from "react-native";
import { headerStyles } from "../../constants";
import BackArrow from "../../components/headerBackButton";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home";
import ArchitectProfile from "./components/ArchitectProfile";
import globalStyles from "../../constants/global.styles";

const HomeStackNavigator = createStackNavigator();

const Home: React.FC = () => {
  return (
    <HomeStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: false,
          headerShown: false,
        })}
      />
      <HomeStackNavigator.Screen
        name="ArchitectScreen"
        component={ArchitectProfile}
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
              Profile
            </Text>
          ),
        })}
      />
    </HomeStackNavigator.Navigator>
  );
};

export default Home;
