import {LevelType} from './navigation';

export type DataType = {
  id: number;
  image?: number;
};
export type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => DataType[];
  getRandomData: (dataLength: number, patternLength: number) => number[];
  validateGameOptions: {
    validateOpenCardsAmount: <T extends DataType>(
      data: T[],
    ) => (T | {id: number})[];
  };
};
