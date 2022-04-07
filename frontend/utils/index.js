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

export const setCredentials = async (token, expiry) => {
  try {
    await AsyncStorage.setItem("@Auth:token", JSON.stringify(token));
    // await AsyncStorage.setItem("@Auth:expiry", JSON.stringify(expiry));
  } catch (e) {
    console.log(e);
  }
};

export const isTokenExpired = (expiry) => {
  if (expiry < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
};

export const getVerifiedKeys = async (token, expiry) => {
  console.log("Loading keys from storage");

  if (token) {
    console.log("checking access");
    return token;

    if (!isTokenExpired(expiry)) {
      console.log("returning access");

      return token;
    } else {
      console.log("access expired");

      console.log("checking refresh expiry");

      throw new Error("Token already expired");

      // if (!isTokenExpired(keys.refresh)) {
      //   console.log("fetching access using refresh");

      //   //TODO: write code to get refreshed tokens from server and store with AsyncStorage.

      //   return null;
      // } else {
      //   console.log("refresh expired, please login");

      //   return null;
      // }
    }
  } else {
    console.log("access not available please login");
    return null;
  }
};

export const getCredentials = async () => {
  try {
    let credentials = await AsyncStorage.getItem("@Auth:token");

    let cred = JSON.parse(credentials);

    if (credentials != null) {
      return credentials;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
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
