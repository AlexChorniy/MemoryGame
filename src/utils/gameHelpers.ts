import {LevelType} from '../models/navigation';
import {gameCardsMap} from './constants';
import {DataType, WorkWithGameType} from '../models/game';

export const workWithGame: WorkWithGameType = {
  getInitialData(gameLevel: LevelType) {
    return [...Array(gameCardsMap[gameLevel]).keys()].map((_, index) => ({
      id: index + 1,
    }));
  },
  getRandomData(originalDataLength: number, patternDataLength: number) {
    let result: number[] = [];
    let uniqueRandomIndexes = new Set();

    // getting the first part of unique array of number which would be displayed
    while ([...uniqueRandomIndexes].length < originalDataLength / 2) {
      uniqueRandomIndexes.add(generateRandomInteger(patternDataLength));
    }

    // getting the second part of array with random duplicating
    (
      [...uniqueRandomIndexes].filter(item => item !== undefined) as number[]
    ).map(uniqueItem => {
      let firstUniqueIndex = 0;
      let secondUniqueIndex = 0;

      while (true) {
        firstUniqueIndex = generateRandomInteger(originalDataLength);
        secondUniqueIndex = generateRandomInteger(originalDataLength);
        if (
          firstUniqueIndex !== secondUniqueIndex &&
          !result[firstUniqueIndex] &&
          !result[secondUniqueIndex] &&
          result[firstUniqueIndex] !== 0 &&
          result[secondUniqueIndex] !== 0
        ) {
          result[firstUniqueIndex] = uniqueItem;
          result[secondUniqueIndex] = uniqueItem;
          break;
        }
      }
    });

    return result;
  },
  validateGameOptions: {
    validateOpenCardsAmount(data) {
      const currentData = [...data];
      let images: DataType[] = [];

      currentData.map(item => {
        if (item?.image || item.image === 0) {
          images.push(item);
        }
      });

      const lastImage = images[images.length - 1];

      return images.length <= 2
        ? currentData
        : currentData.map(item =>
            item.id === lastImage.id ? {id: item.id} : item,
          );
    },
  },
};

export const generateRandomInteger = (max: number) => {
  return Math.floor(Math.random() * max);
};
