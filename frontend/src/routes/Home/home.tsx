import React, { useCallback, useEffect, useState } from "react";
import { Text, View, RefreshControl, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ContainerView, {
  ContainerScrollView,
} from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import Colors from "../../constants/Colors";
import globalStyles from "../../constants/global.styles";
// import architects from "../../db/architects";
import CategoryTab from "./components/CategoryTab";
import { useFilterPanel } from "../../lib/hooks";
import ProfileItem from "./components/ProfileItem";
import { PageProps } from "../../../types";
import axios from "axios";

const HomeScreen: React.FC<PageProps> = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [architects, setArchitects] = useState([]);
  const [_, setShowFilterPanel] = useFilterPanel();
  const [refreshing, setRefreshing] = useState(false);

  const getArchitects = useCallback(async () => {
    try {
      const response = await axios.get("archis");
      console.log(response.data);
      setArchitects(response.data.arch);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getArchitects();
  }, [getArchitects]);

  return (
    <ContainerScrollView
      refreshControl={
        <RefreshControl
          progressBackgroundColor="#eee"
          refreshing={refreshing}
          onRefresh={() => {
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
          }}
        />
      }
    >
      <PaddedView>
        <Text style={[globalStyles.boldText, globalStyles.paddingTop]}>
          Discover the most
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={[globalStyles.boldText]}>talented</Text>
          <Text style={[globalStyles.boldText, { color: Colors.primary }]}>
            {" "}
            Architects
          </Text>
        </View>
        <ContainerView
          style={[
            globalStyles.marginTop,
            { backgroundColor: "red", flex: 0.13 },
          ]}
        >
          <CategoryTab
            item={[
              {
                icon: (
                  <MaterialCommunityIcons
                    name="warehouse"
                    size={20}
                    color={selectedTab === 0 ? "#fff" : "black"}
                  />
                ),
                text: "Architect",
              },
              {
                icon: (
                  <Ionicons
                    name="ios-megaphone-outline"
                    size={20}
                    color={selectedTab === 1 ? "#fff" : "black"}
                  />
                ),
                text: "Advert",
              },
            ]}
            onTabChange={setSelectedTab}
          />
        </ContainerView>
        <View
          style={[globalStyles.marginTop, { flexDirection: "row-reverse" }]}
        >
          <View style={{}}>
            <Pressable
              onPress={() => setShowFilterPanel(true)}
              style={[
                {
                  padding: 7,
                  paddingHorizontal: 15,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: Colors.grey,
                  width: 80,
                },
              ]}
            >
              <Text style={[globalStyles.text, { textAlign: "center" }]}>
                Filter
              </Text>
            </Pressable>
          </View>
        </View>
        <ContainerView style={[globalStyles.marginTop]}>
          {architects &&
            architects?.map((item: any, id) => (
              <ProfileItem
                key={id}
                src={item.src}
                registration_numbers={`${item.registration_numbers}`}
                location={item.location}
                navigation={navigation}
              />
            ))}
        </ContainerView>
      </PaddedView>
    </ContainerScrollView>
  );
};

export default HomeScreen;
