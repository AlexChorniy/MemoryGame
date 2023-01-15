import {StyleSheet} from 'react-native';
import {themes} from '../../../assets/themes';
import {fontSizeStandard, gridPx} from '../../../utils/styleHelpers';

export const styles = StyleSheet.create({
  homeContainer: {
    paddingTop: gridPx(10),
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeTitle: {
    textAlign: 'center',
    fontSize: fontSizeStandard(8),
    color: themes.grey,
  },
  homeButton: {
    color: themes.lightGreen,
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: gridPx(2),
    paddingTop: gridPx(2),
  },
});
