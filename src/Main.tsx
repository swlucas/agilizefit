import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Camera from './components/Camera';
import Classification from './components/Classification';
import Season from './components/Season';
import ScrollHorizontal from "./components/ScrollHorizontal";
import Camera from "./components/Camera";

const Main = () => {
  const [modaVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <Header />
      <Classification />
      <Season />
    </SafeAreaView>
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
