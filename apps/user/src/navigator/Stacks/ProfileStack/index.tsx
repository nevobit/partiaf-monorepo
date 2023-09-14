import {createStackNavigator} from '@react-navigation/stack';
import UserProfile from '../../../screens/UserProfile';
import EditProfile from '../../../screens/Profile/EditProfile';
import Profile from '../../../screens/Profile';

export type ProfileStackParamList = {
  UserProfile: {
    id: string | undefined;
  };
  Profile: undefined;
  EditProfile:{ 
    id: string | undefined
  };
  Settings: undefined;
};
const ProfileStackNavigator =  createStackNavigator<ProfileStackParamList>();

const ProfileNavigator = () => {
  return (
    <ProfileStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <ProfileStackNavigator.Screen name="Profile" component={Profile} />
      <ProfileStackNavigator.Screen name="EditProfile" component={EditProfile}    options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }} />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileNavigator;
