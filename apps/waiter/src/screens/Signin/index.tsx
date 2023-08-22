import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import {colors} from '../../layout/theme/colors';
import {DismissKeyboard} from '../../layout/DismissKeyboard';
import { useDispatch } from 'react-redux';
import { signin } from '../../features/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations/auth';

export const Signin = ({navigation}: any) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    phone: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [login] = useMutation(LOGIN_USER);

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

  const handlePhoneChanged = (input: string) => setUser(prev => ({...prev, ['phone']: input}));
  const handlePasswordChanged = (input: string) => setUser(prev => ({...prev, ['password']: input}));


  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenido</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholderTextColor={colors.dark.textInactive}
            style={styles.input}
            onChangeText={handlePhoneChanged}
            placeholder="Telefono"
          />
          <TextInput
            placeholderTextColor={colors.dark.textInactive}
            style={styles.input}
            secureTextEntry
            onChangeText={handlePasswordChanged}
            placeholder="Contraseña"
          />

          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <Text style={styles.buttonContent}>Iniciar sesion</Text>
            )}
          </TouchableOpacity>
        </View>

        {error && <Text style={styles.errorMessage}>{error}</Text>}

        <View style={styles.footer}>
          {/* <Text
            style={{
              color: colors.dark.text,
              textAlign: 'center',
            }}>
            O inicia sesion con
          </Text> */}
          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 20,
              marginTop: 25,
              marginBottom: 60,
            }}>
            <View
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
            </View>
            <View
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
            </View>
          </View> */}

          {/* <View
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
          </View> */}
        </View>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 28,
    backgroundColor: colors.dark.background,
    flexDirection: 'column',
  },
  header: {
    height: '25%',
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.dark.text,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '600',
  },
  form: {
    height: '50%',
    gap: 28,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 15,
    height: 50,
    borderWidth: 2,
    borderColor: colors.dark.textInactive,
    borderRadius: 15,
    fontSize: 14,
    color: colors.dark.text,
  },
  forgot: {
    color: colors.dark.primary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.dark.primary,
    height: 50,
    borderRadius: 15,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.dark.background,
  },
  errorMessage: {
    color: 'red',
    paddingHorizontal: 10,
  },
  footer: {
    height: '25%',
  },
});
