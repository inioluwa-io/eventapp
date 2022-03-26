import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { lighten } from "polished";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import BlockButton from "../../components/BlockButton";
import ContainerView, {
  ContainerScrollView,
} from "../../components/ContainerView";
import PaddedView from "../../components/PaddedView";
import globalStyles from "../../constants/global.styles";
import Layout from "../../constants/Layout";
import { OnBoardingWrapperProps } from "../../../types";
import Colors from "../../constants/Colors";
import CategoryButton from "./categoryButton";
import states from "../../db/states";

const OnBoardingWrapper: React.FC<OnBoardingWrapperProps> = ({
  canGoPrevious,
  onGoNext,
  onGoPrev,
  canGoNext,
  currentPage,
  onCategorySelect,
  selectedCategory,
  selectedState,
  onStateSelect,
}) => {
  const refs = useRef<any>();

  useEffect(() => {
    requestAnimationFrame(() => refs.current?.setPage(currentPage));
  }, [currentPage]);
  
  return (
    <ContainerView>
      <SafeAreaView style={{ flex: 1 }}>
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          scrollEnabled={false}
          ref={refs}
        >
          <ContainerView style={[globalStyles.paddingTop]} key="1">
            <PaddedView>
              <Text style={[globalStyles.semiBoldText]}>
                What are you looking for?
              </Text>
              <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
                Connect with you dream architect.
              </Text>
              <ContainerView
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <View style={[globalStyles.marginRightSm]}>
                  <CategoryButton
                    text="Architect"
                    color={Colors.primary}
                    id={0}
                    selectedCategory={selectedCategory}
                    onCategorySelect={onCategorySelect}
                    icon={
                      <View style={[globalStyles.marginBottomLg]}>
                        <MaterialCommunityIcons
                          name="warehouse"
                          size={40}
                          color="black"
                        />
                      </View>
                    }
                  />
                </View>
                <View style={[globalStyles.marginRightSm]}>
                  <CategoryButton
                    text="Materials"
                    color={Colors.secondary}
                    id={1}
                    selectedCategory={selectedCategory}
                    onCategorySelect={onCategorySelect}
                    icon={
                      <View style={[globalStyles.marginBottomLg]}>
                        <Ionicons
                          name="ios-megaphone-outline"
                          size={40}
                          color="black"
                        />
                      </View>
                    }
                  />
                </View>
              </ContainerView>
            </PaddedView>
          </ContainerView>
          <ContainerScrollView key="2">
            <PaddedView style={[globalStyles.marginTop]}>
              <Text style={[globalStyles.semiBoldText]}>
                Where would you like to search?
              </Text>
              <Text style={[globalStyles.marginTopSm, globalStyles.text]}>
                Connect with you dream architect in a state.
              </Text>
              <ContainerView
                style={[
                  globalStyles.marginTopLg,
                  {
                    flexWrap: "wrap",
                    flexDirection: "row",
                  },
                ]}
              >
                {states.map((state, id) => (
                  <View
                    key={state}
                    style={[
                      id % 2 === 0 && globalStyles.marginRightSm,
                      globalStyles.marginBottomSm,
                    ]}
                  >
                    <CategoryButton
                      text={state}
                      color={lighten(0.1, Colors.primary)}
                      id={id}
                      selectedCategory={selectedState}
                      style={{
                        height: 80,
                        width: Layout.window.width / 2 - 25,
                      }}
                      textStyle={[globalStyles.text, { textAlign: "center" }]}
                      onCategorySelect={onStateSelect}
                    />
                  </View>
                ))}
              </ContainerView>
            </PaddedView>
          </ContainerScrollView>
        </PagerView>
      </SafeAreaView>

      <PaddedView style={{ flex: 0, paddingTop: 0 }}>
        <View style={[globalStyles.marginTop, { flexDirection: "row" }]}>
          <View style={[globalStyles.marginRightSm, { flex: 1 }]}>
            {canGoPrevious() && (
              <BlockButton outline onPress={onGoPrev}>
                Previous
              </BlockButton>
            )}
          </View>
          <View style={{ flex: 1 }}>
            <BlockButton
              color={canGoNext() ? undefined : lighten(0.3, Colors.black)}
              onPress={onGoNext}
            >
              Next
            </BlockButton>
          </View>
        </View>
      </PaddedView>
    </ContainerView>
  );
};

export default OnBoardingWrapper;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  categoryButton: {
    position: "relative",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    height: 200,
    width: Layout.window.width / 2 - 50,
    borderRadius: 10,
    backgroundColor: Colors.primary,
  },
  categoryButtonSelected: {},
  checkIcon: {
    position: "absolute",
    right: -15,
    top: -15,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 1.5,
    borderColor: Colors.success,
  },
});
