import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SplashScreen from "./components/intro/SplashScreen";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore, persistReducer } from "redux-persist";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./utilities/reducer";
import Routes from "./routes";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

//remove this in production || after demo
// console.disableYellowBox = true;

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};
const reduxMiddlewares = [thunk, createLogger()];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(...reduxMiddlewares)
);

const persistedStore = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore} loading={false}>
        <PaperProvider theme={theme}>
          <View style={styles.container}>
            <Routes />
            <StatusBar
              style="dark"
              hidden={false}
              hideTransitionAnimation={false}
            />
          </View>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
