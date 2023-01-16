import {View} from 'react-native';
import React, {useState} from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';
import {DataType} from '../../models/game';
import {IMAGES_LIST} from '../../utils/constants';

const GameComponent = ({route}: TProps): JSX.Element => {
  const option = route.params?.option;
  const initialData: DataType[] = workWithGame.getInitialData(option);
  const [data, setData] = useState(initialData);
  const [randomData, setRandomData] = useState(
    workWithGame.getRandomData(initialData),
  );

  const onReloadHandler = () => {
    setData(initialData);
    setRandomData(workWithGame.getRandomData(initialData));
  };

  const onPressHandler = (id: number) => {
    const randomNumber: number = randomData[id - 1];
    const getRandomImage = IMAGES_LIST[randomNumber];

    setData(prev =>
      prev.map(item =>
        item.id === id ? {...item, image: getRandomImage} : item,
      ),
    );
  };

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent title={'New Game'} onPress={onReloadHandler} />
      </View>
      <View style={styles.bottomBlock}>
        {data.map(({id, image}) => (
          <CardComponent
            key={id}
            image={image}
            onPress={() => onPressHandler(id)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameComponent;
