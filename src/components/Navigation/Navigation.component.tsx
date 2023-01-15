import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from '../common/Home';
import GameComponent from '../common/Game';
import {OptionType, RootStackParamList} from '../../models/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Group screenOptions={{headerShown: true}}>
          <Stack.Screen
            name={OptionType.home}
            component={HomeComponent}
            options={{
              title: OptionType.home,
            }}
          />
          <Stack.Screen
            name={OptionType.easy}
            component={GameComponent}
            initialParams={{option: OptionType.easy}}
          />
          <Stack.Screen
            name={OptionType.medium}
            component={GameComponent}
            initialParams={{option: OptionType.medium}}
          />
          <Stack.Screen
            name={OptionType.hard}
            component={GameComponent}
            initialParams={{option: OptionType.hard}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationComponent;
