import {StyleSheet} from 'react-native';
import {themes} from '../../../assets/themes';
import {fontSizeStandard, gridPx} from '../../../utils/styleHelpers';

export const styles = StyleSheet.create({
  reloadContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: gridPx(),
    width: gridPx(10),
  },
  reloadTitle: {
    color: themes.grey,
    fontSize: fontSizeStandard(),
    textTransform: 'capitalize',
  },
});
