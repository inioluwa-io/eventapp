import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";
import appValues from "../../constants/appValues";
import globalStyles from "../../constants/global.styles";
import { useFilterPanel } from "../../lib/hooks";
import Colors from "../../constants/Colors";
import ContainerView, { ContainerScrollView } from "../ContainerView";
import BlockButton from "../BlockButton";
import PaddedView from "../PaddedView";
import PagerView from "react-native-pager-view";
import { SwipeablePanel, LARGE_PANEL_CONTENT_HEIGHT } from "rn-swipeable-panel";
import states from "../../db/states";
import { ScrollView } from "react-native-gesture-handler";

const FilterPanel: React.FC = () => {
  const refs = useRef<any>();
  const [showFilterPanel, setShowFilterPanel] = useFilterPanel();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [checkedStateHash, setCheckedStateHash] = useState<{
    [key: number]: boolean;
  }>({});
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
  });

  const openPanel = () => {
    setShowFilterPanel(true);
  };

  const closePanel = () => {
    setCurrentPage(0);
    setShowFilterPanel(false);
  };

  useEffect(() => {
    requestAnimationFrame(() => refs.current?.setPage(currentPage));
  }, [currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(1);
  };

  const getTitle = useCallback(() => {
    switch (currentPage) {
      case 1: {
        return "Back";
      }
      default: {
        return "Filter";
      }
    }
  }, [currentPage]);

  const getSelectedStateCount = useCallback(() => {
    return Object.values(checkedStateHash).filter((val) => val).length;
  }, [checkedStateHash]);

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
          {currentPage !== 0 && (
            <Pressable style={styles.back} onPress={handlePrevPage}>
              <EvilIcons name="chevron-left" size={40} color={Colors.black} />
            </Pressable>
          )}
          <Text
            style={[
              globalStyles.text,
              {
                fontFamily: "DMSans_500Medium",
              },
            ]}
          >
            {getTitle()}
          </Text>
          <Pressable style={styles.closeButton} onPress={closePanel}>
            <EvilIcons name="close" size={27} color="black" />
          </Pressable>
        </View>
        <ContainerScrollView style={styles.content}>
          <TouchableWithoutFeedback>
            <SafeAreaView style={{ flex: 1 }}>
              <PagerView
                style={styles.pagerView}
                scrollEnabled={false}
                initialPage={currentPage}
                ref={refs}
              >
                <View key={1}>
                  <PaddedView
                    style={[
                      {
                        paddingVertical: 17,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.grey,
                        flex: 0,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        {
                          fontFamily: "DMSans_500Medium",
                          fontSize: appValues.font.h3,
                        },
                      ]}
                    >
                      Choose State
                    </Text>
                  </PaddedView>
                  <Pressable
                    style={styles.listContainer}
                    onPress={handleNextPage}
                  >
                    <View>
                      <Text style={[globalStyles.text]}>
                        {getSelectedStateCount()} Selected
                      </Text>
                    </View>
                    <View style={{ marginRight: -10 }}>
                      <EvilIcons
                        name="chevron-right"
                        size={40}
                        color={Colors.black}
                      />
                    </View>
                  </Pressable>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} key={2}>
                  {states.map((name, id) => (
                    <Pressable
                      key={name}
                      style={[styles.listContainer, { paddingVertical: 0 }]}
                      onPress={handleNextPage}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View>
                          <CheckBox
                            iconType="ionicon"
                            checkedIcon="ios-checkbox"
                            uncheckedIcon={
                              <View style={styles.unCheckedIcon} />
                            }
                            checkedColor={Colors.black}
                            checked={checkedStateHash[id]}
                            size={30}
                            onPress={() => {
                              setCheckedStateHash({
                                ...checkedStateHash,
                                [id]: !checkedStateHash[id],
                              });
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                              }, 1800);
                            }}
                            style={{ width: 30, height: 30 }}
                            wrapperStyle={{ marginLeft: -20, marginRight: -10 }}
                          />
                        </View>
                        <Text style={[globalStyles.text]}>{name}</Text>
                      </View>
                    </Pressable>
                  ))}
                </ScrollView>
              </PagerView>
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ContainerScrollView>
        <PaddedView
          style={{
            flex: 0,
            borderTopWidth: 1,
            borderTopColor: Colors.grey,
          }}
        >
          <BlockButton loading={loading}>Apply Filter</BlockButton>
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
});
