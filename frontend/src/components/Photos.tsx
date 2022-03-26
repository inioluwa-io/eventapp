import React from "react";
import { View } from "react-native";
import { Image } from "react-native-elements";
import { PhotosComponent } from "../../types";
import Layout from "../constants/Layout";

const Photos: React.FC<PhotosComponent> = ({ images, title = "" }) => {
  const WIDTH = Layout.window.width - 50;
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {images.map((image, id) => (
        <Image
          key={`${id}review ${title}`}
          source={image}
          style={{
            width: WIDTH / 3,
            height: 150,
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
