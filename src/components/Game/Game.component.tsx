import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';
import {DataType} from '../../models/game';
import {IMAGES_LIST} from '../../utils/constants';

const {getInitialData, getShuffleData} = workWithGame;

const GameComponent = ({route}: TProps): JSX.Element => {
  const option = route.params?.option;

  const initialData: DataType[] = getInitialData(option);
  const [cards, setCards] = useState(initialData);
  const [openCards, setOpenCards] = useState<DataType[]>([]);
  const [randomData, setRandomData] = useState(
    getShuffleData(initialData.length, IMAGES_LIST.length),
  );

  useEffect(() => {
    // setCards(prevState => prevState.map((card) => ));
    console.log(openCards);
  }, [openCards]);

  const onReloadHandler = () => {
    setCards(initialData);
    setOpenCards([]);
    setRandomData(getShuffleData(initialData.length, IMAGES_LIST.length));
  };

  const onPressHandler = (id: number) => {
    const randomNumber: number = randomData[id - 1];
    const getRandomImage = IMAGES_LIST[randomNumber];

    if (openCards.length <= 1) {
      setOpenCards(prevState => [...prevState, {id, image: getRandomImage}]);
      setCards(
        cards.map(card =>
          card.id === id ? {...card, image: getRandomImage} : card,
        ),
      );
    }
  };

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent title={'New Game'} onPress={onReloadHandler} />
      </View>
      <View style={styles.bottomBlock}>
        {cards.map(({id, image}) => (
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
