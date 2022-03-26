import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { PhotosComponent } from "../../../../../types";
import Layout from "../../../../constants/Layout";

const Photos: React.FC<PhotosComponent> = ({ images }) => {
  const WIDTH = Layout.window.width - 50;
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {images.map((image, id) => (
        <Image
          key={image + `${id}`}
          source={image}
          style={{
            width: WIDTH / 2,
            height: 130,
            borderRadius: 7,
            marginRight: 10,
            marginBottom: 10,
          }}
        />
      ))}
    </View>
  );
};
export default Photos;
