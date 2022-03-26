import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { NativeModules, Platform } from "react-native";
import { Provider } from "react-redux";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { PersistGate } from "redux-persist/integration/react";
import { navigationRef } from "./src/constants/rootNavigation";
import Routes from "./src/routes";
import store, { persistor } from "./src/redux";
import ContainerView from "./src/components/ContainerView";
import globalStyles from "./src/constants/global.styles";
import Colors from "./src/constants/Colors";

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 20 : StatusBarManager?.HEIGHT;

export default function App() {
  const toastConfig = {
    error: (props) => (
      <ErrorToast
        {...props}
        style={{ paddingVertical: 10, height: "auto" }}
        text1Style={[
          globalStyles.text,
          {
            fontSize: 16,
            color: Colors.danger,
          },
        ]}
        text2Style={[
          globalStyles.text,
          {
            fontSize: 14,
            color: Colors.danger,
          },
        ]}
        text2NumberOfLines={3}
      />
    ),
    success: (props) => (
      <BaseToast
        {...props}
        style={{ backgroundColor: Colors.black }}
        text1Style={[
          globalStyles.text,
          {
            fontSize: 16,
            color: "#fff",
          },
        ]}
        text2Style={[
          globalStyles.text,
          {
            fontSize: 14,
            color: "#fff",
          },
        ]}
        text2NumberOfLines={2}
      />
    ),
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ContainerView
          style={{ marginTop: STATUSBAR_HEIGHT, backgroundColor: "#fff" }}
        >
          <NavigationContainer ref={navigationRef}>
            <Routes />
            <StatusBar style="auto" />
          </NavigationContainer>
        </ContainerView>
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
}
