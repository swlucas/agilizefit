import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  user: string;
  position: number;
  point: number;
}

export default function Classification(props: Props) {
  const { position, user, point } = props;
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
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{position}</Text>
      </View>
      <View>
        <Text>
          {user}, você tem{' '}
          <Text style={{ color: '#4EA94B', fontWeight: 'bold' }}>{point}</Text>{' '}
          pontos
        </Text>
      </View>
    </View>
  );
}
