import {Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './Card.styles';
import {DEFAULT_CARD_IMAGE} from '../../../utils/constants';

type TProps = {
  onPress: () => void;
};

const CardComponent = ({onPress}: TProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <Image source={DEFAULT_CARD_IMAGE} />
    </Pressable>
  );
};

export default CardComponent;
