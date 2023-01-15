import {LevelType, OptionType} from '../models/navigation';

type WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => number[];
};

export const workWithGame: WorkWithGameType = {
  getInitialData: (gameLevel: LevelType) => {
    const gameLevelMap: Record<LevelType, number> = {
      [OptionType.easy]: 8,
      [OptionType.medium]: 12,
      [OptionType.hard]: 16,
    };
    return [...Array(gameLevelMap[gameLevel]).keys()];
  },
};
