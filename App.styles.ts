import {StyleSheet} from 'react-native';
import {themes} from './src/assets/themes';

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: themes.grey,
    height: '100%',
  },
  navigationContainer: {
    backgroundColor: themes.lightBlue,
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
