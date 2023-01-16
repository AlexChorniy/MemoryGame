import {View} from 'react-native';
import React, {useState} from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';
import {DataType} from '../../models/game';

const GameComponent = ({route}: TProps): JSX.Element => {
  const option = route.params?.option;
  const [data] = useState<DataType[]>(workWithGame.getInitialData(option));

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent
          title={'New Game'}
          onPress={() => console.log('test')}
        />
      </View>
      <View style={styles.bottomBlock}>
        {data.map(({id, image}) => (
          <CardComponent
            key={id}
            image={image}
            onPress={() => console.log(id)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameComponent;
