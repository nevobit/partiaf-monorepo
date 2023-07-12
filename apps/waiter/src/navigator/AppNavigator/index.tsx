import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {Signin} from '../../screens/Signin';

const Home = () => {
  return <Text>Home</Text>;
};

const Auth = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Auth.Screen
        name="Signin"
        component={Signin}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
    </Auth.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export const NavigatorContainer = () => {
  // const {user} = useSelector((state: any) => state.auth);
  const user = '';
  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>;
};
