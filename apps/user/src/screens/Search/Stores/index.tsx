/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View as DefaultView, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {GET_STORES} from '../../../graphql/queries/users';
import {View} from '../../../components/Layout/Theme';
import colors from '../../../components/Layout/Theme/colors';

const Stores = ({navigation}: any) => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading} = useQuery(GET_STORES, {
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
        <DefaultView>
          {data?.getAllStores.map((user: any) => (
            <TouchableOpacity
            onPress={() => navigation.navigate('Store', {store:  user.id})}
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
                      user.photos?.length > 0
                        ? user?.photos[0]
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
                  {user.name}
                </Text>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    color: 'rgba(255,255,255,.5)',
                  }}>
                  {user.type}
                </Text>
              </DefaultView>
            </TouchableOpacity>
          ))}
        </DefaultView>
      )}
    </DefaultView>
  );
};

export default Stores;
