import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';
import {DataType} from '../../models/game';
import {IMAGES_LIST, widthStyleHelper} from '../../utils/constants';

const {getInitialData, getShuffleData} = workWithGame;

const GameComponent = ({route}: TProps): JSX.Element => {
  const initialData: DataType[] = getInitialData(route.params?.option);
  const [cards, setCards] = useState(initialData);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [shuffle, setShuffle] = useState(
    getShuffleData(initialData.length, IMAGES_LIST.length),
  );

  useEffect(() => {
    setCards(prevState =>
      prevState.map((card, index) => ({
        id: card.id,
        uri: IMAGES_LIST[shuffle[index]],
        shuffleIndex: shuffle[index],
        disabled: false,
        isOpen: false,
      })),
    );
  }, [shuffle]);

  const onReloadHandler = () => {
    setCards(initialData);
    setOpenCards([]);
    setShuffle(getShuffleData(initialData.length, IMAGES_LIST.length));
  };

  const onPressHandler = (id: number) => {
    const firstIndex = openCards[0] - 1;
    const secondIndex = id - 1;
    const firstImageIndex = cards[openCards[0] - 1]?.shuffleIndex;
    const secondImageIndex = cards[id - 1]?.shuffleIndex;

    if (openCards.length < 1) {
      setOpenCards(prevState => [...prevState, id]);
      setCards(prevState =>
        prevState.map(card =>
          card.id === id ? {...card, isOpen: true} : card,
        ),
      );
    } else if (openCards.length < 2 && firstImageIndex !== secondImageIndex) {
      setTimeout(() => {
        setCards(prevState =>
          prevState.map(card =>
            [openCards[0], id].includes(card.id)
              ? {...card, isOpen: false}
              : card,
          ),
        );
      }, 2000);

      setOpenCards([]);

      setCards(prevState =>
        prevState.map(card =>
          [openCards[0], id].includes(card.id) ? {...card, isOpen: true} : card,
        ),
      );
    } else if (
      openCards.length < 2 &&
      firstImageIndex === secondImageIndex &&
      secondIndex !== firstIndex
    ) {
      setCards(prevState =>
        prevState.map(card =>
          [openCards[0], id].includes(card.id)
            ? {...card, isOpen: true, disabled: true}
            : card,
        ),
      );
      setOpenCards([]);
    }
  };

  return (
    <View style={styles.gameContainer}>
      <View style={styles.topBlock}>
        <ReloadComponent title={'New Game'} onPress={onReloadHandler} />
      </View>
      <View
        style={{
          ...styles.bottomBlock,
          width: widthStyleHelper[route?.params.option],
        }}>
        {cards.map(({id, uri, disabled, isOpen}) => (
          <CardComponent
            key={id}
            uri={uri}
            disabled={disabled}
            isOpen={isOpen}
            onPress={() => onPressHandler(id)}
          />
        ))}
      </View>
    </View>
  );
};

export default GameComponent;
