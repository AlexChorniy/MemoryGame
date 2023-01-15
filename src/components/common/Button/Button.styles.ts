import {StyleSheet} from 'react-native';
import {themes} from '../../../assets/themes';
import {fontSizeStandard, gridPx} from '../../../utils/styleHelpers';

export const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: gridPx(),
    width: gridPx(30),
    borderRadius: gridPx(0.5),
    borderWidth: 1,
  },
  buttonTitle: {
    color: themes.grey,
    fontSize: fontSizeStandard(14),
    textTransform: 'uppercase',
  },
});
