import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { Input } from "react-native-elements";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { showToast } from "../../../utils";
import { useFilterPanel, useFilters } from "../../lib/hooks";
import Colors from "../../constants/Colors";
import { useCallback } from "react";
import { canSubmit } from "../Authentication/register";
import { createEvent } from "../../redux/actions";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

type FormDataProps = {
  title: string;
  description: string;
};

const AddEvent: React.FC<Props> = ({ navigation }) => {
  const [, setShowFilterPanel] = useFilterPanel();
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useFilters();
  const [formData, setFormData] = useState<FormDataProps>({
    title: "",
    description: "",
  });

  const handleSave = async () => {
    if (canSubmit(formData) && locationIsSet()) {
      setLoading(true);
      try {
        await createEvent({
          ...formData,
          long: location.longitude,
          lat: location.latitude,
        });
        setLocation({});
        setLoading(false);
        setTimeout(() => {
          showToast("success", "Successfully Saved");
          navigation.goBack();
        }, 700);
      } catch (e) {
        setLoading(false);
      }
    } else {
      showToast("error", "All fields are required");
    }
  };

  const locationIsSet = useCallback((): boolean => {
    return Object.keys(location).length > 0;
  }, [location]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerScrollView>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            <PaddedView style={[globalStyles.marginTop]}>
              <View style={[globalStyles.marginTop]}>
                <Input
                  placeholder="Title"
                  label={formData.title && "Title"}
                  labelStyle={[globalStyles.text]}
                  inputStyle={[globalStyles.text]}
                  containerStyle={globalStyles.inputContainerSm}
                  value={formData.title}
                  onChangeText={(val: string) =>
                    setFormData({ ...formData, title: val.trim() })
                  }
                />
                <Input
                  placeholder="Description"
                  label={formData.description && "Description"}
                  labelStyle={[globalStyles.text]}
                  inputStyle={[globalStyles.text]}
                  containerStyle={globalStyles.inputContainerSm}
                  value={formData.description}
                  onChangeText={(val: string) =>
                    setFormData({ ...formData, description: val.trim() })
                  }
                />
              </View>
              <View>
                <BlockButton
                  color={
                    locationIsSet() ? Colors.secondary : Colors.secondaryFade
                  }
                  onPress={() => setShowFilterPanel(true)}
                >
                  {locationIsSet() ? "Change Location" : "Choose Location"}
                </BlockButton>
              </View>
              <View style={[globalStyles.marginTopLg]}>
                <BlockButton loading={loading} onPress={handleSave}>
                  Create Event
                </BlockButton>
              </View>
            </PaddedView>
          </KeyboardAvoidingView>
        </ContainerScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

export default AddEvent;
