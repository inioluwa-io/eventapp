import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const showToast = (type, title, body, position = "top") => {
  Toast.show({
    type: type,
    text1: title,
    text2: body,
    visibilityTime: 3500,
    position,
  });
};

export const removeCredentials = async () => {
  try {
    await AsyncStorage.removeItem("@Auth:token");
    // await AsyncStorage.removeItem("@Auth:expiry");
  } catch (e) {
    console.log(e);
    return null;
  }
};
