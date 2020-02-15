import React from "react";
import { View, Text, ScrollView } from "react-native";

export interface Props {}
const ScrollHorizontal = (props: React.PropsWithChildren<Props>) => {
  const { children } = props;
  return (
    <ScrollView horizontal>
      <View style={{ margin: 20, flexDirection: "row" }}>{children}</View>
    </ScrollView>
  );
};

export default ScrollHorizontal;
