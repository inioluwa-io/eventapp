import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Animated,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Image } from "react-native-elements";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContainerView, {
  ContainerScrollView,
} from "../../components/ContainerView";
import { PageProps } from "../../../types";
import png from "../../../assets/png";
import PaddedView from "../../components/PaddedView";
import { showToast } from "../../../utils";
import { getAllEvents } from "../../redux/actions";

const photosImg = [png.Photo];
const { height, width } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

const Maps: React.FC<PageProps> = ({ navigation }) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [animation, setAnimation] = useState<any>();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });
  const [markersCoords, setMarkersCoords] = useState([]);

  type FetchEventsParams = {
    lat: number;
    long: number;
  };

  const fetchEvents = async (params: FetchEventsParams) => {
    try {
      const { data } = await getAllEvents(params);
      setMarkersCoords(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showToast("error", "Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      fetchEvents({
        long: location.coords?.longitude,
        lat: location.coords?.latitude,
      });
      setRegion({
        longitude: location.coords?.longitude,
        latitude: location.coords?.latitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  const onRegionChange = (coords: any) => {
    setRegion(coords);
  };

  useEffect(() => {
    setAnimation(new Animated.Value(0));
  }, []);

  const refreshEvents = () => {
    fetchEvents({
      long: location.coords?.longitude,
      lat: location.coords?.latitude,
    });
  };

  if (!location)
    return (
      <ContainerView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PaddedView
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator
            size={"large"}
            color={Platform.OS === "android" ? "#ccc" : undefined}
          />
        </PaddedView>
      </ContainerView>
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
      <View
        style={{
          marginHorizontal: 10,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 0,
          padding: 3,
          shadowOpacity: 0.1,
          shadowOffset: { height: 1, width: 0 },
          position: "absolute",
          right: 0,
          zIndex: 999,
          top: 90,
          // elevation: 9,
        }}
      >
        <TouchableOpacity
          onPress={refreshEvents}
          activeOpacity={0.6}
          style={{ padding: 5 }}
        >
          <Ionicons name="refresh" size={24} color={"black"} />
        </TouchableOpacity>
      </View>
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
                coordinate={{ latitude: marker.lat, longitude: marker.long }}
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
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => {
                navigation?.navigate("EventScreen", { id: marker?.id });
              }}
            >
              <Image
                source={photosImg[0]}
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
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>
      </View>
    </ContainerScrollView>
  );
};
export default Maps;

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
    bottom: 70,
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
    height: CARD_HEIGHT - 10,
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
