import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
interface Props {
  onPress: () => void;
  status: number;
}

export default function item(props: Props) {
  const { onPress, status } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: status === 1 ? '#FAFEC1' : '#fff',
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor:
          status === 2 ? '#00A871' : status === 3 ? '#F80303' : '#fff'
      }}
      onPress={() => onPress}
      disabled={status === 0 && true}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View>
          {status === 0 && <AntDesign name='lock' />}
          {status === 1 && <AntDesign name='unlock' />}
          {status === 2 && <AntDesign name='checkcircle' />}
          {status === 3 && <AntDesign name='closecircle' />}
        </View>
        <View>
          <Text>Treino</Text>
        </View>
      </View>
      <View>
        <Text>10</Text>
      </View>
    </TouchableOpacity>
  );
}
