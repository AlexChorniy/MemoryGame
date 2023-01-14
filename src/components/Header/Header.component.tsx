import {Animated, Text} from 'react-native';
import {styles} from './Header.styles';
import React from 'react';
import View = Animated.View;

const HeaderComponent = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Yara Memory Game</Text>
    </View>
  );
};

export default HeaderComponent;
