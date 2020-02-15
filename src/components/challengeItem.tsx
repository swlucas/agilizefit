import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
interface Props {
  onPress: (id: number) => void;
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
      onPress={() => onPress(1)}
      disabled={status === 0 && true}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <View style={{ padding: 5 }}>
          {status === 0 && <AntDesign name='lock' color='yellow' size={20} />}
          {status === 1 && <AntDesign name='unlock' color='yellow' size={20} />}
          {status === 2 && (
            <AntDesign name='checkcircle' color='#00A871' size={20} />
          )}
          {status === 3 && (
            <AntDesign name='closecircle' color='#F80303' size={20} />
          )}
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
