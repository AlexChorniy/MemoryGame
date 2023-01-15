import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {styles} from './Reload.styles';

type TProps = {
  title: string;
  onPress: () => void;
};

const ReloadComponent = ({onPress, title = 'Button'}: TProps): JSX.Element => {
  return (
    <View style={styles.reloadContainer}>
      <Pressable onPress={onPress}>
        <Image
          source={require('../../../assets/images/icons8-update-left-rotation-64.png')}
        />
      </Pressable>
      <Text style={styles.reloadTitle}>{title}</Text>
    </View>
  );
};

export default ReloadComponent;
