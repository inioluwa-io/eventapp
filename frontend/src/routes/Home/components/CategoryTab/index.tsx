import React, { useEffect, useState } from "react";
import { CategoryTabProps } from "../../../../../types";
import CategoryTabWrapper from "./categoryTabWrapper";

const CategoryTab: React.FC<CategoryTabProps> = ({ item, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (idx: number) => {
    setSelectedTab(idx);
  };

  useEffect(() => {
    if (typeof onTabChange === "function") {
      onTabChange(selectedTab);
    }
  }, [selectedTab]);

  return (
    <CategoryTabWrapper
      item={item}
      selectedTab={selectedTab}
      onTabChange={handleTabChange}
    />
  );
};
export default CategoryTab;
