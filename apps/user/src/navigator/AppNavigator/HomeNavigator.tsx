import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Store from '../../screens/Store';
import Tickets from '../../screens/Tickets';
import Wallet from '../../screens/Wallet';
import Stores from '../../screens/Stores';
import Details from '../../screens/Tickets/Details';
import Covers from '../../screens/Covers';
import Payment from '../../screens/Covers/Payment';
import UserProfile from '../../screens/UserProfile';
import EditProfile from '../../screens/Profile/EditProfile';
import Invitation from '../../screens/Invitation';

export type RootStackParamList = {
  HomeScreen: undefined;
  Stores: {
    store: string | undefined;
  };
  Store: {
    store: string | undefined;
  };
  Covers: {
    store: string | undefined;
  };
  Tickets: {
    user: string | undefined;
    remove: boolean | undefined;
  };
  Payment: {
    user: string | undefined;
    goer: any | undefined;
  };
  Wallet: {
    user: string | undefined;
  };
  TicketDetails: { id: String | undefined};
  Comments: {
    store: string | undefined;
  };
  UserProfile: {
    id: string | undefined;
  };
  Moments:undefined;
  EditProfile:{ 
    id: string | undefined
  };
  Invitation:{ 
    id: string | undefined
  };
  Settings:undefined;
};
const HomeStackNavigator = createStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="HomeScreen" component={Home} />
      <HomeStackNavigator.Screen name="Store" component={Store} />
      <HomeStackNavigator.Screen name="Tickets" component={Tickets} />
      <HomeStackNavigator.Screen name="Wallet" component={Wallet} />
      <HomeStackNavigator.Screen name="Stores" component={Stores} />
      <HomeStackNavigator.Screen name="Covers" component={Covers} />
      <HomeStackNavigator.Screen name="TicketDetails" component={Details} />
      <HomeStackNavigator.Screen name="Payment" component={Payment} />
      <HomeStackNavigator.Screen name="UserProfile" component={UserProfile} />
      <HomeStackNavigator.Screen name="EditProfile" component={EditProfile}    options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }} />

<HomeStackNavigator.Screen name="Invitation" component={Invitation}    options={{
          presentation: 'card',
          animationTypeForReplace: 'push',
        }} />

      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;
