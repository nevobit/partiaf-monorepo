/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {Text, View as DefaultView, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, ScrollView} from 'react-native';
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
import Header from '../../components/Layout/Header';

const UserProfile = ({route}:any) => {
  const {theme} = useTheme();

  const {user} = useSelector((state: any) => state.auth);
  const [open, setOpen] = useState(false);
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
      {/* <DefaultView
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
      </DefaultView> */}
      <Header wallet ticket />
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
              borderWidth: 2,
              borderColor: '#333'
            }}
            source={{
              uri: data?.getOneUser.photo[0]? data?.getOneUser.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
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
            fontSize: 16,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {data?.getOneUser.firstname} {data?.getOneUser.lastname}
        </Text>
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

        <TouchableOpacity>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              textAlign: 'center',
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
          borderRadius: 10,
          padding: 5,
          borderWidth: 1,
          borderColor: colors.dark.primary,
          height: 40,
          width: 150,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20
        }}>
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Segir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: 'rgba(255,255,255, .2)',
          width: 50,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
            <Icon name='person-add-outline' size={18} color='#fff' />
        </TouchableOpacity>
        </DefaultView>

      </DefaultView>
      <OtherProfileTopTap id={route.params.id} />
      <Modal visible={open}
      animationType='fade'
      transparent={true}
>
  <TouchableWithoutFeedback onPress={() => setOpen(false)}>

        <DefaultView style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          margin: 'auto',
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
            maxHeight: '80%',
            marginBottom: 200
          }}>

{data?.getOneUser?.interests?.music.map((m:string) => (

          
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


{data?.getOneUser?.interests?.food.map((m:string) => (

          
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


{data?.getOneUser?.interests?.plan.map((m:string) => (

          
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
