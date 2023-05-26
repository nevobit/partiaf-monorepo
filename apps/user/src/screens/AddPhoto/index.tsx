import React from 'react';
import {View} from '../../components/Layout/Theme';
import {Text, TouchableOpacity, View as DefaultView} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const AddPhoto = ({navigation}: any) => {
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
          style={{
            backgroundColor: colors.dark.holderColor,
            height: 130,
            width: 130,
            borderRadius: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="cloud-upload-outline" size={50} color="#000" />
        </TouchableOpacity>
      </DefaultView>
      <DefaultView
        style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
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
          onPress={() => navigation.navigate('Preferences')}
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
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default AddPhoto;
