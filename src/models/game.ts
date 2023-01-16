import {LevelType} from './navigation';

export type DataType = {
  id: number;
  image?: string;
};

export type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => DataType[];
  getRandomData: <T>(dara: T[]) => number[];
};
