import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Dimensions,
  ActivityIndicator,
  Platform,
  Image,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { EvilIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import globalStyles from "../../constants/global.styles";
import { useFilterPanel, useFilters } from "../../lib/hooks";
import Colors from "../../constants/Colors";
import ContainerView from "../ContainerView";
import BlockButton from "../BlockButton";
import PaddedView from "../PaddedView";
import { SwipeablePanel, LARGE_PANEL_CONTENT_HEIGHT } from "rn-swipeable-panel";
import { showToast } from "../../../utils";
import png from "../../../assets/png";

const FilterPanel: React.FC = () => {
  const { marker } = png;
  const [showFilterPanel, setShowFilterPanel] = useFilterPanel();
  const [filters, setFilters] = useFilters();
  const [location, setLocation] = useState<any>(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0421,
    longitudeDelta: 0.0421,
  });
  const [, setCurrentPage] = useState(0);
  const [panelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });

  const locationIsSet = useCallback((): boolean => {
    return Object.keys(filters).length > 0;
  }, [filters]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showToast("error", "Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion(
        locationIsSet()
          ? filters
          : {
              longitude: location.coords?.longitude,
              latitude: location.coords?.latitude,
              latitudeDelta: 0.0421,
              longitudeDelta: 0.0421,
            }
      );
    })();
  }, [locationIsSet]);

  const closePanel = () => {
    setCurrentPage(0);
    setShowFilterPanel(false);
  };

  const onRegionChange = (val: any) => {
    setRegion(val);
  };

  return (
    <SwipeablePanel
      {...panelProps}
      isActive={showFilterPanel}
      scrollViewProps={{
        bounces: false,
      }}
    >
      <ContainerView
        style={{
          height: LARGE_PANEL_CONTENT_HEIGHT,
        }}
      >
        <View style={styles.header}>
          <Text
            style={[
              globalStyles.text,
              {
                fontFamily: "DMSans_500Medium",
              },
            ]}
          >
            Choose location
          </Text>
          <Pressable style={styles.closeButton} onPress={closePanel}>
            <EvilIcons name="close" size={27} color="black" />
          </Pressable>
        </View>
        <ContainerView style={styles.content}>
          {!location ? (
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
          ) : (
            <ContainerView>
              <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
                style={styles.map}
                showsUserLocation={true}
                showsMyLocationButton={true}
                followsUserLocation={true}
                onRegionChange={onRegionChange}
              ></MapView>
              <View style={styles.markerFixed}>
                <Image style={styles.marker} source={marker} />
              </View>
            </ContainerView>
          )}
        </ContainerView>
        <PaddedView
          style={{
            flex: 0,
            borderTopWidth: 1,
            borderTopColor: Colors.grey,
          }}
        >
          <BlockButton
            onPress={() => {
              setFilters(region);
              closePanel();
            }}
          >
            Save
          </BlockButton>
        </PaddedView>
      </ContainerView>
    </SwipeablePanel>
  );
};
export default FilterPanel;

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    right: 10,
    padding: 7,
  },
  back: {
    position: "absolute",
    left: 0,
    padding: 7,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 10,
    paddingVertical: 15,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
  content: {
    backgroundColor: Colors.milk,
  },
  listContainer: {
    padding: 20,
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    backgroundColor: Colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pagerView: {
    flex: 1,
    height: LARGE_PANEL_CONTENT_HEIGHT - 145,
  },
  unCheckedIcon: {
    height: 24,
    width: 24,
    margin: 4,
    marginHorizontal: 3,
    borderColor: Colors.black,
    borderRadius: 3,
    borderWidth: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 270,
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  region: {
    color: "#fff",
    lineHeight: 20,
    margin: 20,
  },
});
