import React from "react";
import { View, ViewProps } from "react-native";

const PaddedView: React.FC<ViewProps> = ({ style, children }) => {
  return <View style={[{ flex: 1, padding: 20 }, style]}>{children}</View>;
};

export default PaddedView;
