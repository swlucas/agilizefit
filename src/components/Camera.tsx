import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";

const Camera = () => {
  return (
    <Modal visible>
      <View style={styles.container}></View>
    </Modal>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
