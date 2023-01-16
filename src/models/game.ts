import {LevelType} from './navigation';
import {ImageSourcePropType} from 'react-native';

export type DataType = {
  id: number;
  uri: ImageSourcePropType;
  disabled: boolean;
  shuffleIndex: number;
  isOpen: boolean;
};
export type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => DataType[];
  getShuffleData: (dataLength: number, patternLength: number) => number[];
};
