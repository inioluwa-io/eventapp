import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import globalStyles from "../../../constants/global.styles";
import colors from "../../../constants/colors";

const PhotosSection = ({ images }) => {
  return (
    <View style={[globalStyles.rowStart, styles.container]}>
      {images.map((image, id) => (
        <View style={styles.imageContainer} key={id}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
      <View style={styles.viewMore}>
        <Text
          style={{
            color: "#fff",
          }}
        >
          6+
        </Text>
      </View>
    </View>
  );
};

export default PhotosSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 30,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    position: "relative",
  },
  imageContainer: { marginRight: 10 },
  image: {
    width: Dimensions.get("window").width / 4 - 22,
    height: Dimensions.get("window").width / 4 - 22,
    backgroundColor: colors.darkGray,
    resizeMode: "contain",
  },
  viewMore: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    position: "absolute",
    borderRadius: 5,
  },
});
