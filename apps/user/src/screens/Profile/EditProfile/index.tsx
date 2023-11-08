import React, { useState } from 'react'
import { View } from '../../../components/Layout/Theme'
import { Text, View as DefaultView, TouchableOpacity, Pressable, Image, TextInput, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useUpdateUser, useUploadImage, useUser } from '../../../hooks'
import colors from '../../../components/Layout/Theme/colors'

const EditProfile = ({ navigation }: any) => {
    const { user, isLoading, refetch } = useUser();
    const { photo, isLoading: isLoadingPhoto, error, getPhoto } = useUploadImage();
    const [changeStatus, setChangeStatus] = useState(true);
    const [userToUpdate, setUserToUpdate] = useState({
        firstname: user.firstname,
        lastname: user.lastname,
        isPrivate: user.isPrivate,
        biography: user.biography,
        photo: user.photo
    });

    const { updatedUser, updateUserFn, isLoading: isLoadingUpdate } = useUpdateUser(userToUpdate);

    const handleUpdateUser = async () => {
        await setUserToUpdate((prev) => ({...prev, photo: [photo? photo : user.photo]}))
        await updateUserFn();
        refetch();
        navigation.navigate('Profile');
    }
    return (
        <View style={{
            paddingHorizontal: 10,
            flex: 1
        }}>
            <DefaultView style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 20,
                paddingBottom: 10,
            }}>

                <DefaultView
                    style={{
                        flexDirection: 'row',
                        gap: 15,
                        alignItems: 'center'
                    }}>


                    <TouchableOpacity
                        onPress={() => navigation.navigate('Profile')}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                    <Text style={{
                        color: '#fff',
                        fontSize: 16
                    }}>Editar Perfil</Text>


                </DefaultView>
            </DefaultView>
            <DefaultView style={{
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <TouchableOpacity
                onPress={getPhoto}
                style={{
                    backgroundColor: colors.dark.holderColor,
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    marginTop: 20,
                }}>

                    
                    {isLoadingPhoto ? <ActivityIndicator size='large' color='#fff' /> : 
                    
                    (

                    <>
                {user.photo[0] && photo.length < 5 ? (
                    <Image
                        style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'contain'
                        }}
                        source={{
                            uri: user.photo[0]
                        }} />
                ) : (

                    <>
                        {

                            photo?.length > 5 ? (
                                <Image
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        resizeMode: 'contain'
                                    }}
                                    source={{
                                        uri: photo
                                    }} />
                            ) : (
                                <Icon name="cloud-upload-outline" size={50} color="#000" />

                            )}


                    </>

                )}
                    </>
                    )}




            </TouchableOpacity>
            <Text style={{
            color: '#fff',
            marginTop: 10
          }}>{user.photo[0] ? 'Cambiar foto de perfil': 'Seleccionar foto de perfil'}  </Text>
            </DefaultView>
      

            {/* <TouchableOpacity onPress={getPhoto} style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 20,
            }}>
          <Image
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              resizeMode: 'cover',
            }}
            source={{
              uri: isLoadingPhoto? <ActivityIndicator size='large' color="#fff" /> : user.photo[0] ? photo.length < 5? user.photo[0] : photo : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
            }}
          />
    
        </TouchableOpacity> */}
            <DefaultView style={{
                flexDirection: 'row',
                gap: 10
            }}>


                <DefaultView style={{
                    marginTop: 40,
                    width: '49%'
                }}>
                    <Text style={{
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14,
                        marginBottom: 10
                    }}>Nombre</Text>
                    <TextInput placeholder='' style={{
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,.6)',
                        borderRadius: 10,
                        padding: 10,
                        height: 50

                    }} value={userToUpdate.firstname} />
                </DefaultView>

                <DefaultView style={{
                    marginTop: 40,
                    width: '49%'

                }}>
                    <Text style={{
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 14,
                        marginBottom: 10
                    }}>Apellido</Text>
                    <TextInput placeholder='' style={{
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,.6)',
                        borderRadius: 10,
                        padding: 10,
                        height: 50

                    }} value={userToUpdate.lastname} />
                </DefaultView>
            </DefaultView>


            <DefaultView style={{
                marginTop: 20
            }}>
                <Text style={{
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 14,
                    marginBottom: 10
                }}>Biografia</Text>
                <TextInput placeholder='Bio'
                    onChangeText={(text) => setUserToUpdate(prev => ({ ...prev, biography: text }))}
                    style={{
                        color: '#fff',
                        borderWidth: 1,
                        borderColor: 'rgba(255,255,255,.6)',
                        borderRadius: 10,
                        paddingHorizontal: 10,
                        height: 50
                    }} placeholderTextColor='rgba(255,255,255,0.5)' value={userToUpdate.biography} />
            </DefaultView>

            <TouchableOpacity
                style={{
                    backgroundColor: colors.dark.primary,
                    height: 50,
                    borderRadius: 15,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: 'auto',
                    marginBottom: 20,
                    position: 'absolute',
                    bottom: 0
                }}
                onPress={() => handleUpdateUser()}
                disabled={isLoadingUpdate}
            >
                {isLoadingUpdate ? <ActivityIndicator size='small' /> : (

                    <Text
                        style={{
                            fontWeight: '500',
                            fontSize: 16,
                            color: 'rgba(0, 0, 0, .9)',
                        }}>
                        Guardar
                    </Text>
                )}

            </TouchableOpacity>

            <DefaultView style={{
                marginTop: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    color: '#fff', fontSize: 16
                }}>Cuenta privada</Text>
                <TouchableOpacity onPress={() => setUserToUpdate(prev => ({ ...prev, isPrivate: !userToUpdate.isPrivate }))}>
                    <DefaultView style={{
                        width: 60,
                        height: 30,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: 40,
                        alignItems: userToUpdate.isPrivate ? 'flex-end' : 'flex-start',
                        // alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <DefaultView style={{
                            height: 26,
                            width: 26,
                            borderRadius: 50,
                            backgroundColor: userToUpdate.isPrivate ? colors.dark.primary : 'rgba(255,255,255,0.5)'
                        }} />
                    </DefaultView>
                </TouchableOpacity>

            </DefaultView>
            <Text style={{
                color: 'rgba(255,255,255,.5)',
                fontWeight: '400',
                marginTop: 15
            }}>
                Si tu cuenta es publica cualquier persona dentro o fuera de Partiaf podra ver tus perfil y tus moments.
            </Text>
            <Text style={{
                color: 'rgba(255,255,255,.5)',
                fontWeight: '400',
                marginTop: 5
            }}>
                Si tu cuenta es privada solo tus amigos podran ver el contenido que compartas como tus moments y eventos.
            </Text>
        </View>
    )
}

export default EditProfile