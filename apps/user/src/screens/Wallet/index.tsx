import React from 'react';
import {View} from '../../components/Layout/Theme';
import {
  ScrollView,
  View as DefaultView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {GET_USER_BALANCE} from '../../graphql/queries/users';
import {useEffect} from 'react';
import {DivisaFormater} from '../../utilities/divisaFormater';

const Wallet = ({navigation}: any) => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, refetch} = useQuery(GET_USER_BALANCE, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <View
      style={{
        minHeight: '100%',
      }}>
      <DefaultView
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 15,
          paddingBottom: 15,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <Icon name="chevron-back-outline" size={23} color="#fff" />
        </TouchableOpacity>
        <Image
          style={{
            width: 110,
            height: 18,
            resizeMode: 'contain',
            tintColor: 'rgba(255,255,255,.9)',
          }}
          source={{
            uri: 'https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png',
          }}
        />
        <DefaultView
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <TouchableOpacity>
            <Icon name="qr-code-outline" size={23} color="#fff" />
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
      <DefaultView
        style={{
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            color: 'rgba(255,255,255,.6)',
            fontWeight: '300',
            fontSize: 16,
          }}>
          Balance total
        </Text>
        {loading ? (
          <ActivityIndicator color="rgba(255,255,255,0.5)" />
        ) : (
          <Text
            style={{
              color: 'rgba(255,255,255,1)',
              fontWeight: '600',
              fontSize: 30,
            }}>
            {DivisaFormater(data?.getUserById.balance)}
          </Text>
        )}
      </DefaultView>

      <DefaultView
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          paddingVertical: 15,
          justifyContent: 'space-between',
        }}>
        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(255,255,255,.05)',
              height: 50,
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-redo-outline" size={20} color="#fff" />
          </DefaultView>
          <Text
            style={{
              color: '#fff',
            }}>
            Enviar
          </Text>
        </DefaultView>

        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(255,255,255,.05)',
              height: 50,
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="arrow-undo-outline" size={20} color="#fff" />
          </DefaultView>
          <Text
            style={{
              color: '#fff',
            }}>
            Recibir
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(255,255,255,.05)',
              height: 50,
              width: 50,
              borderRadius: 10,

              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="newspaper-outline" size={20} color="#fff" />
          </DefaultView>
          <Text
            style={{
              color: '#fff',
            }}>
            Historial
          </Text>
        </DefaultView>

        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(255,255,255,.05)',
              height: 50,
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="refresh-outline" size={20} color="#fff" />
          </DefaultView>
          <Text
            style={{
              color: '#fff',
            }}>
            Recargar
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            alignItems: 'center',
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(255,255,255,.05)',
              height: 50,
              width: 50,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="information-circle-outline" size={20} color="#fff" />
          </DefaultView>
          <Text
            style={{
              color: '#fff',
            }}>
            Info
          </Text>
        </DefaultView>
      </DefaultView>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}></ScrollView>
    </View>
  );
};

export default Wallet;
