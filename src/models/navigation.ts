import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum OptionType {
  home = 'Home',
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Hard',
}

export type RootStackParamList = {
  Home: undefined;
  Easy: {option: OptionType.easy};
  Medium: {option: OptionType.medium};
  Hard: {option: OptionType.hard};
};

export type TProps = NativeStackScreenProps<RootStackParamList, OptionType>;
