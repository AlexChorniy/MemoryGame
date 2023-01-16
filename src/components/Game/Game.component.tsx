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
  const initialData: DataType[] = getInitialData(route.params?.option);
  const [cards, setCards] = useState(initialData);
  const [openCards, setOpenCards] = useState<DataType[]>([]);
  const [randomData, setRandomData] = useState(
    getShuffleData(initialData.length, IMAGES_LIST.length),
  );
  console.log('randomData', randomData);
  console.log('cards', cards);

  useEffect(() => {
    const firstCardImage = openCards[0]?.image;
    const secondCardImage = openCards[1]?.image;
    const firstCardId = openCards[0]?.id;
    const secondCardId = openCards[1]?.id;

    if (openCards.length === 2 && firstCardImage !== secondCardImage) {
      setOpenCards([]);
      setCards(prevState =>
        prevState.map(card =>
          firstCardImage === card.image || secondCardImage === card.image
            ? {
                id: card.id,
                disabled: card?.disabled || false,
              }
            : card,
        ),
      );
    } else if (openCards.length === 2 && firstCardImage === secondCardImage) {
      setCards(prevState =>
        prevState.map(card =>
          firstCardId === card.id || secondCardId === card.id
            ? {
                ...card,
                disabled: true,
              }
            : card,
        ),
      );
      setOpenCards([]);
    }
  }, [cards, openCards]);

  const onReloadHandler = () => {
    setCards(initialData);
    setOpenCards([]);
    setRandomData(getShuffleData(initialData.length, IMAGES_LIST.length));
  };

  const onPressHandler = (id: number) => {
    const randomNumber: number = randomData[id - 1];
    const getRandomImage = IMAGES_LIST[randomNumber];

    if (
      openCards.length <= 1 &&
      !openCards[0]?.disabled &&
      !openCards[1]?.disabled
    ) {
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
        {cards.map(({id, image, disabled = false}) => (
          <CardComponent
            key={id}
            image={image}
            disabled={disabled}
            onPress={() => onPressHandler(id)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameComponent;
