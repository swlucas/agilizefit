import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "./components/Header";
import Classification from "./components/Classification";
import Season from "./components/Season";
import ScrollHorizontal from "./components/ScrollHorizontal";
import Camera from "./components/Camera";

const Main = () => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <Header />
        <Classification />
        <Season />
        <Camera
          visible={modaVisible}
          onTakePhoto={() => console.log("XXXXXXX")}
          onRequestClose={() => setModalVisible(false)}
        />
        <ScrollHorizontal></ScrollHorizontal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Abrir câmera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Main;
