import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import WalletScreen from "./wallet";
import { headerStyles } from "../../constants";
import globalStyles from "../../constants/global.styles";
import AllTransactions from "./allTransactions";
import BackArrow from "../../components/headerBackButton";

const WalletStackNavigator = createStackNavigator();

const Wallet: React.FC = () => {
  return (
    <WalletStackNavigator.Navigator
      screenOptions={{ ...headerStyles(), headerShown: false }}
    >
      <WalletStackNavigator.Screen
        name="WalletScreen"
        component={WalletScreen}
        options={({ navigation }) => ({
          headerLeft: () => <BackArrow onPress={() => navigation.goBack()} />,
          gestureEnabled: false,
          headerShown: false,
        })}
      />
      <WalletStackNavigator.Screen
        name="AllTransactionScreen"
        component={AllTransactions}
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
              Transactions
            </Text>
          ),
        })}
      />
    </WalletStackNavigator.Navigator>
  );
};

export default Wallet;
