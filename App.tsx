import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import HeaderComponent from './src/components/Header';
import {themes} from './src/assets/themes';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: themes.grey,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HeaderComponent />
    </SafeAreaView>
  );
}

export default App;
