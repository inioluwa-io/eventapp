import React from "react";
import { View, Text } from "react-native";
import { Avatar, Rating } from "react-native-elements";
import { ReviewsComponent } from "../../types";
import appValues from "../constants/appValues";
import Colors from "../constants/Colors";
import globalStyles from "../constants/global.styles";
import Layout from "../constants/Layout";

const Reviews: React.FC<ReviewsComponent> = ({ reviews, title = "" }) => {
  return (
    <View style={{ width: "100%", flex: 1 }}>
      {reviews.map((review, id) => (
        <View
          style={[
            id !== 0 && globalStyles.paddingTop,
            globalStyles.paddingBottom,
            {
              flexDirection: "row",
              justifyContent: "flex-start",
              borderBottomWidth: 1,
              borderBottomColor: "#e1e1e1",
            },
          ]}
          key={id + "review" + title}
        >
          <View>
            <Avatar
              title="SM"
              source={review.src}
              titleStyle={{ color: "#fff" }}
              containerStyle={{ backgroundColor: "#888" }}
              rounded
              size={40}
            />
          </View>
          <View style={[globalStyles.marginLeft, { flex: 1 }]}>
            <View style={[{ flexWrap: "wrap", flexDirection: "row", flex: 1 }]}>
              <Text
                style={[
                  globalStyles.semiBoldText,
                  {
                    flexShrink: 1,
                    fontSize: appValues.fontSize,
                    lineHeight: appValues.fontSize + 2,
                  },
                ]}
              >
                Muhammed Buhari
              </Text>
            </View>
            <View
              style={[
                {
                  flexDirection: "row",
                  flex: 1,
                  marginTop: 5,
                },
              ]}
            >
              <Rating readonly imageSize={17} />
            </View>
            <View
              style={[
                {
                  marginTop: 15,
                  flexWrap: "wrap",
                  flexDirection: "row",
                  flex: 1,
                },
              ]}
            >
              <Text
                style={[
                  globalStyles.text,
                  {
                    flexDirection: "row",
                    flex: 1,
                    color: Colors.darkGray,
                  },
                ]}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
                asperiores tenetur amet illo dicta accusantium aspernatur
                excepturi, eveniet molestias! Voluptas quae sit accusantium
                corrupti perspiciatis dicta perferendis laudantium cumque porro!
              </Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
export default Reviews;
