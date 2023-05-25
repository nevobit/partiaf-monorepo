import React, {useState} from 'react';
import {View} from '../../components/Layout/Theme';
import {Text, TouchableOpacity, View as DefaultView} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const UserType = ({navigation}: any) => {
  const [selected, setSelected] = useState('personal');

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
          paddingHorizontal: 10,
          paddingTop: 20
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
        Tipo de usuario
      </Text>
      <Text
        style={{
          color: 'rgba(255,255,255,0.6)',
          paddingHorizontal: 10,
        }}>
        En Partiaf no solo puedes divertirte!
      </Text>

      <DefaultView
        style={{
          marginTop: 60,
          gap: 20,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor:
              selected == 'personal'
                ? colors.dark.primary
                : colors.dark.holderColor,
            height: 50,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Photo')}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Cuenta Personal
          </Text>
          <Icon name="chevron-forward-outline" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selected == 'promoter'
                ? colors.dark.primary
                : colors.dark.holderColor,
            height: 50,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Photo')}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Promotor
          </Text>
          <Icon name="chevron-forward-outline" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selected == 'artist'
                ? colors.dark.primary
                : colors.dark.holderColor,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => setSelected('artist')}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Artista
          </Text>
          <Icon name="chevron-forward-outline" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selected == 'worker'
                ? colors.dark.primary
                : colors.dark.holderColor,
            height: 50,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Photo')}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Colaborador
          </Text>
          <Icon name="chevron-forward-outline" size={27} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor:
              selected == 'admin'
                ? colors.dark.primary
                : colors.dark.holderColor,
            height: 50,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Photo')}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Administrador
          </Text>
          <Icon name="chevron-forward-outline" size={27} color="#000" />
        </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default UserType;
