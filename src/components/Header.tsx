import React from 'react';
import { View, Image } from 'react-native';
//@ts-ignore
import Logo from '../../assets/agzfit.png';

export default function Header() {
  return (
    <View
      style={{
        backgroundColor: '#F6F6F6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        marginBottom: 10
      }}
    >
      <Image source={Logo} resizeMode='center' />
    </View>
  );
}
