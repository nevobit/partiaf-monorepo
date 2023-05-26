/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {
  AppNavigator,
  AuthNavigator,
  NavigatorContainer,
} from './src/navigator/AppNavigator';
import {Provider, useSelector} from 'react-redux';
import {ThemeProvider, useTheme} from './src/contexts/ThemeContexts';
import {PersistGate} from 'redux-persist/integration/react';
// import Signin from './src/screens/Signin';
// import Signup from './src/screens/Signup';
import {persistor, store} from './src/store';

const App = (): JSX.Element => {
  const {updateTheme} = useTheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <ThemeProvider>
              <NavigatorContainer />
            </ThemeProvider>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
