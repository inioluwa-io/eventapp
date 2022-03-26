import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
} from "react-navigation";
import OnBoardingWrapper from "./onBoardingWrapper";

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const maxPage = 1;

const OnBoardingScreen: React.FC<Props> = ({ navigation, ...props }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedState, setSelectedState] = useState<number | null>(null);

  const canGoNext = useCallback(() => {
    if (currentPage === 0 && selectedCategory === null) return false;
    if (currentPage === 1 && selectedState === null) return false;
    return currentPage <= maxPage;
  }, [currentPage, selectedCategory, selectedState]);

  const canGoPrevious = useCallback(() => {
    return currentPage > 0;
  }, [currentPage]);

  const handleGoNext = useCallback(() => {
    if (currentPage === 0) {
      if (selectedCategory !== null) {
        if (selectedCategory === 1) {
          if (canGoNext()) {
            navigation.navigate("Tabs");
          }
        } else if (selectedCategory === 0) {
          setCurrentPage((prev) => prev + 1);
        }
      }
    } else if (currentPage === 1) {
      if (canGoNext()) {
        navigation.navigate("Tabs");
      }
    }
  }, [canGoNext, setCurrentPage, currentPage, selectedCategory]);

  const handleGoPrev = useCallback(() => {
    if (canGoPrevious()) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [canGoPrevious, setCurrentPage]);

  const handleOnCategorySelect = (idx: number) => {
    setSelectedCategory(idx);
  };

  const handleOnStateSelect = (idx: number) => {
    setSelectedState(idx);
  };

  return (
    <OnBoardingWrapper
      onGoNext={handleGoNext}
      onGoPrev={handleGoPrev}
      navigation={navigation}
      canGoNext={canGoNext}
      currentPage={currentPage}
      selectedCategory={selectedCategory}
      canGoPrevious={canGoPrevious}
      onCategorySelect={handleOnCategorySelect}
      onStateSelect={handleOnStateSelect}
      selectedState={selectedState}
      {...props}
    />
  );
};

export default OnBoardingScreen;
