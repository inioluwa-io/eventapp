import React from "react";
import { View, Text } from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import { ContainerScrollView } from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import appValues from "../../constants/appValues";
import Colors from "../../constants/Colors";
import { getEvents } from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import BlockButton from "../../components/BlockButton";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MyEvents: React.FC<Props> = ({ navigation }) => {
  const [events, setEvents] = useState([]);
  const fetchMyEvents = async () => {
    try {
      const { data } = await getEvents();
      setEvents(data);
    } catch (e) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchMyEvents();
  }, []);

  return (
    <ContainerScrollView>
      <PaddedView>
        {events?.length < 1 ? (
          <View>
            <Text
              style={[
                globalStyles.text,
                {
                  fontSize: appValues.font.h3,
                  fontFamily: "DMSans_500Medium",
                  textAlign: "center",
                },
              ]}
            >
              You have no event yet
            </Text>
            <View style={[globalStyles.marginTop]}>
              <BlockButton
                onPress={() => navigation.navigate("AddEventScreen")}
              >
                Add Event
              </BlockButton>
            </View>
          </View>
        ) : (
          events.map((data: any, idx) => (
            <TouchableOpacity
              activeOpacity={0.6}
              style={[
                {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 10,
                },
              ]}
              onPress={() => {
                navigation.navigate("EventScreen", { id: data?.id });
              }}
              key={idx}
            >
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    globalStyles.text,
                    {
                      fontSize: appValues.font.h3,
                      fontFamily: "DMSans_500Medium",
                    },
                  ]}
                  numberOfLines={1}
                >
                  {data?.title}
                </Text>
                <Text
                  style={[
                    globalStyles.text,
                    { color: Colors.darkGrayText, fontSize: appValues.font.h4 },
                  ]}
                  numberOfLines={1}
                >
                  {data?.description}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </PaddedView>
    </ContainerScrollView>
  );
};

export default MyEvents;
