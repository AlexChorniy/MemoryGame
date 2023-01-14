import {Button, View} from 'react-native';
import React from 'react';
import {OptionType, RootStackParamList} from '../../../models/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeComponent = ({navigation}: TProps): JSX.Element => {
  return (
    <View>
      <Button
        title="Easy"
        onPress={() =>
          navigation.navigate(OptionType.easy, {option: OptionType.easy})
        }
      />
      <Button
        title="Medium"
        onPress={() =>
          navigation.navigate(OptionType.medium, {option: OptionType.medium})
        }
      />
      <Button
        title="Hard"
        onPress={() =>
          navigation.navigate(OptionType.hard, {option: OptionType.hard})
        }
      />
    </View>
  );
};

export default HomeComponent;
