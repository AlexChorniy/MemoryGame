import {Text, View} from 'react-native';
import React from 'react';
import {TProps} from '../../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../Reload';

const GameComponent = ({route}: TProps): JSX.Element => {
  const option = route.params?.option;
  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent
          title={'New Game'}
          onPress={() => console.log('test')}
        />
      </View>
      <Text>Game {option}</Text>
    </View>
  );
};

export default GameComponent;
