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
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../../graphql/queries/users';
import { useEffect } from 'react';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const {theme} = useTheme();
  const insets = useSafeAreaInsets();

   
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
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
          // case 'Moments':
          //   iconName = focused ? 'ios-tv' : 'ios-tv-outline';
          //   break;
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
                      uri: data?.getUserById?.photo[0]? data?.getUserById?.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
                    }}
                  />
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>

                  {route.name === 'Home' ? (
                    <Icon name="ios-home" size={25} color="#fff" />
                  ) : (
                    route.name == "Partiaf" ? 
                    <View style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 25,
                      height: 25,
                
                    }}>
                      <Image source={{
                      uri: 'https://i.ibb.co/JrHLDXM/svgviewer-png-output-1.png'
                    }} style={{
                      width: 25,
                      height: 25,
                      resizeMode: 'contain'
                    }} />
                    </View>
                     :
                     (
                      <>
                      {route.name == 'Moments' ? (
                        <View>
                          <Icon name="lock-closed" style={{
                            position: 'absolute',
                            right: -1,
                            top: -2,
                            zIndex: 99
                          }}  size={15} color="#fff" />
                          <Icon name={iconName} size={25} color="#333" />
                        </View>

                      ): (
                        <Icon name={iconName} size={25} color="#fff" />
                      )}
                      </>

                     )
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
