/* eslint-disable @typescript-eslint/no-unused-vars */
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Animated,
  Image,
} from 'react-native';
import {useTheme} from '../../../contexts/ThemeContexts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopColor:
          theme == 'dark' ? 'rgba(255,255,255,.1)' : 'rgba(0, 0, 0,0.1)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255, 255, 255, 0)',
        justifyContent: 'space-around',
        paddingTop: 8,
        paddingBottom: insets.bottom + 10,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        position: 'relative',
        backgroundColor: colors[theme].background,
      }}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const isActions = route.name === 'Partiaf';
        const itemColor = colors[theme].text;

        let iconName = '';
        switch (route.name) {
          case 'Home':
            iconName = focused ? 'home-variant' : 'home-variant-outline';
            break;
          case 'Search':
            iconName = focused ? 'ios-search' : 'ios-search-outline';
            break;
          case 'Moments':
            iconName = focused ? 'ios-tv' : 'ios-tv-outline';
            break;
          case 'Partiaf':
            iconName = focused ? 'ios-bonfire' : 'ios-bonfire-outline';
            break;
          case 'Profile':
            iconName = focused ? '#333' : 'rgba(0,0,0,0.1)';
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
              {route.name == 'Profile' ? (
                <View
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 2,
                    borderColor: iconName,
                  }}>
                  <Image
                    style={{
                      width: 30,
                      height: 30,
                    }}
                    source={{
                      uri: 'https://i.ibb.co/GVRTSzP/52696599642627236248.webp',
                    }}
                  />
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>
                  {route.name === 'Home' ? (
                    <Icon name="ios-home" size={25} color="#fff" />
                  ) : (
                    <Icon name={iconName} size={25} color="#fff" />
                  )}
                </View>
              )}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default TabBar;
