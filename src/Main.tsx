import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Camera from './components/Camera';
import Classification from './components/Classification';
import Season from './components/Season';

const Main = () => {
  return (
    <SafeAreaView>
      <Header />
      <Classification />
      <Season />
    </SafeAreaView>
  );
};

export default Main;
