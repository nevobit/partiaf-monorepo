/* eslint-disable @typescript-eslint/no-unused-vars */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { colors } from '../../layout/theme/colors';
import Tickets from '../../screens/Home/Tickets';
import Bookings from '../../screens/Home/Bookings';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TabBar = ({state, navigation}: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: 'rgba(255,255,255,.1)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-around',
        paddingTop: 8,
        paddingBottom: insets.bottom + 10,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        backgroundColor: colors.dark.background,
      }}>
      {state.routes.map((route: any, index: any) => {
        const focused = state.index === index;
        const itemColor = colors.dark.text;

        let iconName = '';
        switch (route.name) {
          case 'Tickets':
            iconName = focused ? 'aperture' : 'aperture-outline';
            break;
          case 'Reservas':
            iconName = focused ? 'calendar' : 'calendar-outline';
            break;
          default:
            break;
        }

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View key={route.name}>
            <TouchableOpacity onPress={onPress}>
              {/* <Icon name={iconName} size={25} color={itemColor} /> */}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const HomeTopTap = ({id}: any) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let icon: string = '';

          switch (route.name) {
            case 'Momentos':
              icon = focused ? 'aperture' : 'aperture-outline';
              break;
            case 'Eventos':
              icon = focused ? 'calendar' : 'calendar-outline';
            default:
              break;
          }

          return (
            <Text>Icon</Text>
            // <Icon
            //   name={icon}
            //   size={25}
            //   style={{
            //     color: focused ? color : '#rgba(255,255,255,0.8)',
            //   }}
            // />
          );
        },
        tabBarLabelStyle: {fontSize: 14, color: '#fff'},
        tabBarStyle: {backgroundColor: 'rgba(10,10,10,1)'},
        tabBarIndicatorStyle: {backgroundColor: colors.dark.primary},
        tabBarActiveTintColor: colors.dark.primary,
      })}
      sceneContainerStyle={{
        backgroundColor: 'rgba(10,10,10,1)',
      }}>
      <Tab.Screen name="Tickets" >
        {() => <Tickets selected={id} />}
      </Tab.Screen> 
      <Tab.Screen name="Reservas" component={Bookings} />
    </Tab.Navigator>
  );
};

export default HomeTopTap;
