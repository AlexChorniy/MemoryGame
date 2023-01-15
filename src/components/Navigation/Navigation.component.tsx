import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../common/Home';
import GameComponent from '../Game';
import {OptionType, RootStackParamList} from '../../models/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={OptionType.home}>
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={OptionType.home}
            component={HomeComponent}
            options={{
              title: OptionType.home,
            }}
          />
          <Stack.Screen name={OptionType.easy} component={GameComponent} />
          <Stack.Screen name={OptionType.medium} component={GameComponent} />
          <Stack.Screen name={OptionType.hard} component={GameComponent} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
