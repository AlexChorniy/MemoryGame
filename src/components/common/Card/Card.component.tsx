import {Image, ImageSourcePropType, Pressable} from 'react-native';
import React from 'react';
import {styles} from './Card.styles';
import {DEFAULT_CARD_IMAGE} from '../../../utils/constants';

type TProps = {
  onPress: () => void;
  uri: ImageSourcePropType | undefined;
  disabled: boolean;
  isOpen: boolean;
};

const CardComponent = ({
  onPress,
  uri,
  disabled,
  isOpen,
}: TProps): JSX.Element => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.cardContainer}
      disabled={disabled}>
      <Image
        alt={'card image'}
        source={isOpen ? uri : DEFAULT_CARD_IMAGE}
        style={styles.cardImage}
      />
    </Pressable>
  );
};

export default CardComponent;
