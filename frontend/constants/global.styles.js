import { StyleSheet } from "react-native";
import appValues from "./appValues";
import colors from "./colors";
// import { MIN_HEADER_HEIGHT } from "./Header";
// import Layout from "./Layout";

export const SHADOW_CONFIG = {
  shadowOffset: {
    width: 1,
    height: 2,
  },
  shadowOpacity: 0.1,
  elevation: 3,
};

export default StyleSheet.create({
  text: {
    color: "#222",
  },
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    // paddingTop: 50,
    backgroundColor: "white",
  },
  content: {
    paddingTop: 20,
  },
  title: {
    fontSize: 30,
    marginVertical: 5,
  },
  paragraph: {
    fontSize: 18,
    marginVertical: 5,
    lineHeight: 27,
  },
  centeredText: {
    textAlign: "center",
  },
  boldText: {
    fontWeight: "700",
  },
  semiBoldText: {
    fontWeight: "600",
  },
  titleWrap: {
    marginVertical: 20,
  },
  modalCard: {
    backgroundColor: colors.white,
    borderRadius: 25,
  },
  formWrap: {
    flex: 1,
    marginTop: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputWrap: {
    borderWidth: 1.5,
    borderColor: "#ccc",
    backgroundColor: "transparent",
    // marginBottom: 20,
    minHeight: 60,
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },

  floatingLabelStyle: {
    // backgroundColor: 'white',
    // fontSize: 20,
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    // top: -10,
  },
  touchable: {
    paddingVertical: 8,
  },
  touchableLabel: {
    color: colors.primary,
    fontWeight: "500",
  },
  blockButton: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 12,
    // flex: 1,
  },
  blockButtonSm: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
  },
  blockButtonXs: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    // flex: 1,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  fullModalStyles: {
    margin: 0,
    padding: 0,
  },

  fullModalContainer: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  showMoreLess: { color: "black", fontWeight: "600" },
  section: {
    marginVertical: 10,
  },
  sectionTitleWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowStart: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionTitle: {
    fontWeight: "700",
    fontSize: appValues.font.h3,
    marginBottom: 5,
  },
  sectionContentContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },

  // Custom Header Component
  headerContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    // height: MIN_HEADER_HEIGHT,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 25,
    paddingBottom: 20,
    // borderWidth: 1,
    justifyContent: "space-between",
  },
  footerIllustrationStyles: {
    position: "absolute",
    // width: Layout.window.width,
    // height: Layout.window.height * 0.3,
    bottom: 0,
    zIndex: -1,
  },
  H3: {},
});
