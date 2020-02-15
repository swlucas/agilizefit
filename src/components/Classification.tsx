import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  position: number;
}

export default function Classification(props: Props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          backgroundColor: '#4EA94B',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 20
        }}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>3</Text>
      </View>
      <View>
        <Text>
          Adriano, você tem{' '}
          <Text style={{ color: '#4EA94B', fontWeight: 'bold' }}>40</Text>
          Pontos
        </Text>
      </View>
    </View>
  );
}
