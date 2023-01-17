import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum OptionType {
  home = 'Home',
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Hard',
}

export enum OrientationType {
  portrait = 'PORTRAIT',
  landscape = 'LANDSCAPE',
}

export type LevelType = OptionType.hard | OptionType.medium | OptionType.easy;

export type RootStackParamList = {
  [OptionType.home]: undefined;
  [OptionType.easy]: {
    option: OptionType.easy;
  };
  [OptionType.medium]: {option: OptionType.medium};
  [OptionType.hard]: {option: OptionType.hard};
};

export type TProps = NativeStackScreenProps<RootStackParamList, LevelType>;
