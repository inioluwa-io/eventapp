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

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const MyEvents: React.FC<Props> = ({ navigation }) => {
  return (
    <ContainerScrollView>
      <PaddedView>
        {[1, 2, 3, 4].map((data, idx) => (
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
              navigation.navigate("EventScreen", { id: data});
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
                Title
              </Text>
              <Text
                style={[
                  globalStyles.text,
                  { color: Colors.darkGrayText, fontSize: appValues.font.h4 },
                ]}
                numberOfLines={1}
              >
                Description
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </PaddedView>
    </ContainerScrollView>
  );
};

export default MyEvents;
