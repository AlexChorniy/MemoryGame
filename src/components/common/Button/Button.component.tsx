import {Pressable, Text} from 'react-native';
import React from 'react';
import {styles} from './Button.styles';

type TProps = {
  title: string;
  onPress: () => void;
};

const ButtonComponent = ({onPress, title = 'Button'}: TProps): JSX.Element => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
