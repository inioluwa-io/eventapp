import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { logoutUser } from "../../utilities/actions/auth";
import { ScrollView } from "react-native-gesture-handler";
import ProfileCard from "./components/ProfileCard";
import PhotosSection from "./components/PhotosSection";
import architects from "../../data/architects";
import AppPaddedView from "../../components/UI/AppPaddedView";
import png from "../../assets/png";
import globalStyles from "../../constants/global.styles";
import Spacing from "../../components/Spacing";
import colors from "../../constants/colors";
import AppBackComp from "../../components/UI/AppBackComp";
import AppButton from "../../components/UI/AppButton";

function Profile(props) {
  const profile = architects[0];
  const navigation = useNavigation();

  const name = profile.firstName + " " + profile.lastName;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: colors.grey,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          position: "absolute",
          left: 10,
          top: 10,
          zIndex: 9999,
          elevation: 999,
        }}
      >
        <Ionicons name="arrow-back" size={25} />
      </TouchableOpacity>
      <ScrollView>
        <Image source={png.Arch} style={styles.imageBackground} />
        <ProfileCard
          name={name}
          src={profile.src}
          description="Lorem Ipsum is very architect about so many other things happening in the world of houses and cats on the bridge downtown to the beach."
        />
        <AppPaddedView></AppPaddedView>
        <PhotosSection images={profile.photos} />
        <View style={styles.locationSection}>
          <Text style={{ color: colors.darkGrayText }}>Location</Text>
          <View style={[globalStyles.sectionTitleWrap]}>
            <Text style={{ marginRight: 7 }}>{profile.location}</Text>
            <Text>Goto map</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { auth };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  locationSection: {
    marginHorizontal: 20,
    paddingVertical: 15,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  imageBackground: {
    //   flex:1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 220,
    //   resizeMode:"contain"
  },
});
