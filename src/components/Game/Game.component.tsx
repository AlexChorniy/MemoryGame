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
  const {
    getInitialData,
    getRandomData,
    validateGameOptions: {validateOpenCardsAmount},
  } = workWithGame;
  const initialData: DataType[] = getInitialData(option);
  const [data, setData] = useState(initialData);
  const [randomData, setRandomData] = useState(
    getRandomData(initialData.length, IMAGES_LIST.length),
  );

  const onReloadHandler = () => {
    setData(initialData);
    setRandomData(getRandomData(initialData.length, IMAGES_LIST.length));
  };

  const onPressHandler = (id: number) => {
    const randomNumber: number = randomData[id - 1];
    const getRandomImage = IMAGES_LIST[randomNumber];

    const dataWithImage = data.map(item =>
      item.id === id ? {...item, image: getRandomImage} : item,
    );

    setData(validateOpenCardsAmount(dataWithImage));
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
