import {useEffect, useState} from 'react';
import {IMAGES_LIST} from '../utils/constants';
import {OptionType, TProps} from '../models/navigation';
import {workWithGame} from '../utils/gameHelpers';
import {DataType} from '../models/game';

const {getInitialData, getShuffleData} = workWithGame;

export function useGame({route, navigation}: TProps): {
  isWinner: boolean;
  onReloadHandler: () => void;
  onPressHandler: (id: number) => void;
  cards: DataType[];
} {
  const option = route.params?.option;
  const initialData: DataType[] = getInitialData(option);

  const [cards, setCards] = useState(initialData);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matchCount, setMatchCount] = useState<number>(0);
  const [isWinner, setIsWinner] = useState<boolean>(false);
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

  useEffect(() => {
    if (matchCount === cards.length / 2) {
      const timer = setTimeout(() => {
        setIsWinner(true);
      }, 2000);

      const navTimer = setTimeout(() => {
        navigation.navigate(OptionType.home);
      }, 7000);

      return () => {
        clearTimeout(timer);
        clearTimeout(navTimer);
      };
    }
  }, [cards.length, matchCount, navigation]);

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

  return {onReloadHandler, onPressHandler, isWinner, cards};
}
