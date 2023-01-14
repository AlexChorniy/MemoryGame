import {Text, View} from 'react-native';
import {styles} from './Header.styles';
import React from 'react';

const HeaderComponent = (): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Yara Memory Game</Text>
    </View>
  );
};

export default HeaderComponent;
