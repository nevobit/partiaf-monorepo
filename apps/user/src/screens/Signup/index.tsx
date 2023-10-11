import React, {useState} from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View as DefaultView,
  Image,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import {useDispatch} from 'react-redux';
import {saveUserInfo} from '../../features/auth';

const Signup = ({navigation}: any) => {
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();

  const isUserValid = () => {
    return (
      user.firstname !== '' &&
      user.lastname !== '' &&
      user.phone !== '' &&
      user.password !== ''
    );
  };
  const onSubmit = () => {
    dispatch(saveUserInfo(user));
    navigation.navigate('UserType');
  };

  return (
    <View
      style={{
        height: '100%',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 35,
          textAlign: 'center',
          fontWeight: '600',
          paddingTop: 100,
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
        Los eventos mas divertidos, crea tu cuenta ahora!
      </Text>

      <DefaultView
        style={{
          marginTop: 60,
          gap: 20,
          paddingHorizontal: 10,
        }}>
        <DefaultView
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
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
              width: '47%',
              height: 50,
            }}
            placeholder="Nombre"
            onChangeText={text => setUser(prev => ({...prev, firstname: text}))}
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
              width: '47%',
              height: 50,
            }}
            placeholder="Apellido"
            onChangeText={text => setUser(prev => ({...prev, lastname: text}))}
          />
        </DefaultView>

        <TextInput
          placeholderTextColor="rgba(255,255,255,.5)"
          style={{
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, .5)',
            borderRadius: 15,
            fontSize: 14,
            color: 'white',
            height: 50,
          }}
          placeholder="Telefono"
          onChangeText={text => setUser(prev => ({...prev, phone: text}))}
        />
        <TextInput
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,.5)"
          style={{
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, .5)',
            borderRadius: 15,
            fontSize: 14,
            color: 'white',
            height: 50,
          }}
          placeholder="Contrasena"
          onChangeText={text => setUser(prev => ({...prev, password: text}))}
        />

        <TouchableOpacity
          onPress={onSubmit}
          disabled={!isUserValid()}
          style={{
            backgroundColor: !isUserValid()
              ? 'rgb(100,100,100)'
              : colors.dark.primary,
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
            Registrarme
          </Text>
        </TouchableOpacity>
      </DefaultView>

      <DefaultView
        style={{
          marginTop: 60,
        }}>
        {/* <Text
          style={{
            color: colors.dark.text,
            textAlign: 'center',
          }}>
          O registrate con
        </Text> */}
        <DefaultView
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 25,
            marginBottom: 60,
          }}>
          {/* <DefaultView
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
          </DefaultView> */}
          {/* <DefaultView
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
          </DefaultView> */}
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
            Ya tienes una cuenta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text
              style={{
                color: colors.dark.primary,
              }}>
              Inicia sesion ahora
            </Text>
          </TouchableOpacity>
          
        </DefaultView>
        <TouchableOpacity onPress={() => navigation.navigate('Privacity')}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                marginTop: 15,
                fontSize: 16
              }}>
              Politica de Privacidad y Tratamiento de datos
            </Text>
          </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default Signup;
