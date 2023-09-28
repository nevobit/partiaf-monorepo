import React, { useEffect, useState } from 'react'
import { View } from '../../components/Layout/Theme'
import { Text, View as DefaultView, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import colors from '../../components/Layout/Theme/colors'
import { useGetFriends } from '../../hooks'

const Invitation = ({navigation}: any) => {
  const [selected, setSelected] = useState(false);

  const { friends, refetch } = useGetFriends();


  useEffect(() => {
    refetch()
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
                        onPress={() => navigation.navigate('Tickets')}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16
                    }}>Invitar amigos</Text>


<TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="link-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                </DefaultView>
            </DefaultView>


<DefaultView style={{
  padding: 10
}}>
  {friends?.map((friend: any) => (

<TouchableOpacity 
onPress={() => setSelected(!selected)}
style={{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
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
              uri: friend?.photo[0]? friend.photo[0] :  'https://i.postimg.cc/0jMMGxbs/default.jpg',
            }}
          />
  <Text style={{
    color: 'rgba(255,255,255,.8)',
    fontSize: 16,
    fontWeight: '600'
  }}>{friend?.firstname} {friend?.lastname}</Text>
  </DefaultView>

  <DefaultView style={{
                    width: 30,
                    height: 30,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: 5,
                    alignItems: 'center',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden'
                }}>
                    <DefaultView style={{
                        height: 26,
                        width: 26,
                        borderRadius: 5,
                        backgroundColor: selected? colors.dark.primary : 'rgba(255,255,255,0.1)'
                    }} />
                    {selected && (

                    <Icon name='checkmark-outline' style={{
                      position: 'absolute'
                    }} color='#333' size={24} />
                    )}

                    </DefaultView>
</TouchableOpacity>
  ))}

</DefaultView>

<TouchableOpacity
onPress={() => navigation.navigate('Tickets')}
          style={{
            backgroundColor: colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
            marginTop: 'auto',
            marginBottom: 20,
            position: 'absolute',
            bottom: 0
          }}
          >
          {false ? <ActivityIndicator size='small' /> : (

            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: 'rgba(0, 0, 0, .9)',
              }}>
              Enviar
            </Text>
          )}

        </TouchableOpacity>
    </View>
  )
}

export default Invitation