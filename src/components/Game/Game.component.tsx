import {View} from 'react-native';
import React from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';

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
      <View style={styles.bottomBlock}>
        {[...Array(8).keys()].map(() => (
          <CardComponent
            image={undefined}
            onPress={() => console.log(option)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameComponent;
