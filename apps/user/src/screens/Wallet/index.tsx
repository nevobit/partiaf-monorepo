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
  StatusBar,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/queries/users';
import { useEffect } from 'react';
import { DivisaFormater } from '../../utilities/divisaFormater';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import colors from '../../components/Layout/Theme/colors';
import { BottomSheet } from '../../containers';
import Header from '../../components/Layout/Header';
import Modal from '../../containers/Modal';
const Wallet = ({ navigation }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data: userInfo, loading, refetch } = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const userI = userInfo?.getUserById; 

  const [paymentInfo, setPaymentInfo] = useState();
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [url, setUrl] = useState();

  console.log({userI})
  const createOrder = async () => {
    setIsLoading(true);
    try{
      const { data } = await axios.post('https://partiaf-api.xyz/api/v3/create-order', {
        price: amount,
        userId: userI?.id
      });
      setPaymentInfo(data)
      setUrl(data.init_point);
      setOpenModal(false)
      setIsLoading(false);
    }catch(err:any){
      setOpenModal(false)
      setIsLoading(false);
      console.log(err)
      Alert.alert('Error', `Ocurrio un error al intentar hacer el pago, ${err}`)
    }


  }

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>

    <View
      style={{
        minHeight: '100%',
      }}>

      <Header navigation={navigation} back wallet />
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
            {DivisaFormater(userI?.balance)}
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
            opacity: .5
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
            opacity: .5
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
            opacity: .5
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
            opacity: .5
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

      <Modal isVisible={openModal} setIsVisible={setOpenModal}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 16,
          marginBottom: 20
        }}>Valor a recargar</Text>
        <TextInput
          onChangeText={(text) => setAmount(Number(text))}
          keyboardType='numeric' style={{
            color: "#fff",
            fontSize: 16,
            height: 60,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 15,
            marginBottom: 15
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
          {isLoading ? <ActivityIndicator size='small' /> : (

            <Text style={{
              fontWeight: '600',
              fontSize: 16,
              color: '#333'
            }}>Continuar</Text>
          )}

        </TouchableOpacity>
      </Modal>
    </View>
    {url && 

    <View 
              style={{
                flex: 1,
                position: 'absolute',
                top: 0,
                right: 0,
                height: '100%',
                width: "100%",
              backgroundColor: '#fff',
                zIndex: 9999999999,
              }}

              
    >
        <StatusBar backgroundColor="#fff" barStyle='dark-content' />
        <WebView
          originWhitelist={['*']}
          source={{ uri: url }}
          onError={(err) => console.log(err)}
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '100%',
            zIndex: 9999999999,
          }}
          startInLoadingState={true}
        />
    </View>
  }
    </>
  );
};

export default Wallet;