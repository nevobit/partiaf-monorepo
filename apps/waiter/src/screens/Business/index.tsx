import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
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
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/queries';

export const Business = ({navigation}:any) => {
  const [selected, setSelected] = useState('after-party');
  const [searchValue, onChangeValue] = useState();


  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });


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
            }}>{data?.getUserById.firstname} {data?.getUserById.lastname}</Text>
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

          <TouchableOpacity style={{
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
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        {/* <SearchBar
          navigation={navigation}
          searchValue={searchValue}
          onChangeValue={onChangeValue}
        /> */}
      </View>
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
