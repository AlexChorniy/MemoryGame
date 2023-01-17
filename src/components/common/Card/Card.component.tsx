import {Animated, Image, ImageSourcePropType, Pressable} from 'react-native';
import React, {useEffect, useRef} from 'react';
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
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('test');
    Animated.timing(fadeAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 2100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, isOpen]);

  const rotate = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
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
          source={isOpen ? uri : DEFAULT_CARD_IMAGE}
          style={styles.cardImage}
        />
      </Pressable>
    </Animated.View>
  );
};

export default CardComponent;
