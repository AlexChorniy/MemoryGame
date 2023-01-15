import {StyleSheet} from 'react-native';
import {fontSizeStandard} from '../../../utils/styleHelpers';
import {themes} from '../../../assets/themes';

export const styles = StyleSheet.create({
  gameContainer: {
    // backgroundColor: themes.lightBlue,
    height: '100%',
  },
  topBlock: {
    height: '20%',
    // backgroundColor: 'green',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: themes.grey,
    fontSize: fontSizeStandard(14),
    textTransform: 'uppercase',
  },
});
