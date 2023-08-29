/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View as DefaultView, Image, TouchableOpacity} from 'react-native';
import {View} from '../../components/Layout/Theme';
import colors from '../../components/Layout/Theme/colors';
import {useTheme} from '../../contexts/ThemeContexts';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileTopTap from '../../navigator/AppNavigator/ProfileTopTap';
import {useDispatch, useSelector} from 'react-redux';
import {signout} from '../../features/auth';
import {useQuery} from '@apollo/client';
import {GET_ONE_USER, GET_USER_BY_ID} from '../../graphql/queries/users';
import {useEffect} from 'react';
import OtherProfileTopTap from '../../navigator/AppNavigator/OtherProfileTopTap';

const UserProfile = ({route}:any) => {
  const {theme} = useTheme();

  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_ONE_USER, {
    variables: { id: route.params.id },
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
        flex: 1,
      }}>
      <DefaultView
        style={{
          paddingVertical: 5,
          paddingTop: 25,
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
            {data?.getOneUser.following.length}
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
            {data?.getOneUser.following.length}
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
          {data?.getOneUser.firstname} {data?.getOneUser.lastname}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 10,
            }}>
            {data?.getOneUser.biography}
          </Text>
        </TouchableOpacity>
        <DefaultView style={{
          alignItems: 'center',
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10
        }}>

        <TouchableOpacity style={{
          backgroundColor: colors.dark.primary,
          width: 150,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
        }}>
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Segir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: colors.dark.primary,
          width: 150,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
        }}>
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Hazte amigo
          </Text>
        </TouchableOpacity>
        </DefaultView>

      </DefaultView>
      <OtherProfileTopTap id={route.params.id} />
    </View>
  );
};

export default UserProfile;
