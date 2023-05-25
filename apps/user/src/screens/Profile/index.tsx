/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View as DefaultView, Image, TouchableOpacity} from 'react-native';
import {View} from '../../components/Layout/Theme';
import colors from '../../components/Layout/Theme/colors';
import {useTheme} from '../../contexts/ThemeContexts';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileTopTap from '../../navigator/AppNavigator/ProfileTopTap';
import { useDispatch } from 'react-redux';
import { signout } from '../../features/auth';

const Profile = () => {
  const {theme} = useTheme();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout())
  }
  return (
    <View
      style={{
        flex: 1,
      }}>
      <DefaultView
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          paddingRight: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          style={{
            width: 110,
            height: 15,
            tintColor: '#fff',
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png',
          }}
        />
        <DefaultView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Icon name="qr-code-outline" size={25} color="#fff" />
          <TouchableOpacity onPress={logout}>
            <Icon name="menu" size={35} color="#fff" />
          </TouchableOpacity>
          
        </DefaultView>
      </DefaultView>

      <DefaultView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 25,
          paddingVertical: 15,
        }}>
        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
            }}>
            0
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
            }}>
            Seguidores
          </Text>
        </DefaultView>
        <DefaultView>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
            source={{
              uri: 'https://i.postimg.cc/0jMMGxbs/default.jpg',
            }}
          />
        </DefaultView>
        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 18,
            }}>
            0
          </Text>
          <Text
            style={{
              color: '#fff',
            }}>
            Seguidos
          </Text>
        </DefaultView>
      </DefaultView>

      <DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Nestor Mosquera
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 20,
            }}>
            Click para anadir una biografia
          </Text>
        </TouchableOpacity>
      </DefaultView>
      <ProfileTopTap />
    </View>
  );
};

export default Profile;
