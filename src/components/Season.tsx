import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  actual: number;
  point: number;
}

export default function Season(props: Props) {
  const { actual, point } = props;
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
          {actual} Temporada
        </Text>
      </View>
      <View>
        <Text>
          Pontos:
          <Text style={{ color: '#4EA94B', fontWeight: 'bold' }}>{point}</Text>
        </Text>
      </View>
    </View>
  );
}
