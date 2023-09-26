/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Text, View as DefaultView, Image, TouchableOpacity, Linking, Modal, TouchableWithoutFeedback, TextInput, Pressable, ActivityIndicator, Alert } from 'react-native';
import { View } from '../../components/Layout/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileTopTap from '../../navigator/AppNavigator/ProfileTopTap';
import { useDispatch } from 'react-redux';
import { signout } from '../../features/auth';
import Header from '../../components/Layout/Header';
import { BottomSheet } from '../../containers';
import { useUser } from '../../hooks';
import { useGetFollowers } from '../../hooks/follows/useGetFollowers';
import { useGetFolloweds } from '../../hooks/follows/useGetFolloweds';
import { useDeleteUser } from '../../hooks/users/useDeleteUser';

const Profile = ({ navigation }: any) => {
  const [modal, setModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [changePhoto, setChangePhoto] = useState(false);
  const [changePhotoBottom, setChangePhotoBottom] = useState(false);

  const { user, isLoading, refetch } = useUser();

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  const sendWhatsAppMessage = async () => {
    await Linking.openURL(
      'http://api.whatsapp.com/send?phone=573226589914' + "Quisiera hablar con alguien"
    );

  };

  const photoHandler = () => {
    if (!user.photo[0]) {
      setChangePhoto(true);
    }else{
      setChangePhotoBottom(true)
    }
  }

  const modalHandler = () => {
    setModal(false)
    setOpen(true);
  }


  const { followers, isLoading: isLoadingGetFollowers, error: errorGetFollowers, refetch: refetchGetFollowers, stopPolling: stopPollingFoll, startPolling: startPollingFoll } = useGetFollowers(user?.id);
  const { followeds, isLoading: isLoadingGetFolloweds, error: errorGetFolloweds, refetch: refetchGetFolloweds, stopPolling, startPolling } = useGetFolloweds(user?.id);

  const { deleteUserFn } = useDeleteUser();
  const deleteAccountHandler = () => {
    Alert.alert(
      'Confirmación',
      '¿Estás seguro de que deseas eliminar tu cuenta?',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            return
          },
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: async () => {
            Alert.alert(
              'Eliminar cuenta',
              'Al eliminar tu cuenta ya no podras recuperar tus datos, estas seguro?',
            [
              {
                text: 'Cancelar',
                onPress: () => {
                  return
                },
                style: 'cancel',
              },{
                text: 'Eliminar',
                onPress: async() => {
                  await deleteUserFn();
                  logout();
                  console.log('Cuenta eliminada');
                }
              }
            ]
              )
          },
          style: 'destructive',
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    refetch();
    refetchGetFollowers();
    refetchGetFolloweds();
  }, [refetch, refetchGetFollowers, refetchGetFolloweds]);

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [stopPolling, startPolling]);

  useEffect(() => {
    startPollingFoll(1000);
    return () => {
      stopPollingFoll();
    };
  }, [stopPollingFoll, startPollingFoll]);


  if(isLoading) return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <ActivityIndicator size='large' color='#fff' />
    </View>
  )

  return (
    <View style={{
      flex: 1
    }}>
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
        <Pressable onPress={photoHandler} onLongPress={photoHandler}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
            source={{
              uri: user?.photo[0] ? user.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
            }}
          />
        </Pressable>
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
            fontSize: 20,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          {user?.firstname} {user?.lastname}
        </Text>
        {user?.biography? (
          <Text
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 14,
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 20,
          }}>
          {user.biography}
        </Text>
        ): (

        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
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
        )}

      </DefaultView>
      <ProfileTopTap />
      <Modal visible={changePhoto}
        animationType='fade'
        transparent={true}

      >
        <TouchableWithoutFeedback onPress={() => setChangePhoto(false)}>
          <DefaultView style={{
            width: '100%',
            flex: 1,
            alignItems: 'center',
            borderRadius: 10,
            justifyContent: 'center',
            margin: 'auto',
            backgroundColor: 'rgba(0,0,0,0.6)'
          }}>

            <DefaultView style={{
              backgroundColor: '#101010',
              width: '60%',
              paddingTop: 12,
              paddingBottom: 12,
              paddingHorizontal: 20,
              alignItems: 'flex-start',
              borderRadius: 10,
              justifyContent: 'flex-start',
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              margin: 'auto',
              maxHeight: '80%',
              marginBottom: 200
            }}>

              <TouchableOpacity>
                <Text style={{
                  color: '#fff',
                  fontSize: 14
                }}>
                  Agregar una foto de perfil
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{
                  color: '#fff', marginTop: 10,
                  fontSize: 14
                }}>
                  Agregar un moment
                </Text>
              </TouchableOpacity>
            </DefaultView>
          </DefaultView>

        </TouchableWithoutFeedback>

      </Modal>
      <BottomSheet isVisible={modal} setIsVisible={setModal} >
      <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50
        }}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Icon name='person-outline' size={22} color="#fff" />
          <Text style={{
            color: '#fff',
            fontSize: 14
          }}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50
        }}
          onPress={modalHandler}
        >
          <Icon name='git-merge-outline' size={22} color="#fff" />
          <Text style={{
            color: '#fff',
            fontSize: 14
          }}>Mis intereses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50
        }}
          onPress={sendWhatsAppMessage}
        >
          <Icon name='information-circle-outline' size={22} color="#fff" />
          <Text style={{
            color: '#fff',
            fontSize: 14
          }}>Ayuda & Sugerencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50,

        }}
          onPress={logout}
        >
          <Icon name='log-out-outline' size={22} color="red" />
          <Text style={{
            color: 'red',
            fontSize: 16
          }}>Cerrar sesion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50,

        }}
          onPress={deleteAccountHandler}
        >
          <Icon name='trash-outline' size={22} color="red" />
          <Text style={{
            color: 'red',
            fontSize: 16
          }}>Borrar cuenta</Text>
        </TouchableOpacity>
      </BottomSheet>


      <BottomSheet isVisible={changePhotoBottom} setIsVisible={setChangePhotoBottom} >
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          height: 50
        }}
          onPress={modalHandler}
        >
          <Icon name='image-outline' size={22} color="#fff" />
          <Text style={{
            color: '#fff',
            fontSize: 14,
            fontWeight:'300'

          }}>Nueva foto de perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
          height: 50,

        }}
          onPress={logout}
        >
          <Icon name='trash-outline' size={22} color="red" />
          <Text style={{
            color: 'red',
            fontSize: 14,
            fontWeight:'300'
          }}>Eliminar foto actual</Text>
        </TouchableOpacity>
      </BottomSheet>



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

              {user?.interests?.music.map((m: string) => (


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


              {user?.interests?.food.map((m: string) => (


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


              {user?.interests?.plan.map((m: string) => (


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

export default Profile;
