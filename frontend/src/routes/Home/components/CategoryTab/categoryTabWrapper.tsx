import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CategoryTabWrapperProps } from "../../../../../types";
import { ContainerScrollView } from "../../../../components/ContainerView";
import appValues from "../../../../constants/appValues";
import Colors from "../../../../constants/Colors";
import globalStyles from "../../../../constants/global.styles";

const CategoryTabWrapper: React.FC<CategoryTabWrapperProps> = ({
  selectedTab,
  onTabChange,
  item,
}) => {
  return (
    <ContainerScrollView horizontal={true}>
      {item.map(({ icon, text }, id) => (
        <Pressable
        key ={text}
          onPress={() => {
            onTabChange(id);
          }}
          style={[
            styles.container,
            selectedTab === id && styles.selectedContainer,
          ]}
        >
          <View style={[{ marginRight: 6 }]}>{icon}</View>
          <Text
            style={[
              globalStyles.text,
              {
                fontSize: appValues.font.h4,
                fontFamily: "DMSans_500Medium",
              },
              selectedTab === id && styles.selectedText,
            ]}
          >
            {text}
          </Text>
        </Pressable>
      ))}
    </ContainerScrollView>
  );
};
export default CategoryTabWrapper;

const styles = StyleSheet.create({
  selectedText: { color: "#fff" },
  container: {
    flexDirection: "row",
    borderRadius: 20,
    height: 37,
    alignItems: "center",
    marginRight: 10,
    padding: 7,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
  },
  selectedContainer: {
    backgroundColor: Colors.black,
  },
});
