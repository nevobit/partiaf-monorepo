import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/Home';
import Store from '../../screens/Store';
import Tickets from '../../screens/Tickets';
import Wallet from '../../screens/Wallet';

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStackNavigator.Screen name="HomeScreen" component={Home} />
      <HomeStackNavigator.Screen name="Store" component={Store} />
      <HomeStackNavigator.Screen name="Tickets" component={Tickets} />
      <HomeStackNavigator.Screen name="Wallet" component={Wallet} />
      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
      {/* <HomeStackNavigator.Screen name="HomeScreen" component={Home}  /> */}
    </HomeStackNavigator.Navigator>
  );
};

export default HomeNavigator;
