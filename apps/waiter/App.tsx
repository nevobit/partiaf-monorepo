import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigatorContainer } from './src/navigator/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { ApolloProvider } from '@apollo/client';
import client from './src/graphql';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
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
