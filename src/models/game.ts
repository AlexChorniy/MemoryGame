import {LevelType} from './navigation';

export type DataType = {
  id: number;
  image?: number;
  disabled?: boolean;
};
export type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => DataType[];
  getShuffleData: (dataLength: number, patternLength: number) => number[];
};
