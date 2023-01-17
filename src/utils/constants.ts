import {LevelType, OptionType} from '../models/navigation';
import {ImageSourcePropType} from 'react-native';

export const DEFAULT_CARD_IMAGE = require('../assets/images/icons8-question-mark-48.png');
export const NTester_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/01_Yara-NTester.png');
export const YaraBela_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/03_YaraBela.png');
export const YaraTera_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/02_YaraTera.png');
export const YaraVita_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/04_YaraVita.png');
export const YaraVera_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/05_YaraVera.png');
export const YaraRega_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/06_YaraRega.png');
export const YaraMila_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/07_YaraMila.png');
export const YaraLiva_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/08_YaraLiva.png');
export const YaraPrideLogo_IMAGE: ImageSourcePropType = require('../assets/images/tileImages/09_YaraPrideLogo.png');

export const IMAGES_LIST: ImageSourcePropType[] = [
  NTester_IMAGE,
  YaraLiva_IMAGE,
  YaraMila_IMAGE,
  YaraRega_IMAGE,
  YaraBela_IMAGE,
  YaraTera_IMAGE,
  YaraVita_IMAGE,
  YaraVera_IMAGE,
];

export const gameCardsMap: Record<LevelType, number> = {
  [OptionType.easy]: 8,
  [OptionType.medium]: 12,
  [OptionType.hard]: 16,
};

export const widthStyleHelper: Record<LevelType, string> = {
  [OptionType.easy]: '50%',
  [OptionType.medium]: '60%',
  [OptionType.hard]: '80%',
};
