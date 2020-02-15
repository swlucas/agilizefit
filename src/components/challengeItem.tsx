import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
interface Props {
  onPress: () => void;
}

export default function item(props: Props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#FAFEC1',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <FontAwesome name='unlock' />
        <Text>Treino</Text>
      </View>
      <View>
        <Text>10</Text>
      </View>
    </TouchableOpacity>
  );
}