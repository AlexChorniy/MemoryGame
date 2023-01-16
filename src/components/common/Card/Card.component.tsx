import {Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from './Card.styles';
import {DEFAULT_CARD_IMAGE} from '../../../utils/constants';

type TProps = {
  onPress: () => void;
  image: number | undefined;
};

const CardComponent = ({onPress, image}: TProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={styles.cardContainer}>
      <Image
        alt={'card image'}
        source={image || DEFAULT_CARD_IMAGE}
        style={styles.cardImage}
      />
    </Pressable>
  );
};

export default CardComponent;
