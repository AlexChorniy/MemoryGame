import {Text, View} from 'react-native';
import React from 'react';
import {
  OptionType,
  OrientationType,
  RootStackParamList,
} from '../../../models/navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from './Home.styles';
import ButtonComponent from '../Button';
import {gridPx} from '../../../utils/styleHelpers';
import {useOrientation} from '../../../hooks/useOrientation';

export type TProps = NativeStackScreenProps<RootStackParamList, OptionType>;

const HomeComponent = ({navigation}: TProps): JSX.Element => {
  const {orientation} = useOrientation();

  return (
    <View
      style={{
        ...styles.homeContainer,
        paddingTop:
          orientation === OrientationType.landscape ? gridPx(3) : gridPx(10),
      }}>
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
