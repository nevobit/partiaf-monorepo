import React from 'react'
import { View } from '../../../components/Layout/Theme'
import { View as DefaultView, TouchableOpacity, Text, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../../graphql/queries/users';
import { useEffect } from 'react';
import colors from '../../../components/Layout/Theme/colors';
import { DivisaFormater } from '../../../utilities/divisaFormater';
import { useState } from 'react';
import { CREATE_GOER } from '../../../graphql/mutations';

const Payment = ({navigation, route}: any) => {
    const {user} = useSelector((state: any) => state.auth);

    const [error, setError] = useState('')
    const [loadingGoer, setLoadingGoer] = useState(false)

    const [createGoer] = useMutation(CREATE_GOER);

    const [loader, serLoader] = useState(false);
  const {data, loading, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const {data: userInfo } = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });


  const onSubmit = async(e: any) => {
    e.preventDefault();
    setLoadingGoer(true);
    try{
      Alert.alert('Confirmar Compra', 'Seguro que deseas comprar este ticket?', [
        {
          text: 'Cancelar',
          onPress: () => {
          setLoadingGoer(false);
          return;
          },
          style: 'cancel',
        },
        {text: 'Si, seguro', onPress: async () => {
          const { data } = await createGoer({
            variables: {
              data: {
                user: userInfo?.getUserById.id,
                amount: route.params.goer.amount,
                cost: Number(route.params.goer.price),
                ticket: route.params.goer.cover,
                date: route.params.goer.date,
                description: route.params.goer.description,
                image: route.params.goer.image,
                name: route.params.goer.name,
                time: route.params.goer.hour,
                entry_status: 'in_list',
              },
            },
            
          }); 
          setLoadingGoer(false);
          navigation.navigate('Tickets')
        }},
      ]);

      
    }catch(err){
      setError(JSON.stringify(err))
        console.log(err)
        setLoadingGoer(false)
        Alert.alert(String(err))
    }
  }


  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <View style={{
        minHeight: '100%',
      }}>
       <DefaultView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 99,
          paddingVertical: 40,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack({store:  route.params.store})}
          style={{
            backgroundColor: 'rgba(0,0,0,.8)',
            borderRadius: 100,
            padding: 3,
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="chevron-back-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </DefaultView>

      <DefaultView
        style={{
          position: "relative",
          height: "auto",
          marginTop: 50
        }}
      >
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors.dark.border,
          }}
        >
          <Text style={{ fontSize: 18, color: colors.dark.text }}>
            {" "}
            <Icon style={{ fontSize: 20 }} name="ios-wallet-outline" />{" "}
            Saldo disponible{" "}
          </Text>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "600",
              color: colors.dark.text,
            }}
          >
            {" "}
            {DivisaFormater(data?.getUserById?.balance)}
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors.dark.border,
          }}
        >
          <Text style={{ fontSize: 18, color: colors.dark.text }}>
            {" "}
            Total a pagar{" "}
          </Text>
          <Text
            style={{
              fontSize: 26,
              fontWeight: "600",
              color: colors.dark.text,
            }}
          >
            {" "}
            {DivisaFormater(route.params.goer.price * route.params.goer.amount)}
          </Text>
        </DefaultView>
        <DefaultView
          style={{
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: colors.dark.border,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              display: "flex",
              color: colors.dark.text,
            }}
          >
            {" "}
            <Icon
              name="ios-clipboard-outline"
              style={{
                fontSize: 22,
              }}
            />{" "}
            Detalles de la compra{" "}
          </Text>
        </DefaultView>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            paddingHorizontal: 20,
            paddingTop: 10,
            marginBottom: 8,
            color: colors.dark.text,
          }}
        >
          {/* {coverInfo.storeName} */}
        </Text>
        <DefaultView
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: colors.dark.text,
            }}
          >
            {route.params.goer.amount} Tickets
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: colors.dark.text,
            }}
          >
            {DivisaFormater(route.params.goer.price)}
          </Text>
        </DefaultView>
     
      </DefaultView>
      <DefaultView
            style={{
                flex: 1, 
                justifyContent: 'flex-end', 
                marginBottom: 10
            }}
        >
          <TouchableOpacity
            style={{
             backgroundColor:data?.getUserById?.balance >= route.params.goer.price
                   ? "#FFE243"
                   : "#CA0B00",
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
            }}
             onPress={
              data?.getUserById?.balance >= route.params.goer.price
                 ? onSubmit
               :() =>  navigation.navigate("Wallet")
             }

          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                letterSpacing: 1,
                 color:
                   data?.getUserById?.balance >= route.params.goer.price
                     ? "rgba(0,0,0,0.8)"
                     : "#fff",
                textTransform: "uppercase",
              }}
            >
                    
              {data?.getUserById?.balance >= route.params.goer.price
                 ? loadingGoer? <ActivityIndicator color="#333" />  : 'PAGAR'  
                 : "RECARGAR"}
            </Text>
          </TouchableOpacity>
        </DefaultView>
    </View>
  )
}

export default Payment
