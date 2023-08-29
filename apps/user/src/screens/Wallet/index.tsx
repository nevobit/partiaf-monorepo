import React, { useState } from 'react';
import { View } from '../../components/Layout/Theme';
import {
  ScrollView,
  View as DefaultView,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/queries/users';
import { useEffect } from 'react';
import { DivisaFormater } from '../../utilities/divisaFormater';
import axios from 'axios';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import colors from '../../components/Layout/Theme/colors';
import { BottomSheet } from '../../containers';

const Wallet = ({ navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data, loading, refetch } = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const [paymentInfo, setPaymentInfo] = useState();
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState("");

  const createOrder = async () => {
    const { data } = await axios.post('https://partiaf-api.xyz/api/v3/create-order', {
      price: amount
    });
    setPaymentInfo(data)
    if (!await Linking.canOpenURL(data.init_point)) {
      await Linking.openURL(data.init_point);
    // setUrl(data.init_point);
    // setOpen(true);
    } else {
    console.log("No se puede abrir la URL:", data.init_point);
    }
  }

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

        <TouchableOpacity
          onPress={() => setOpenModal(true)}
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
        </TouchableOpacity>
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
        }}>
      </ScrollView>

      {/* {openModal && (

        <DefaultView style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 230,
          zIndex: 99,
          paddingHorizontal: 15,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: colors.dark.modal,
          alignItems: 'center'
        }}>
          <DefaultView style={{
            backgroundColor: '#fff',
            height: 5,
            width: 30,
            borderRadius: 100,
            marginTop: 10,

          }} />
          <TextInput
            onChangeText={(text) => setAmount(Number(text))}
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 15,
              marginBottom: 20,
              paddingHorizontal: 20,
              marginTop: 'auto',
              width: '100%',
              color: '#fff'
            }} placeholderTextColor={colors.dark.holderColor} placeholder='Ingresa el valor a recargar' />
          <TouchableOpacity
            onPress={createOrder}
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
            }}>Continuar</Text>
          </TouchableOpacity>
        </DefaultView>
      )} */}

      <BottomSheet isVisible={openModal} setIsVisible={setOpenModal}>
        <TextInput keyboardType='numeric' style={{
          color: "#fff",
          fontSize: 18,
          height: 60
        }}
        placeholder='Valor a recargar'
        placeholderTextColor={colors.dark.holderColor}
        />
        <TouchableOpacity
            onPress={createOrder}
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
            }}>Continuar</Text>
          </TouchableOpacity>
      </BottomSheet>
      {open && <MyWebView url={url} />}
    </View>
  );
};

export default Wallet;

const MyWebView = ({ url }: any) => {
  return (
    <DefaultView style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%'
    }}>
      <WebView source={{ uri: url }} />;
    </DefaultView>)
};
