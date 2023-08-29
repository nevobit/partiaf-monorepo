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

const AddPhoto = ({ navigation }: any) => {
  const [photo, setPhoto] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [tempUri, setTempUri] = useState<any>();

  const uploadImage = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', tempUri);

    try {
      const { data } = await axios.post('https://partiaf-api.xyz/api/v3/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'api-key': 'a0341d0de71a21b122a134576803f9fea2e9841a307b4e26f9240ac2f7d363ff3018a17f2d7f3ecb5a9fe62327e4eaf306864ec741e6432aa50faaf9d92aa6bd'
        },
      });

      setPhoto(data.url);
      setIsLoading(false);
    } catch (error:any) {
      setIsLoading(false);
      setError(JSON.stringify(error))
      console.log(error)
    }
  };

  const getPhoto = () => {
    launchImageLibrary({
      mediaType: 'photo'
    }, (resp) => {
      if (resp.didCancel) return;
      if (!resp.assets) return;
      if (!resp.assets[0].uri) return;

      const file = {uri: resp.assets[0].uri, name: resp.assets[0].fileName, type: resp.assets[0].type};
      setTempUri(file)
      uploadImage();
    })
  }


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

            {tempUri?.uri?.length > 5 ? (
                <Image 
                style={{
                  height:'100%',
                  width:'100%',
                  resizeMode: 'contain'
                }}
                source={{
                  uri: tempUri.uri
                }} />
            ): (
              <Icon name="cloud-upload-outline" size={50} color="#000" />

            )}


        </TouchableOpacity>
      </DefaultView>
      {/* <Text style={{color: "#fff", fontSize: 18}} >{error}</Text> */}
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
