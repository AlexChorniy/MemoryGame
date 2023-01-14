import {StyleSheet} from 'react-native';
import {themes} from '../../assets/themes';
import {fontSizeStandard} from '../../utils/styleHelpers';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: themes.lightGreen,
    height: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: fontSizeStandard(14),
    color: themes.blue,
  },
});
