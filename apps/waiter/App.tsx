import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigatorContainer} from './src/navigator/AppNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigatorContainer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
