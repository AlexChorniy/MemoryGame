import {Text, View} from 'react-native';
import React from 'react';
import {TProps} from '../../../models/navigation';

const GameComponent = ({route}: TProps): JSX.Element => {
  return (
    <View>
      <Text>Game {route.params?.option}</Text>
    </View>
  );
};

export default GameComponent;
