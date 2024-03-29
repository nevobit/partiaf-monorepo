import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '../../components/Layout/TabBar';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../../screens/Signin';
import Signup from '../../screens/Signup';
import UserType from '../../screens/UserType';
import Preferences from '../../screens/Preferences';
import AddPhoto from '../../screens/AddPhoto';
import {AuthStackParamList} from './types';
import HomeNavigator from './HomeNavigator';
import Partiaf from '../../screens/Partiaf';
import VerifyAge from '../../screens/VerifyAge';
import {useSelector} from 'react-redux';
import Search from '../../screens/Search';
import Moments from '../../screens/Moments';
import ProfileNavigator from '../Stacks/ProfileStack';
import UserProfile from '../../screens/UserProfile';
import Privacity from '../../screens/Privacity';

const Tab = createBottomTabNavigator();
const Auth = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{headerShown: false}}>
      <Auth.Screen
        name="Signin"
        component={Signin}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="Signup"
        component={Signup}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="UserType"
        component={UserType}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="Photo"
        component={AddPhoto}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="Preferences"
        component={Preferences}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="VerifyAge"
        component={VerifyAge}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
      <Auth.Screen
        name="Privacity"
        component={Privacity}
        options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }}
      />
    </Auth.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props: any) => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="Moments" component={() => null} /> */}
      <Tab.Screen name="Partiaf" component={Partiaf} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

// export const AppNavigator = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//       tabBar={(props: any) => <TabBar {...props} />}>
//       <Tab.Screen name="Tab" component={TabNavigator} />
//       {/* <Tab.Screen name="UserProfile" component={UserProfile} /> */}
//     </Tab.Navigator>
//   );
// };

export const NavigatorContainer = () => {
  const {user} = useSelector((state: any) => state.auth);
  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>;
};
