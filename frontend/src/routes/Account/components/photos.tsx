import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PhotosComponent } from "../../../../types";
import Layout from "../../../constants/Layout";
import Colors from "../../../constants/Colors";

const WIDTH = Layout.window.width - 50;

const Photos: React.FC<PhotosComponent> = ({ images, title = "" }) => {
  const [selectedImage, setSelectedImage] = useState<any>({});

  const openImagePickerAsync = async () => {
    const options = {
      // maxHeight: 250,
      // maxWidth: 350,
      base64: true, //add this in the option to include base64 value in the response
    };

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync(options);
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({
      localUri: pickerResult.uri,
      base64: pickerResult.base64,
    });
  };

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      <TouchableOpacity
        style={styles.uploadImg}
        onPress={openImagePickerAsync}
        activeOpacity={0.6}
      >
        <View style={styles.container}>
          <AntDesign name="plus" size={20} color="#fff" />
        </View>
      </TouchableOpacity>
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

const styles = StyleSheet.create({
  uploadImg: {
    width: WIDTH / 3,
    height: 150,
    borderRadius: 7,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: "#ccc",
    backgroundColor: "#f1f1f1",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: Colors.black,
    borderRadius: 40,
  },
});
