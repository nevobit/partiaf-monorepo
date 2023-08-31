/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {Text, View as DefaultView, Image, TouchableOpacity, Linking} from 'react-native';
import {View} from '../../components/Layout/Theme';
import colors from '../../components/Layout/Theme/colors';
import {useTheme} from '../../contexts/ThemeContexts';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileTopTap from '../../navigator/AppNavigator/ProfileTopTap';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../features/auth';
import {useQuery} from '@apollo/client';
import {GET_USER_BY_ID} from '../../graphql/queries/users';
import {useEffect} from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../components/Layout/Header';
import { BottomSheet } from '../../containers';
import AppLink from 'react-native-app-link';

const Profile = ({navigation}: any) => {
  const {theme} = useTheme();

  const [modal, setModal] = useState(false);
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  const sendWhatsAppMessage = async() => {
    Linking.openURL(
      'http://api.whatsapp.com/send?phone=573226589914' + "Quisiera hablar con alguien"
    );

  };
  
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000"
      }}>
      {/* <DefaultView
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
            uri:  'https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png',
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
      </DefaultView> */}

      <Header navigation={navigation} options wallet openModal={setModal} />

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
            {data?.getUserById.following.length}
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
              uri: data?.getUserById.photo[0]? data?.getUserById.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
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
            {data?.getUserById.following.length}
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
          {data?.getUserById?.firstname} {data?.getUserById.lastname}
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

      <BottomSheet isVisible={modal} setIsVisible={setModal} >
      <TouchableOpacity style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        height: 50
      }}
      onPress={sendWhatsAppMessage}
      >
        <Icon name='information-circle-outline' size={24} color="#fff" />
            <Text style={{
              color: '#fff',
              fontSize: 18
            }}>Ayuda & Sugerencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        height: 50,
        
      }}
      onPress={logout}
      >
          <Icon name='log-out-outline' size={24} color="red" />
            <Text style={{
              color: 'red',
              fontSize: 18
            }}>Cerrar sesion</Text>
        </TouchableOpacity>
      </BottomSheet>
    </View>
  );
};

export default Profile;
