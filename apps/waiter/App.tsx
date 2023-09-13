import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigatorContainer } from './src/navigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql';
import { LogBox, StatusBar } from 'react-native';

function App(): JSX.Element {
  LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native']);

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor="#000"  />
      <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <NavigatorContainer />
        </NavigationContainer>
      </Provider>
      </ApolloProvider>

    </SafeAreaProvider>
  );
}

export default App;
