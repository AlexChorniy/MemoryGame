import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';

const GameComponent = ({route}: TProps): JSX.Element => {
  const [data, setData] = useState<number[]>([]);
  const option = route.params?.option;

  useEffect(() => {
    setData(workWithGame.getInitialData(option));
  }, [option]);

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent
          title={'New Game'}
          onPress={() => console.log('test')}
        />
      </View>
      <View style={styles.bottomBlock}>
        {data.map(() => (
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
