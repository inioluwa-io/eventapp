import React, { useState, useEffect } from "react";
import { darken, lighten } from "polished";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Avatar, Rating, Tab, TabView } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import BlockButton from "../../components/BlockButton";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";
import Layout from "../../constants/Layout";
import { PageProps } from "../../../types";
import axios from "../../lib/axios";

// const photosImg = [png.Arch1, png.Arch, png.Arch2, png.Arch3];

const markersCoords = [
  {
    description: "descriotuib",
    title: "title1",
    latlng: {
      latitude: 7.447513899967341,
      longitude: 3.9459327485966744,
    },
  },
  {
    description: "description2",
    title: "title2",
    latlng: {
      latitude: 7.437513899967345,
      longitude: 3.9459327485966744,
    },
  },
  {
    description: "description3",
    title: "title3",
    latlng: {
      latitude: 7.437513899967341,
      longitude: 3.9359327485966744,
    },
  },
  {
    description: "description4",
    title: "title4",
    latlng: {
      latitude: 7.43413899967341,
      longitude: 3.9409327485966744,
    },
  },
];

const Account: React.FC<PageProps> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const WIDTH = Layout.window.width - 40;
  const [height, setHeight] = useState<number>(100);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log(location);
      setRegion({
        longitude: location.coords?.longitude,
        latitude: location.coords?.latitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const onRegionChange = (coords: any) => {
    console.log(coords);
    setRegion(coords);
  };

  // let text = "Waiting..";
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   console.log(location);
  //   text = JSON.stringify(location);
  // }
  if (!location)
    return (
      <ContainerScrollView>
        <View>
          <Text>Loading</Text>
        </View>
      </ContainerScrollView>
    );

  return (
    <ContainerScrollView
      nestedScrollEnabled
      style={{
        backgroundColor: "transparent",
        marginTop: -20,
        position: "absolute",
      }}
    >
      {/* <Text>{text}</Text> */}
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={region}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={true}
          // onRegionChange={onRegionChange}
        >
          {markersCoords.map((marker: any, index) => (
            <Marker
              key={index}
              coordinate={marker.latlng}
              title={marker?.title}
              description={marker.description}
            />
          ))}
        </MapView>
      </View>
    </ContainerScrollView>
  );
};
export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
