import {StyleSheet} from 'react-native';
import {fontSizeStandard, gridPx} from '../../utils/styleHelpers';
import {themes} from '../../assets/themes';

export const styles = StyleSheet.create({
  gameContainer: {
    height: '100%',
  },
  topBlock: {
    marginTop: gridPx(2),
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBlock: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: gridPx(0.75),
  },
  buttonTitle: {
    color: themes.grey,
    fontSize: fontSizeStandard(14),
    textTransform: 'uppercase',
  },
  winBlock: {
    fontSize: fontSizeStandard(10),
    textAlign: 'center',
    fontWeight: '500',
    color: themes.blue,
  },
});
