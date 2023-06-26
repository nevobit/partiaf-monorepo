import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import {ScrollView, View as DefaultView, Image, Text} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_BY_ID } from '../../../../graphql/queries/users';

const Stories = () => {
  
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
    <ScrollView
      horizontal
      style={{
        gap: 20,
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 20,
      }}>
      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: data?.getUserById.photo[0]? data?.getUserById.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          {data?.getUserById.firstname}
        </Text>
      </DefaultView>
      {/* <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://i.ibb.co/kqP9Dz7/ive-member-wonyoung-profile-facts-tmi-2.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          Maria
        </Text>
      </DefaultView>
      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://i.ibb.co/TWGQCbW/Pkht-Ho-Y-400x400.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          Karol
        </Text>
      </DefaultView>

      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://i.ibb.co/Q8BQGxC/photo-1615109398623-88346a601842.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          Alessandro
        </Text>
      </DefaultView>
      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://i.ibb.co/87Rdyx1/photo-1618517047977-854f5c4b6976.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>

        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          Franklin
        </Text>
      </DefaultView>

      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: 'https://i.ibb.co/GVRTSzP/52696599642627236248.webp',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          Josue
        </Text>
      </DefaultView> */}
    </ScrollView>
  );
};

export default Stories;
