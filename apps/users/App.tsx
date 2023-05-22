import React from 'react';
// import Login from './src/screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './src/components/Layout/Tabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

export default App;
