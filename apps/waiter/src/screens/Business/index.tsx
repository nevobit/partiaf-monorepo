import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import {CoverItem} from '../../components/CoverItem';
import {Dropdown} from '../../components/Dropdown';
import {CoverCount} from '../../components/CoverCount';

import LogoIcon from '../../assets/icons/logo-partiaf-neg.svg';
import CheckIcon from '../../assets/icons/check.svg';

import {theme} from '../../theme';
import {data} from '../../data/covers';
import {colors} from '../../layout/theme/colors';
import {SearchBar} from '../../components/SearchBar';
import { signout } from '../../features/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_BY_ID, REGISTER_STORE } from '../../graphql/queries';
import { signinStore } from '../../features/authStore';

export const Business = ({navigation}:any) => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const[code, setCode] = useState('');
  const[open, setOpen] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [errorRegister, setErrorRegister] = useState('');


  const [register] = useMutation(REGISTER_STORE);
    
  const onRegister = async () => {
    setIsRegister(true);
    try {
      const { data } = await register({
        variables: {
          code,
        },
        context: {
          headers: {
            authorization: user.token ? `Bearer ${user.token}` : '',
          },
        },
      });
      setIsRegister(false);
      setOpen(false);
      refetch();
    } catch (err) {
      console.log(err);
      if(err instanceof Error){
        if(err.message == 'Store registered'){
            setOpen(false);
            refetch();
        }else{
          Alert.alert('Credenciales invalidas')
          if(err.message == 'Invalid crednetials'){
            setErrorRegister('Credenciales invalidas');                  
          }  
        }
      }
      setIsRegister(false);
    }
  };

  const onSubmit = async (info: any) => {
    try {
      console.log(user);
      dispatch(signinStore(info));
      navigation.navigate('covers')
    } catch (err) {
      console.log(err);
      if(err instanceof Error){
        if(err.message == 'Invalid crednetials'){
          // setError('Credenciales invalidas');                  
        }
      }
      // setLoading(false);
    }
  };


  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <LogoIcon width={120} height={40} color={colors.dark.primary} />
          <TouchableOpacity
            onPress={logout}
            >
            <TouchableOpacity onPress={logout}>
                <Text style={{
                    color: colors.dark.text
                }}>Cerrar Sesion</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <View style={{
                alignItems: 'center',
                marginBottom: 10
            }}>

            <Image source={{
                uri: 'https://i.ibb.co/nPhc5fd/default.jpg'
            }} style={{
                width: 80,
                height: 80,
                borderRadius: 50
            }} />
            </View>

          <View style={styles.head}>
            <Text style={{
                color: '#fff',
                fontSize: 16,
                textAlign: 'center'
            }}>{data?.getUserById?.firstname} {data?.getUserById?.lastname}</Text>
          </View>

          <View style={{
            marginTop: 5
          }}>
            <Text style={{
                color: '#fff',
                fontSize: 13,
                textAlign: 'center'
            }}>Por favor selecciona un negocio</Text>
          </View>

          <TouchableOpacity 
          onPress={() => setOpen(true)}
          style={{
            backgroundColor: colors.dark.primary,
            padding: 12,
            borderRadius: 15,
            marginTop: 20
          }}>
            <Text style={{
                textAlign: 'center',
                color: colors.dark.background,
                fontWeight: '500'
            }}>Asociarse a un Negocio</Text>
          </TouchableOpacity>

          {data?.getUserById?.stores.map((store:any) => (

          <TouchableOpacity 
          key={store.id}
          onPress={() => onSubmit(store)}
          style={{
            backgroundColor: colors.dark.tabIconDefault,
            padding: 12,
            borderRadius: 15,
            marginTop: 20
          }}>
            <Text style={{
                textAlign: 'center',
                color: colors.dark.background,
                fontWeight: '500'
            }}>{store.name}</Text>
          </TouchableOpacity>
          ))}

</View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        {/* <SearchBar
          navigation={navigation}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
        /> */}
      </View>

      {open && (

      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 230,
        zIndex:99,
        paddingHorizontal: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: colors.dark.modal,
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#fff',
          height: 5,
          width: 30,
          borderRadius: 100,
          marginTop: 10,
          
        }} />
        <TextInput
        onChangeText={(text) => setCode(text)}
        style={{
          borderWidth: 1,
          borderColor: '#fff',
          borderRadius: 15,
          marginBottom: 20,
          paddingHorizontal: 20,
          marginTop: 'auto',
          width: '100%',
          color: '#fff'
        }} placeholderTextColor={colors.dark.textInactive} placeholder='Ingresa el codigo del negocio' />
        <TouchableOpacity 
        onPress={onRegister}
        style={{
          backgroundColor: colors.dark.primary,
          borderRadius: 15,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 45,
          width: '100%',
          
        }}>
          <Text style={{
            fontWeight: '600',
            fontSize: 16,
            color: '#333'
          }}>{isRegister? <ActivityIndicator size={'small'} />  : 'Registrar'}</Text>
        </TouchableOpacity>
      </View>
      )}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: theme.screenPrimary,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
  },
  select: {
    position: 'relative',
  },
  body: {
    marginTop: 20,
    marginBottom: 25,
    zIndex: 0,
  },
  head: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  title: theme.title,
  subtitle: theme.subtitle,
  list: {
    gap: 10,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: theme.roundButton,
  gradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
});
