import Toast from "react-native-toast-message";

export const showToast = (type, title, body, position = "top") => {
  Toast.show({
    type: type,
    text1: title,
    text2: body,
    visibilityTime: 3500,
    position,
  });
};