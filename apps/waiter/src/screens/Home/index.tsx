import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
  Platform,
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
import { GET_GOERS_BY_TICKET_ID, GET_TICKETS_BY_STORE_ID } from '../../graphql/queries';
import { signoutStore } from '../../features/authStore';
import HomeTopTap from '../../navigator/HomeTopTap';

export const HomeScreen = ({navigation, route}:any) => {
  const [selected, setSelected] = useState('after-party');
  const [searchValue, onChangeValue] = useState();
  const {store} = useSelector((state: any) => state.authStore);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(signoutStore());
    setSelected('')
    navigation.navigate('home')
  };
    
  const {user} = useSelector((state: any) => state.auth);

  const {data: tickets, refetch} = useQuery(GET_TICKETS_BY_STORE_ID, {
    variables: { id: store?.id },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  })

  
  useEffect(() => {
    refetch();
  }, [refetch])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <LogoIcon width={140} height={40} color={colors.dark.primary} />
          <TouchableOpacity
            onPress={logout}
            >
              <Text style={{
                color: "#fff"
              }}>Cambiar negocio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.head}>
            <Text style={styles.title}>{store?.name}</Text>
            <CoverCount selected={selected} data={tickets?.getTicketsByStoreId} />
          </View>

          <Dropdown selected={selected} setSelected={setSelected} data={tickets?.getTicketsByStoreId} />
          <View style={{
            height: '95%',
            marginTop: -10
          }}>

          <HomeTopTap id={selected} />
          </View>

        </View>

      
      </View>

      <TouchableOpacity style={{
          width: 50,
          height: 50,
          borderWidth: 2,
          borderColor: "#fff",
          position: 'absolute',
          bottom: 20,
          right: 20,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => Platform.OS == 'android'? navigation.navigate('scanner') : navigation.navigate('scanner')}
        >
          <Image 
          style={{
            width: 25, height: 25
          }}
          source={{
            uri: 'https://i.ibb.co/SNC889R/scanner.png'
          }} />
        </TouchableOpacity>
  

     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: theme.screenPrimary,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  select: {
    position: 'relative',
  },
  body: {
    marginTop: 10,
    marginBottom: 25,
    zIndex: 0,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
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
