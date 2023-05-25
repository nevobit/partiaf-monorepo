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
        padding: 15,
        paddingTop: 30,
      }}>
      <DefaultView
        style={{
          marginBottom: 20,
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
        }}>
        Anadir una foto
      </Text>
      <Text
        style={{
          color: 'rgba(255,255,255,0.6)',
        }}>
        Selecciona al menos 5
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
      <TouchableOpacity
        onPress={() => navigation.navigate('Preferences')}
        style={{
          backgroundColor: colors.dark.primary,
          height: 50,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
          left: 20,
          width: '100%',
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
    </View>
  );
};

export default AddPhoto;
