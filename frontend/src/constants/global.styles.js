import { StyleSheet } from "react-native";
import Colors from "./Colors";
import Layout from "./Layout";
import appValues from "./appValues";

export const SHADOW_CONFIG = {
  shadowOffset: {
    width: 1,
    height: 2,
  },
  shadowOpacity: 0.1,
  elevation: 3,
};

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    paddingHorizontal: 20,
    width: "100%",
    // paddingTop: 50,
    backgroundColor: "white",
  },
  paddingTopLg: {
    paddingTop: 40,
  },
  paddingTop: {
    paddingTop: 20,
  },
  paddingTopSm: {
    paddingTop: 10,
  },
  paddingBottomLg: {
    paddingBottom: 40,
  },
  paddingBottom: {
    paddingBottom: 20,
  },
  paddingBottomSm: {
    paddingBottom: 10,
  },
  marginLeftLg: {
    marginLeft: 40,
  },
  marginLeft: {
    marginLeft: 20,
  },
  marginLeftSm: {
    marginLeft: 10,
  },
  marginTopLg: {
    marginTop: 40,
  },
  marginTop: {
    marginTop: 20,
  },
  marginTopSm: {
    marginTop: 10,
  },
  marginBottomLg: {
    marginBottom: 40,
  },
  marginBottom: {
    marginBottom: 20,
  },
  marginBottomSm: {
    marginBottom: 10,
  },
  marginRightLg: {
    marginRight: 40,
  },
  marginRight: {
    marginRight: 20,
  },
  marginRightSm: {
    marginRight: 10,
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
  text: {
    fontFamily: "DMSans_400Regular",
    fontSize: appValues.fontSize,
  },
  boldText: {
    fontSize: appValues.font.h1,
    fontFamily: "Montserrat_800ExtraBold",
    lineHeight: appValues.font.h1 + 3,
  },
  semiBoldText: {
    fontSize: appValues.font.h2,
    fontFamily: "Montserrat_800ExtraBold",
    lineHeight: appValues.font.h2 + 3,
  },
  mediumText: {
    fontSize: appValues.font.h3,
    fontFamily: "Montserrat_800ExtraBold",
    lineHeight: appValues.font.h2 + 3,
  },
  titleWrap: {
    marginVertical: 20,
  },
  modalCard: {
    backgroundColor: Colors.white,
    borderRadius: 25,
  },
  formWrap: {
    flex: 1,
    marginTop: 10,
  },
  inputContainerSm: {
    marginVertical: 5,
  },
  inputContainer: {
    marginVertical: 10,
  },
  inputWrap: {
    backgroundColor: Colors.white,
    // marginBottom: 20,
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
    color: Colors.primary,
    fontWeight: "500",
  },
  blockButton: {
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 8,
  },
  blockButtonSm: {
    backgroundColor: Colors.black,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 7,
  },
  blockButtonOutlineSm: {
    padding: 11,
  },
  blockButtonOutline: {
    padding: 14,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "DMSans_500Medium",
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
  sectionTitle: {
    fontWeight: "700",
    fontSize: 17,
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
    width: Layout.window.width,
    height: Layout.window.height * 0.3,
    bottom: 0,
    zIndex: -1,
  },
});
