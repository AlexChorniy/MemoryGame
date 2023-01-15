import {Text, View} from 'react-native';
import React from 'react';
import {OptionType, RootStackParamList} from '../../../models/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './Home.styles';
import ButtonComponent from '../Button';

export type TProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeComponent = ({navigation}: TProps): JSX.Element => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>Select Difficulty</Text>
      <View style={styles.mainContainer}>
        <ButtonComponent
          title={OptionType.easy}
          onPress={() =>
            navigation.navigate(OptionType.easy, {option: OptionType.easy})
          }
        />
        <ButtonComponent
          title={OptionType.medium}
          onPress={() =>
            navigation.navigate(OptionType.medium, {option: OptionType.medium})
          }
        />
        <ButtonComponent
          title={OptionType.hard}
          onPress={() =>
            navigation.navigate(OptionType.hard, {option: OptionType.hard})
          }
        />
      </View>
    </View>
  );
};

export default HomeComponent;
