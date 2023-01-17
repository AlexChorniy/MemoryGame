import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OrientationType, TProps} from '../../models/navigation';
import {styles} from './Game.styles';
import ReloadComponent from '../common/Reload';
import CardComponent from '../common/Card';
import {workWithGame} from '../../utils/gameHelpers';
import {DataType} from '../../models/game';
import {IMAGES_LIST, widthStyleHelper} from '../../utils/constants';
import {useOrientation} from '../../hooks/useDimensions';
import {gridPx} from '../../utils/styleHelpers';

const {getInitialData, getShuffleData} = workWithGame;

const GameComponent = ({route}: TProps): JSX.Element => {
  const option = route.params?.option;
  const initialData: DataType[] = getInitialData(option);
  const [cards, setCards] = useState(initialData);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchCount, setMatchCount] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState(
    getShuffleData(initialData.length, IMAGES_LIST.length),
  );

  const {orientation} = useOrientation();

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

  useEffect(() => {
    if (matchCount === cards.length / 2) {
      const timer = setTimeout(() => {
        setIsWinner(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [cards.length, matchCount]);

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
      setMatchCount(prevState => prevState + 1);
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
          width:
            orientation === OrientationType.landscape
              ? '40%'
              : widthStyleHelper[route?.params.option],
          marginTop:
            orientation === OrientationType.landscape ? gridPx(5) : gridPx(2),
        }}>
        {isWinner ? (
          <Text style={styles.winBlock}>Congratulation You Win!!!</Text>
        ) : (
          cards.map(({id, uri, disabled, isOpen}) => (
            <CardComponent
              key={id}
              uri={uri}
              disabled={disabled}
              isOpen={isOpen}
              onPress={() => onPressHandler(id)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default GameComponent;
