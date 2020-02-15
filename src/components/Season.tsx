import React from 'react';
import { View, Text } from 'react-native';

export default function Season() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <View>
        <Text style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          1 Temporada
        </Text>
      </View>
      <View>
        <Text>
          Pontos:
          <Text style={{ color: '#4EA94B', fontWeight: 'bold' }}>10</Text>
        </Text>
      </View>
    </View>
  );
}
