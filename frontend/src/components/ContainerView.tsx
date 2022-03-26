import React from "react";
import { ScrollViewProps, View, ViewProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export const ContainerScrollView: React.FC<ScrollViewProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={[{ flex: 1, backgroundColor: "#fff" }, style]}
      {...props}
    >
      {children}
    </ScrollView>
  );
};

const ContainerView: React.FC<ViewProps> = ({ style, children, ...props }) => {
  return (
    <View style={[{ flex: 1, backgroundColor: "#fff" }, style]} {...props}>
      {children}
    </View>
  );
};

export default ContainerView;
