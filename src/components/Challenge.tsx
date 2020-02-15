import React from 'react';
import { View, Text } from 'react-native';
import ChallengeItem from './challengeItem';

export default function() {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <View>
          <Text>Dia 1</Text>
        </View>
        <View>
          <Text>10</Text>
        </View>
      </View>
      <View>
        <ChallengeItem />
      </View>
    </View>
  );
}
