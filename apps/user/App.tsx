/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator, AuthNavigator} from './src/navigator/AppNavigator';

import {ThemeProvider, useTheme} from './src/contexts/ThemeContexts';
// import Signin from './src/screens/Signin';
// import Signup from './src/screens/Signup';

const App = (): JSX.Element => {
  const {updateTheme} = useTheme();
  const user = true;
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
