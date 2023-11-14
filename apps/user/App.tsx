/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect } from 'react';
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
import client from './src/graphql';
import {ApolloProvider} from '@apollo/client';
// import getToken from './src/notifications/get-token';
// import {PermissionsAndroid} from 'react-native';

const App = (): JSX.Element => {
  const {updateTheme} = useTheme();

  // useEffect(() => {
  //   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  // }, [])
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <NavigationContainer>
              <ThemeProvider>
                <NavigatorContainer />
              </ThemeProvider>
            </NavigationContainer>
          </SafeAreaProvider>
        </PersistGate>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
