import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import Classification from './components/Classification';
import Season from './components/Season';
import Challenge from './components/Challenge';
import Camera from './components/Camera';

const data = [{}];

const Main = () => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <>
      <SafeAreaView>
        <Header />
        <Classification point={10} user={'neto'} position={3} />
        <Season actual={1} point={10} />
        <Camera
          visible={modaVisible}
          onTakePhoto={() => console.log('XXXXXXX')}
          onRequestClose={() => setModalVisible(false)}
        />

        <ScrollHorizontal data={[1, 2, 3, 4, 5, 6]} scrollToIndex={4}>
          <View
            style={{
              width: 200,
              height: 200,
              backgroundColor: "red",
              margin: 5
            }}
          ></View>
        </ScrollHorizontal>
        <Challenge></Challenge>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Abrir câmera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Main;
