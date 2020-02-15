import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Camera from "./components/Camera";
import ScrollHorizontal from "./components/ScrollHorizontal";

const Main = () => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Camera
        visible={modaVisible}
        onTakePhoto={() => console.log("XXXXXXX")}
        onRequestClose={() => setModalVisible(false)}
      />

      <ScrollHorizontal></ScrollHorizontal>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>Abrir câmera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
