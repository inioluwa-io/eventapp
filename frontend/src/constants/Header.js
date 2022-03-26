import { Dimensions, Platform } from "react-native";
import Layout from "./Layout";

const SCREEN_HEIGHT = Layout.window.height;
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 88 : 64) : 64;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const HEADER_IMAGE_HEIGHT = Dimensions.get("screen").height * 0.35;
const MIN_HEADER_HEIGHT = 45;

export {
  SCREEN_HEIGHT,
  IS_IPHONE_X,
  STATUS_BAR_HEIGHT,
  HEADER_HEIGHT,
  NAV_BAR_HEIGHT,
  HEADER_IMAGE_HEIGHT,
  MIN_HEADER_HEIGHT,
};
