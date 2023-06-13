import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View as DefaultView,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import {View} from '../../components/Layout/Theme';
import DismissKeyboard from '../../components/Layout/DimissKeyboard';
import {useDispatch} from 'react-redux';
import {signin} from '../../features/auth';
import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../../graphql/mutations';

const Signin = ({navigation}: any) => {
  const [user, setUser] = useState({
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [login] = useMutation(LOGIN_USER);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(user);
      const {data} = await login({
        variables: {
          ...user,
        },
      });
      dispatch(signin({...data.userSignin}));
      setLoading(false);
    } catch (err) {
      console.log(err);
      if(err instanceof Error){
        if(err.message == 'Invalid crednetials'){
          setError('Credenciales invalidas');                  
        }
      }
      setLoading(false);
    }
  };

  if (error.length > 0) {
    setTimeout(() => {
      setError('');
    }, 9000);
  }

  return (
    <DismissKeyboard>
      <View
        style={{
          height: '100%',
          paddingTop: Platform.OS == 'ios' ? 150 : 0,
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            textAlign: 'center',
            fontWeight: '600',
            paddingTop: 150,
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
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholderTextColor="rgba(255,255,255,.5)"
            style={{
              paddingHorizontal: 10,
              height: 50,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, .5)',
              borderRadius: 15,
              fontSize: 14,
              color: 'white',
            }}
            onChangeText={text => setUser(prev => ({...prev, ['phone']: text}))}
            placeholder="Telefono"
          />
          <TextInput
            placeholderTextColor="rgba(255,255,255,.5)"
            style={{
              paddingHorizontal: 10,
              height: 50,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, .5)',
              borderRadius: 15,
              fontSize: 14,
              color: 'white',
            }}
            secureTextEntry
            onChangeText={text =>
              setUser(prev => ({...prev, ['password']: text}))
            }
            placeholder="Contrasena"
          />
          <TouchableOpacity
            disabled={user.password.length < 1 || user.phone.length < 1}
            style={{
              backgroundColor: colors.dark.primary,
              height: 50,
              borderRadius: 15,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={onSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, .9)',
                }}>
                Iniciar sesion
              </Text>
            )}
          </TouchableOpacity>
        </DefaultView>
        <Text style={{
            color: 'red',
            paddingHorizontal: 10,
            paddingTop: 10
          }}>{error}</Text>

        <DefaultView
          style={{
            marginTop: 40,
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
    </DismissKeyboard>
  );
};

export default Signin;
