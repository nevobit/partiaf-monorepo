/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TextInput,
  View as DefaultView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {GET_USERS} from '../../../graphql/queries/users';
import {View} from '../../../components/Layout/Theme';
import colors from '../../../components/Layout/Theme/colors';

const Users = () => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading} = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  console.log(data);

  return (
    <View
      style={{
        height: '100%',
        padding: 10,
      }}>
      {!loading && (
        <DefaultView>
          {data?.getAllUsers.map((user: any) => (
            <TouchableOpacity
              key={user.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 10,
              }}>
              <DefaultView
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 50,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 50,
                    resizeMode: 'cover',
                  }}
                  source={{
                    uri:
                      user.photo.length > 0
                        ? user?.photo[0]
                        : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
                  }}
                />
              </DefaultView>
              <DefaultView>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: colors.dark.text,
                  }}>
                  {user.firstname} {user.lastname}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: 'rgba(255,255,255,.5)',
                  }}>
                  {user.interests.food ? user.interests.food[0] + ' -' : ''}{' '}
                  {user.interests.plan ? user.interests.plan[0] + ' -' : ''}{' '}
                  {user.interests.music ? user.interests.music[0] : ''}
                </Text>
              </DefaultView>
            </TouchableOpacity>
          ))}
        </DefaultView>
      )}
    </View>
  );
};

export default Users;
