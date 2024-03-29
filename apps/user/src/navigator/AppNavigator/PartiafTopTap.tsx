/* eslint-disable @typescript-eslint/no-unused-vars */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Events from '../../screens/Partiaf/Events';
import Moments from '../../screens/Profile/Moments';
import colors from '../../components/Layout/Theme/colors';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Image,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../../contexts/ThemeContexts';
import Trends from '../../screens/Partiaf/Trends';

const Tab = createMaterialTopTabNavigator();

const TabBar = ({state, navigation}: any) => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor:
          theme == 'dark' ? 'rgba(255,255,255,.1)' : 'rgba(0, 0, 0,0.1)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-around',
        paddingTop: 8,
        paddingBottom: insets.bottom + 10,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        backgroundColor: colors[theme].background,
      }}>
      {state.routes.map((route: any, index: any) => {
        const focused = state.index === index;
        const itemColor = colors[theme].text;

        let iconName = '';
        switch (route.name) {
          case 'Momentos':
            iconName = focused ? 'aperture' : 'aperture-outline';
            break;
          case 'Eventos':
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
              <Icon name={iconName} size={25} color={itemColor} />
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const PartiafTopTap = () => {
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
              break;
            case 'Tendencias':
              icon = focused ? 'radio' : 'radio-outline';
              break;
            default:
              break;
          }

          return (
            <Icon
              name={icon}
              size={22}
              style={{
                color: focused ? color : '#rgba(255,255,255,0.8)',
              }}
            />
          );
        },
        tabBarLabelStyle: {fontSize: 10, color: '#fff'},
        tabBarStyle: {backgroundColor: 'rgba(0,0,0,1)'},
        tabBarIndicatorStyle: {backgroundColor: colors.dark.primary},
        tabBarActiveTintColor: colors.dark.primary,
      })}
      sceneContainerStyle={{
        backgroundColor: 'rgba(0,0,0,1)',
      }}>
      <Tab.Screen name="Tendencias" component={Trends} />
      <Tab.Screen name="Eventos" component={Events} />
      <Tab.Screen name="Momentos" component={Moments} />
    </Tab.Navigator>
  );
};

export default PartiafTopTap;
