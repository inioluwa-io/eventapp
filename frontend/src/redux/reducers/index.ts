import AsyncStorage from "@react-native-async-storage/async-storage";
import uiReducer from "./uiReducers";
import authReducer from "./authReducers";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import userReducer from "./userReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "user"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
});
export default rootReducer;
