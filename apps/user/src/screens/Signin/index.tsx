import React from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View as DefaultView,
  Image,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';

const Signin = ({navigation}: any) => {
  return (
    <View
      style={{
        height: '100%',
        padding: 20,
        paddingTop: 150,
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          textAlign: 'center',
          fontWeight: '600',
        }}>
        Bienvenido a Partiaf
      </Text>
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          fontWeight: '300',
          color: 'rgba(255, 255, 255,.8)',
        }}>
        Los eventos mas divertidos, inicia sesion ahora!
      </Text>

      <DefaultView
        style={{
          marginTop: 60,
          gap: 20,
        }}>
        <TextInput
          placeholderTextColor="rgba(255,255,255,.5)"
          style={{
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, .5)',
            borderRadius: 15,
            fontSize: 14,
            color: 'white',
          }}
          placeholder="Telefono"
        />
        <TextInput
          placeholderTextColor="rgba(255,255,255,.5)"
          style={{
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, .5)',
            borderRadius: 15,
            fontSize: 14,
            color: 'white',
          }}
          placeholder="Contrasena"
        />

        <TouchableOpacity
          style={{
            backgroundColor: colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Iniciar sesion
          </Text>
        </TouchableOpacity>
      </DefaultView>

      <DefaultView
        style={{
          marginTop: 60,
        }}>
        <Text
          style={{
            color: colors.dark.text,
            textAlign: 'center',
          }}>
          O inicia sesion con
        </Text>
        <DefaultView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 25,
            marginBottom: 60,
          }}>
          <DefaultView
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255, .5)',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={{
                uri: 'https://i.ibb.co/jVGrc2n/google-logo.png',
              }}
            />
          </DefaultView>
          <DefaultView
            style={{
              width: 40,
              height: 40,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255, .5)',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 26,
                height: 26,
              }}
              source={{
                uri: 'https://i.ibb.co/9rrxgzF/apple-emblem.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>

        <DefaultView
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 10,
          }}>
          <Text
            style={{
              color: colors.dark.text,
            }}>
            No tienes una cuenta?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
            style={{}}>
            <Text
              style={{
                color: colors.dark.primary,
              }}>
              Registrate ahora
            </Text>
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
    </View>
  );
};

export default Signin;
