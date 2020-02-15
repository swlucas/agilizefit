import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "./components/Header";
import Classification from "./components/Classification";
import Season from "./components/Season";
import Challenge from "./components/Challenge";
import Camera from "./components/Camera";
import ScrollHorizontal from "./components/ScrollHorizontal";

const Main = () => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <Header />
        <Classification point={10} user={"neto"} position={3} />
        <Season actual={1} point={10} />
        <Camera
          visible={modaVisible}
          onTakePhoto={() => console.log("XXXXXXX")}
          onRequestClose={() => setModalVisible(false)}
        />

        <ScrollHorizontal data={[1, 2, 3, 4, 5, 6]} scrollToIndex={4}>
          <View
            style={{
              width: 300,
              height: 300,
              margin: 5,
              borderWidth: 1,
              borderColor: "#000"
            }}
          >
            <Challenge
              onPress={(id: number) => {
                console.log(id);
                setModalVisible(true);
              }}
            ></Challenge>
          </View>
        </ScrollHorizontal>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Abrir câmera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Main;
