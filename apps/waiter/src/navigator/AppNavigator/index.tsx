import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Signin} from '../../screens/Signin';
import {HomeScreen} from '../../screens/Home';
import { useSelector } from 'react-redux';
import { Business } from '../../screens/Business';
import QrScanner from '../../screens/QrScanner';

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="home"
        component={Business}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
         <Tab.Screen
        name="covers"
        component={HomeScreen}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
          <Tab.Screen
        name="scanner"
        component={QrScanner}
        options={{
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

export const NavigatorContainer = () => {
  // const {user} = useSelector((state: any) => state.auth);
  const {user} =  useSelector((state: any) => state.auth);
  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>;
};
