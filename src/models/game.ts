import {LevelType} from './navigation';

export type DataType = {
  id: number;
  image?: string;
};

export type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => DataType[];
  getRandomData: (dataLength: number, patternLength: number) => number[];
};
