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

const Artists = () => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading} = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  return (
    <DefaultView
      style={{
        height: '100%',
        paddingHorizontal: 10,
        marginTop: 10
      }}>
      {!loading && (
        <DefaultView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
          {data?.getAllUsers
            .filter((user: any) => user.accountType == 'artists')
            .map((user: any) => (
              <TouchableOpacity
                key={user._id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 10,
                  gap: 5,
                }}>
                <DefaultView
                  style={{
                    height: 80,
                    width: 80,
                    borderRadius: 50,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                <DefaultView
                  style={{
                    alignItems: 'center',
                  }}>
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
                    276k
                  </Text>
                </DefaultView>
              </TouchableOpacity>
            ))}
        </DefaultView>
      )}
    </DefaultView>
  );
};

export default Artists;
