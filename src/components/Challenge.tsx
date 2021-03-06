import React from 'react';
import { View, Text } from 'react-native';
import ChallengeItem from './challengeItem';

export interface Props {
  onPress: (id: number) => void;
}
export default function(props: Props) {
  const { onPress } = props;
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
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
        <ChallengeItem onPress={(id: number) => onPress(id)} status={0} />
      </View>
    </View>
  );
}
