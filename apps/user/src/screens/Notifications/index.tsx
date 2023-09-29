import React, { useEffect, useState } from 'react'
import { View } from '../../components/Layout/Theme'
import { Text, View as DefaultView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import colors from '../../components/Layout/Theme/colors'
import { useAcceptRequest, useGetPendingFriends } from '../../hooks'
import { useCancelRequest } from '../../hooks/friend-requests/useCancelRequest'
import { useRejectedRequest } from '../../hooks/friend-requests/useRejectedRequest'

const Notifications = ({navigation}: any) => {
  const [selected, setSelected] = useState(false);

  const { friends, refetch, startPolling, stopPolling } = useGetPendingFriends();
  const { acceptRequestFn } = useAcceptRequest();
  const { rejectedRequestFn } = useRejectedRequest();

  const accepteRequest = async(id: string) => {
    await acceptRequestFn({ variables:{ id }});
    refetch();
  }

  useEffect(() => {
    startPolling(2000);
    return () => {
      stopPolling();
    };
  }, [stopPolling, startPolling]);

  useEffect(() => {
    refetch();
  }, [refetch])

  return (
    <View
    style={{
      flex: 1
    }}
    >
  <DefaultView style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingBottom: 10,
                paddingHorizontal: 10
            }}>

                <DefaultView
                    style={{
                        flexDirection: 'row',
                        gap: 15,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16
                    }}>Notificaciones</Text>


<TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="link-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </DefaultView>
            </DefaultView>


<DefaultView style={{
  padding: 10
}}>
  {friends?.map((friend: any) => (

<TouchableOpacity 
key={friend.id}
onPress={() => setSelected(!selected)}
style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15
}}>
  <DefaultView style={{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  }}>

<Image
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
            source={{
              uri: friend?.sendetId?.photo?.[0]? friend?.sendetId?.photo?.[0] :  'https://i.postimg.cc/0jMMGxbs/default.jpg',
            }}
          />
  <Text style={{
    color: 'rgba(255,255,255,.8)',
    fontSize: 16,
    fontWeight: '600'
  }}>{friend?.senderId?.firstname} {friend?.senderId?.lastname}</Text>
  </DefaultView>
  <DefaultView style={{
    flexDirection: 'row',
    gap: 10
  }}>

  <DefaultView style={{
                    
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 5,
                    alignItems: 'center',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    
                      <TouchableOpacity 
                      onPress={() => rejectedRequestFn(friend.id)}
                      style={{
                        backgroundColor: 'rgba(255,255,255,.5)',
                        padding: 5
                      }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14
                        }}>Rechazar</Text>
                      </TouchableOpacity>
                    </DefaultView>

  <DefaultView style={{
                    
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 5,
                    alignItems: 'center',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    
                      <TouchableOpacity style={{
                        backgroundColor: colors.dark.primary,
                        padding: 5
                      }}
                      onPress={() => accepteRequest(friend.id)}
                      >
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14
                        }}>Aceptar</Text>
                      </TouchableOpacity>
                    </DefaultView>
  </DefaultView>

</TouchableOpacity>
  ))}

</DefaultView>

    </View>
  )
}

export default Notifications