import React from 'react';
import { View } from '../../components/Layout/Theme';
import { Text, TouchableOpacity, View as DefaultView, Image, ActivityIndicator } from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { saveUserInfo } from '../../features/auth';
import { launchImageLibrary } from 'react-native-image-picker';
import axios, { AxiosError } from 'axios';
import { useUploadImage } from '../../hooks';

const AddPhoto = ({ navigation }: any) => {
  const { photo, isLoading, error, getPhoto } = useUploadImage(); 
  const dispatch = useDispatch();
  const onSubmit = async () => {
      dispatch(saveUserInfo({ photo: [photo] }));
      navigation.navigate('Preferences');
  };


  return (
    <View
      style={{
        height: '100%',
        padding: 10,
        paddingTop: 20,
      }}>
      <DefaultView
        style={{
          marginBottom: 20,
          paddingTop: 20,
          paddingHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserType')}>
          <Text
            style={{
              color: colors.dark.primary,
            }}>
            Atras
          </Text>
        </TouchableOpacity>
      </DefaultView>
      <DefaultView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}>
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: '#1c1c1e',
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: '#1c1c1e',
          }}
        />
      </DefaultView>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          //  textAlign: 'center',
          fontWeight: '600',
          paddingHorizontal: 10,
        }}>
        Anadir una foto
      </Text>
      <Text
        style={{
          color: 'rgba(255,255,255,0.6)',
          paddingHorizontal: 10,
        }}>
        Podras cambiarla cuando quieras
      </Text>

      <DefaultView
        style={{
          marginTop: 60,
          gap: 20,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={getPhoto}
          style={{
            backgroundColor: colors.dark.holderColor,
            height: 130,
            width: 130,
            borderRadius: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>

            {photo?.length > 5 ? (
                <Image 
                style={{
                  height:'100%',
                  width:'100%',
                  resizeMode: 'contain'
                }}
                source={{
                  uri: photo
                }} />
            ): (
              <Icon name="cloud-upload-outline" size={50} color="#000" />

            )}


        </TouchableOpacity>
      </DefaultView>
      <Text style={{color: "#ff0000", fontSize: 18}} >{error}</Text>
      <DefaultView
        style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Preferences')}
          style={{
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            alignSelf: 'center',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,

              color: colors.dark.primary,
            }}>
            Omitir
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={isLoading}
          onPress={onSubmit}
          style={{
            backgroundColor: colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}>
          {isLoading ? <ActivityIndicator size='small' /> : (

            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: 'rgba(0, 0, 0, .9)',
              }}>
              Continuar
            </Text>
          )}

        </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default AddPhoto;
