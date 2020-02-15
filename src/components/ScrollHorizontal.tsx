import React from "react";
import { View, FlatList, ScrollView } from "react-native";

export interface Props {
  data: Array<any>;
  scrollToIndex: number;
}
const ScrollHorizontal = (props: React.PropsWithChildren<Props>) => {
  const { children, data, scrollToIndex } = props;
  return (
    <FlatList
      keyExtractor={(_: object, index: number) => index.toString()}
      horizontal
      data={data}
      renderItem={() => <>{children}</>}
      initialScrollIndex={scrollToIndex}
    />
  );
};

export default ScrollHorizontal;
