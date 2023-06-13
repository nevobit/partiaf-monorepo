import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Store from '../../screens/Store';
import Tickets from '../../screens/Tickets';
import Wallet from '../../screens/Wallet';
import Stores from '../../screens/Stores';
import Details from '../../screens/Tickets/Details';
import Covers from '../../screens/Covers';

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
  };
  Wallet: {
    user: string | undefined;
  };
  TicketDetails: undefined;
  Comments: {
    store: string | undefined;
  };
  OtherProfile: {
    user: string | undefined;
  };
  Moments:undefined;
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

      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;
