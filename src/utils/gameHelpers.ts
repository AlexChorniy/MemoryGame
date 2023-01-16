import {LevelType} from '../models/navigation';
import {gameCardsMap} from './constants';
import {WorkWithGameType} from '../models/game';

export const workWithGame: WorkWithGameType = {
  getInitialData(gameLevel: LevelType) {
    return [...Array(gameCardsMap[gameLevel]).keys()].map((_, index) => ({
      id: index + 1,
    }));
  },
  getShuffleData(originalDataLength: number, patternDataLength: number) {
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
};

export const generateRandomInteger = (max: number) => {
  return Math.floor(Math.random() * max);
};
