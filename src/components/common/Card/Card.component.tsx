import {Animated, Image, ImageSourcePropType, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
  const [open, setOpen] = useState<boolean>();
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 2100,
      useNativeDriver: true,
    }).start();
  }, [rotateAnim, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(isOpen);
    }, 670);

    return () => clearTimeout(timer);
  }, [isOpen, open]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotateY: rotate,
          },
        ],
      }}>
      <Pressable
        onPress={onPress}
        style={{...styles.cardContainer}}
        disabled={disabled}>
        <Image
          alt={'card image'}
          source={open ? uri : DEFAULT_CARD_IMAGE}
          style={styles.cardImage}
        />
      </Pressable>
    </Animated.View>
  );
};

export default CardComponent;
