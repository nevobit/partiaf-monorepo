/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, View as DefaultView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';
import { View } from '../../components/Layout/Theme';
import colors from '../../components/Layout/Theme/colors';
import { useTheme } from '../../contexts/ThemeContexts';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileTopTap from '../../navigator/AppNavigator/ProfileTopTap';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../features/auth';
import { useQuery } from '@apollo/client';
import { GET_ONE_USER, GET_USER_BY_ID } from '../../graphql/queries/users';
import { useEffect } from 'react';
import OtherProfileTopTap from '../../navigator/AppNavigator/OtherProfileTopTap';
import Header from '../../components/Layout/Header';
import styles from './styles';
import { useFollowUser } from '../../hooks';
import { useIsfollowUser } from '../../hooks/follows/useIsfollowUser';
import { useGetFollowers } from '../../hooks/follows/useGetFollowers';
import { useGetFolloweds } from '../../hooks/follows/useGetFolloweds';
import { useUnFollowUser } from '../../hooks/follows/useUnFollowUser';

const UserProfile = ({ navigation, route }: any) => {
  const { user } = useSelector((state: any) => state.auth);
  const [open, setOpen] = useState(false);
  const { data, loading, error, refetch } = useQuery(GET_ONE_USER, {
    variables: { id: route.params.id },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const { followUserFn, follow, isLoading, error: errorFollow } = useFollowUser(route.params.id);
  const { unfollowUserFn, unfollow, isLoading: isUnfollow, error: errorUnFollow } = useUnFollowUser(route.params.id);

  const { isFollow, isLoading: isLoadginIsFollow, error: errorIsFollow, refetch: refetchIsFollow } = useIsfollowUser(route.params.id);
  const { followers, isLoading: isLoadingGetFollowers, error: errorGetFollowers, refetch: refetchGetFollowers } = useGetFollowers(route.params.id);
  const { followeds, isLoading: isLoadingGetFolloweds, error: errorGetFolloweds, refetch: refetchGetFolloweds, stopPolling, startPolling } = useGetFolloweds(route.params.id);

  const followUser = async () => {
    await followUserFn();
    refetchIsFollow();
    refetchGetFollowers();
    refetchGetFolloweds();
  };

  const unfollowUser = async () => {
    await unfollowUserFn();
    refetchIsFollow();
    refetchGetFollowers();
    refetchGetFolloweds();
  };


  useEffect(() => {
    refetchIsFollow();
    refetch();
    refetchGetFollowers();
    refetchGetFolloweds();
  }, [refetch, refetchIsFollow]);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [stopPolling, startPolling]);


  return (
    <View style={{
      flex: 1
    }}>
      <Header wallet ticket />
      <DefaultView
        style={styles.container}>
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
            {followeds?.length}
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
            style={styles.user_photo}
            source={{
              uri: data?.getOneUser?.photo[0] ? data?.getOneUser.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
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
            {followers?.length}
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
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {data?.getOneUser?.firstname} {data?.getOneUser?.lastname}
        </Text>
        {!data?.getOneUser?.isPrivate && (

          <DefaultView style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          gap: 10
        }}>

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: 'rgba(255,255,255, .2)',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 10
            }}>
            <Text style={{
              color: '#fff'
            }}>
              {data?.getOneUser?.interests?.food[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: 'rgba(255,255,255, .2)',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 10
            }}>
            <Text style={{
              color: '#fff'
            }}>
              {data?.getOneUser?.interests?.plan[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              backgroundColor: 'rgba(255,255,255, .2)',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 10
            }}>
            <Text style={{
              color: '#fff'
            }}>
              {data?.getOneUser?.interests?.music[0]}
            </Text>
          </TouchableOpacity>
          </DefaultView>
        )}

        <TouchableOpacity>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              textAlign: 'center',
            }}>
            {data?.getOneUser?.biography}
          </Text>
        </TouchableOpacity>

        <DefaultView style={{
          alignItems: 'center',
          marginBottom: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10
        }}>
          {!data?.getOneUser?.isPrivate && (
          <>

          {isFollow ? (

            <TouchableOpacity style={styles.follow_btn} onPress={unfollowUser}>
              <Text
                style={{
                  color: "#333",
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Siguiendo
              </Text>
            </TouchableOpacity>
          ) : (

            <TouchableOpacity style={[styles.follow_btn, {
              backgroundColor: 'rgba(255,255,255, .2)',
              borderColor: 'rgba(255,255,255, .2)'
            }]} onPress={() => followUser()}>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                Seguir
              </Text>
            </TouchableOpacity>
          )}
          </>

          )}

          <TouchableOpacity style={{
            backgroundColor: 'rgba(255,255,255, .2)',
            width: data?.getOneUser?.isPrivate ? 150 : 50,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10
          }}>
            <Icon name='person-add-outline' size={18} color='#fff' />
            {data?.getOneUser?.isPrivate && (
              <Text style={{
                fontWeight: '500',
                color: '#fff',
                fontSize: 16.
              }}>Agregar</Text>
            )}
          </TouchableOpacity>
        </DefaultView>

      </DefaultView>
      {data?.getOneUser?.isPrivate ? (
        <DefaultView style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          position: 'relative',
          width: '100%',
          padding: 10,
          gap: 10
        }}>
          <Icon name="lock-closed-outline" style={{
            borderWidth: 1,
            borderColor: '#fff',
            // width: 50,
            // height: 50,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: 10
          }} size={30} color="#fff" />
          <DefaultView>
            <Text style={{
              color: '#fff',
              fontWeight: '600'
            }} >Esta cuenta es privada</Text>
            <Text style={{
              color: '#fff',
              fontWeight: '300',
              maxWidth: 280
            }} >Solo amigos pueden ver eventos y moments de esta cuenta</Text> 
          </DefaultView>
        </DefaultView>
      ) : (

        <OtherProfileTopTap navigation={navigation} id={route.params.id} />
      )}

      <Modal visible={open}
        animationType='fade'
        transparent={true}
      >
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>

          <DefaultView style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            borderRadius: 20,
            justifyContent: 'center',
            margin: 'auto',
            zIndex: 99999,
          }}>
            <DefaultView style={{
              backgroundColor: '#101010',
              width: '95%',
              paddingTop: 20,
              paddingBottom: 20,
              paddingHorizontal: 5,
              alignItems: 'center',
              borderRadius: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              margin: 'auto',
              maxHeight: '70%',
              marginTop: 120,
              marginBottom: 200,
              overflow: 'hidden'
            }}>

              {data?.getOneUser?.interests?.music.map((m: string) => (


                <DefaultView style={{
                  backgroundColor: 'rgba(255,255,255, .2)',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 10
                }}>
                  <Text style={{
                    color: '#fff'
                  }}>
                    {m}
                  </Text>
                </DefaultView>
              ))}


              {data?.getOneUser?.interests?.food.map((m: string) => (


                <DefaultView style={{
                  backgroundColor: 'rgba(255,255,255, .2)',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 10
                }}>
                  <Text style={{
                    color: '#fff'
                  }}>
                    {m}
                  </Text>
                </DefaultView>
              ))}


              {data?.getOneUser?.interests?.plan.map((m: string) => (


                <DefaultView style={{
                  backgroundColor: 'rgba(255,255,255, .2)',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  paddingHorizontal: 10
                }}>
                  <Text style={{
                    color: '#fff'
                  }}>
                    {m}
                  </Text>
                </DefaultView>
              ))}

            </DefaultView>

          </DefaultView>
        </TouchableWithoutFeedback>

      </Modal>
    </View>
  );
};

export default UserProfile;
