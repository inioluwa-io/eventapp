import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import AnimatedTabBar from "@gorhom/animated-tabbar";

// Icons
import Colors from "../constants/Colors";
import Message from "./Message";
import Wallet from "./Wallet";
import Account from "./Account";
import SettingsButton from "../components/settingsButton";

const Tab = createBottomTabNavigator();
const TAB_ICON_SIZE = 20;

const tabs = {
  Home: {
    labelStyle: {
      color: Colors.primary,
    },
    icon: {
      component: ({ color }: any) => (
        <Feather name="home" color={"#000000"} size={TAB_ICON_SIZE} />
      ),
      color: Colors.primary,
    },
    indicator: {
      color: Colors.accent,
    },
  },
  Explore: {
    labelStyle: {
      color: Colors.primary,
    },
    icon: {
      component: ({ color }: any) => (
        <Feather name="compass" color={"#000000"} size={TAB_ICON_SIZE} />
      ),
      color: Colors.primary,
    },
    indicator: {
      color: Colors.accent,
    },
  },
  Cart: {
    labelStyle: {
      color: Colors.primary,
    },
    icon: {
      component: ({ color }: any) => (
        <Feather name="shopping-bag" color={"#000000"} size={TAB_ICON_SIZE} />
      ),
      color: Colors.primary,
    },
    indicator: {
      color: Colors.accent,
    },
  },
  Account: {
    labelStyle: {
      color: Colors.primary,
    },
    icon: {
      component: ({ color }: any) => (
        <Ionicons
          name="person-outline"
          color={"#000000"}
          size={TAB_ICON_SIZE}
        />
      ),
      color: Colors.primary,
    },
    indicator: {
      color: Colors.accent,
    },
  },
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        title: " ",
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: Colors.white,
        tabBarInactiveBackgroundColor: "#fff",
        tabBarLabelStyle: {
          fontFamily: "DMSans_400Regular",
        },
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#CE4418",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
        initialParams={{
          backgroundColor: tabs.Home.labelStyle.color,
          nextScreen: "Wallet",
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-wallet-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
        initialParams={{
          backgroundColor: tabs.Explore.labelStyle.color,
          nextScreen: "Message",
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarLabel: "Message",
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-circle" color={color} size={size} />
          ),
          headerShown: false,
        }}
        initialParams={{
          backgroundColor: tabs.Cart.labelStyle.color,
          nextScreen: "Account",
        }}
      />
      {/* <Tab.Screen
        name="Saved"
        component={Saved}
        options={{
          tabBarLabel: 'Saved',
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            // <Feather name="user" color={color} size={size} />
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerShown: false,
        })}
        initialParams={{
          backgroundColor: tabs.Account.labelStyle.color,
          nextScreen: "Home",
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
