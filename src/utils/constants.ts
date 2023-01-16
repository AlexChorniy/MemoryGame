import {LevelType, OptionType} from '../models/navigation';

export const DEFAULT_CARD_IMAGE = require('../assets/images/icons8-question-mark-48.png');
export const NTester_IMAGE = require('../assets/images/tileImages/01_Yara-NTester.png');
export const YaraBela_IMAGE = require('../assets/images/tileImages/03_YaraBela.png');
export const YaraTera_IMAGE = require('../assets/images/tileImages/02_YaraTera.png');
export const YaraVita_IMAGE = require('../assets/images/tileImages/04_YaraVita.png');
export const YaraVera_IMAGE = require('../assets/images/tileImages/05_YaraVera.png');
export const YaraRega_IMAGE = require('../assets/images/tileImages/06_YaraRega.png');
export const YaraMila_IMAGE = require('../assets/images/tileImages/07_YaraMila.png');
export const YaraLiva_IMAGE = require('../assets/images/tileImages/08_YaraLiva.png');
export const YaraPrideLogo_IMAGE = require('../assets/images/tileImages/09_YaraPrideLogo.png');

export const IMAGES_LIST: number[] = [
  NTester_IMAGE,
  YaraLiva_IMAGE,
  YaraMila_IMAGE,
  YaraLiva_IMAGE,
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
