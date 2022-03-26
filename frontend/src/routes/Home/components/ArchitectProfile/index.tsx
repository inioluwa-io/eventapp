import React, { useState } from "react";
import { Text, View } from "react-native";
import { Avatar, Rating, Tab, TabView } from "react-native-elements";
import BlockButton from "../../../../components/BlockButton";
import { ContainerScrollView } from "../../../../components/ContainerView";
import PaddedView from "../../../../components/PaddedView";
import Colors from "../../../../constants/Colors";
import globalStyles from "../../../../constants/global.styles";
import png from "../../../../../assets/png";
import Photos from "../../../../components/Photos";
import Reviews from "../../../../components/Reviews";
import architects from "../../../../db/architects";
import Layout from "../../../../constants/Layout";
import Modal from "./Modal";
import { PageProps } from "../../../../../types";

const photosImg = [png.Arch1, png.Arch, png.Arch2, png.Arch3];

const ArchitectProfile: React.FC<PageProps> = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const WIDTH = Layout.window.width - 40;
  const [height, setHeight] = useState<number>(100);
  const [showModal, setShowModal] = useState<boolean>(false);

  const {
    params: { registration_numbers, src, location },
  } = route;

  return (
    <ContainerScrollView nestedScrollEnabled>
      <PaddedView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View>
            <Avatar
              title="SM"
              source={src}
              titleStyle={{ color: "#fff" }}
              containerStyle={{ backgroundColor: "#888" }}
              rounded
              size={70}
            />
          </View>
          <View style={[globalStyles.marginLeft]}>
            <View style={[{ flexWrap: "wrap", flexDirection: "row", flex: 1 }]}>
              <Text
                style={[
                  globalStyles.semiBoldText,
                  { flexShrink: 1, fontSize: 21 },
                ]}
              >
                {registration_numbers}
              </Text>
            </View>
            <View style={[{ flexWrap: "wrap", flexDirection: "row", flex: 1 }]}>
              <Text style={[globalStyles.text, { color: Colors.darkGray }]}>
                {location}
              </Text>
            </View>
            <View
              style={[
                globalStyles.marginTopSm,
                { flexDirection: "row", flex: 1 },
              ]}
            >
              <Rating readonly imageSize={20} />
              <Text
                style={[
                  globalStyles.text,
                  globalStyles.marginLeftSm,
                  { color: Colors.darkGray },
                ]}
              >
                (20 Reviews)
              </Text>
            </View>
          </View>
        </View>
        <View style={[globalStyles.marginTop]}>
          <Text style={[globalStyles.text]} numberOfLines={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            officia beatae omnis numquam magni, minus, eos, laudantium rerum nam
            alias blanditiis quisquam eius dolorum esse nisi maxime quia
            distinctio facere?
          </Text>
        </View>
        <View style={[globalStyles.marginTop]}>
          <BlockButton
            onPress={() =>
              navigation?.navigate("Messages", {
                name,
                src,
                defaultMessage: `Hello Arc. ${name}. I read your profile and I like your style of Architecture. Will you be willing help me design a 5 bedroom duplex in Aba?`,
              })
            }
          >
            Engage
          </BlockButton>
        </View>
      </PaddedView>
      <View>
        <PaddedView>
          <View>
            <Tab
              value={index}
              onChange={(e) => setIndex(e)}
              indicatorStyle={{
                backgroundColor: Colors.black,
                height: 3,
                borderRadius: 2,
              }}
            >
              <Tab.Item
                title="Photos"
                titleStyle={[
                  {
                    fontSize: 15,
                    color: Colors.black,
                    fontFamily: "Montserrat_600SemiBold",
                    textTransform: "none",
                  },
                ]}
                containerStyle={{ backgroundColor: "white" }}
              />
              <Tab.Item
                title="Reviews"
                titleStyle={{
                  fontSize: 15,
                  color: Colors.black,
                  fontFamily: "Montserrat_600SemiBold",
                  textTransform: "none",
                }}
                containerStyle={{ backgroundColor: "white" }}
              />
            </Tab>

            <TabView value={index} onChange={setIndex} animationType="timing">
              <TabView.Item
                style={[globalStyles.marginTop, { width: "100%" }]}
                onLayout={(event) =>
                  setHeight(
                    event.nativeEvent.layout.height + Layout.window.height
                  )
                }
              >
                <Photos images={photosImg} title="profile" />
              </TabView.Item>
              <TabView.Item
                style={[globalStyles.marginTop, { width: WIDTH }]}
                onLayout={(event) => {
                  //   alert("event.nativeEvent.layout.height");
                  setHeight(
                    event.nativeEvent.layout.height + Layout.window.height
                  );
                }}
              >
                <Reviews reviews={architects} title="profile" />
              </TabView.Item>
            </TabView>
          </View>
        </PaddedView>
      </View>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </ContainerScrollView>
  );
};
export default ArchitectProfile;
