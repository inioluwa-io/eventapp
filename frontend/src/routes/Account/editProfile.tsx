import React, { useState } from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Avatar } from "react-native-elements";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { useToggle } from "../../lib/hooks";
import png from "../../../assets/png";
import { TouchableOpacity } from "react-native-gesture-handler";
import { showToast } from "../../../utils";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const EditProfile: React.FC<Props> = ({ navigation }) => {
  const [showPassword, setShowPassword] = useToggle(true);
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

  const handleSave = () => {
    showToast("success", undefined, "Successfully Saved", "top");
    navigation.goBack();
  };

  return (
    <ContainerScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <PaddedView style={[globalStyles.marginTop]}>
          <View>
            <TouchableOpacity
              style={{ position: "relative", width: 70 }}
              onPress={openImagePickerAsync}
            >
              <Avatar
                title="SM"
                source={
                  selectedImage.localUri
                    ? { uri: selectedImage.localUri }
                    : png.Photo2
                }
                titleStyle={{ color: "#fff" }}
                containerStyle={{ backgroundColor: "#888" }}
                rounded
                size={70}
              />
              <View style={styles.editBtn}>
                <MaterialIcons name="add-a-photo" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View style={[globalStyles.marginTop]}>
            <Input
              placeholder="First name"
              label="First name"
              defaultValue="Muhammed"
              labelStyle={[globalStyles.text]}
              inputStyle={[globalStyles.text]}
              containerStyle={globalStyles.inputContainerSm}
            />
            <Input
              label="Last name"
              placeholder="Last name"
              defaultValue="Buhari"
              labelStyle={[globalStyles.text]}
              inputStyle={[globalStyles.text]}
              containerStyle={globalStyles.inputContainerSm}
            />
            <Input
              label="Email address"
              placeholder="Email address"
              keyboardType="email-address"
              defaultValue="Muhammed.buhari@ass.com"
              labelStyle={[globalStyles.text]}
              inputStyle={[globalStyles.text]}
              containerStyle={[globalStyles.inputContainerSm]}
            />
          </View>
          <View style={[globalStyles.marginTop]}>
            <BlockButton onPress={handleSave}>Save</BlockButton>
          </View>
        </PaddedView>
      </KeyboardAvoidingView>
    </ContainerScrollView>
  );
};

const styles = StyleSheet.create({
  editBtn: {
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "#00000088",
    borderRadius: 50,
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default EditProfile;
