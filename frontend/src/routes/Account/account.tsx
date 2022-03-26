import React, { useState, useEffect } from "react";
import { darken, lighten } from "polished";
import { StyleSheet, View, Dimensions, Text, Animated } from "react-native";
import { Avatar, Image, Rating, Tab, TabView } from "react-native-elements";
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
import png from "../../../assets/png";

const photosImg = [png.Arch1, png.Arch, png.Arch2, png.Arch3];
const { height, width } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const markersCoords = [
  {
    description: "descriotuib",
    title: "title1",
    latLng: {
      latitude: 7.447513899967341,
      longitude: 3.9459327485966744,
    },
    image: photosImg[0],
  },
  {
    description: "description2",
    title: "title2",
    latLng: {
      latitude: 7.437513899967345,
      longitude: 3.9459327485966744,
    },
    image: photosImg[1],
  },
  {
    description: "description3",
    title: "title3",
    latLng: {
      latitude: 7.437513899967341,
      longitude: 3.9359327485966744,
    },
    image: photosImg[2],
  },
  {
    description: "description4",
    title: "title4",
    latLng: {
      latitude: 7.43413899967341,
      longitude: 3.9409327485966744,
    },
    image: photosImg[4],
  },
];

const Account: React.FC<PageProps> = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const WIDTH = Layout.window.width - 40;
  const [height, setHeight] = useState<number>(100);
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [animation, setAnimation] = useState<any>();
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

  useEffect(() => {
    setAnimation(new Animated.Value(0));
  }, []);

  if (!location)
    return (
      <ContainerScrollView>
        <View>
          <Text>Loading</Text>
        </View>
      </ContainerScrollView>
    );

  const interpolations = markersCoords.map((marker, idx) => {
    const inputRange = [
      (idx - 1) * CARD_WIDTH,
      idx * CARD_WIDTH,
      (idx + 1) * CARD_WIDTH,
    ];
    const scale = animation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: "clamp",
    });

    const opacity = animation.interpolate({
      inputRange,
      outputRange: [0.35, 1, 0.35],
      extrapolate: "clamp",
    });
    return { scale, opacity };
  });

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
          {markersCoords.map((marker: any, index) => {
            const scaleStyle = {
              transform: [{ scale: interpolations[index].scale }],
            };
            const opacityStyle = {
              opacity: interpolations[index].opacity,
            };
            return (
              <Marker
                key={index}
                coordinate={marker.latLng}
                title={marker?.title}
                description={marker.description}
              >
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View
                    style={[styles.ring, scaleStyle]}
                  ></Animated.View>
                  <Animated.View style={styles.marker}></Animated.View>
                </Animated.View>
              </Marker>
            );
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: animation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          {markersCoords.map((marker: any, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardTitle}>
                  {marker.title}
                </Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.description}
                </Text>
              </View>
            </View>
          ))}
        </Animated.ScrollView>
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
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    // position: "relative",
  },
  ring: {
    width: 27,
    height: 27,
    borderRadius: 27,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
  marker: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    // flex: 1,
    width: "100%",
    height: CARD_WIDTH - 15,
    // alignSelf: "center",
  },
  textContent: {
    // flex: 1,
  },
  cardTitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
});
