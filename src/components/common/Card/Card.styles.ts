import {StyleSheet} from 'react-native';
import {gridPx} from '../../../utils/styleHelpers';

export const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: gridPx(1.8),
    borderWidth: 1,
    width: gridPx(),
    height: gridPx(),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: gridPx(),
    height: gridPx(),
  },
});
