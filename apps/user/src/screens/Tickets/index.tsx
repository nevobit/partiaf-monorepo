import React, { useEffect, useState } from 'react';
import {View} from '../../components/Layout/Theme';
import {
  View as DefaultView,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../components/Layout/Theme/colors';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_GOERS_BY_USER_ID } from '../../graphql/queries/goers';
import { GET_USER_BY_ID } from '../../graphql/queries/users';
import Header from '../../components/Layout/Header';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const Tickets = ({navigation,  route}: any) => {
  const [search, setSearch] = useState('')
  const {user} = useSelector((state: any) => state.auth);

  const {data: tickets, refetch} = useQuery(GET_GOERS_BY_USER_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  return (
    <DismissKeyboard>
      <View
        style={{
          minHeight: '100%',
        }}>
          <Header navigation={navigation} back ticket />

        <DefaultView
          style={{
            padding: 10,
          }}>
          <TextInput
            placeholderTextColor="rgba(255, 255, 255,.4)"
            placeholder="Buscar tikcet"
            style={{
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,.8)',
              borderRadius: 10,
              color: '#fff',
              fontSize: 16,
              paddingHorizontal: 10,
              height: 50,
            }}
          />
        </DefaultView>
        <DefaultView style={{
          paddingHorizontal: 10,
        }}>
          <DefaultView style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10
          }}>
            <Text style={{
              color: '#fff'
            }}>Todos los Tickets</Text>
            <TouchableOpacity ><Text style={{
                color: colors.dark.primary
              }}>Ver todos</Text></TouchableOpacity>
          </DefaultView>

        </DefaultView>
        <ScrollView contentContainerStyle={{
          paddingBottom: 80,
          paddingHorizontal: 10
        }}>

{tickets?.getGoersByUserId?.map((ticket:any) => (

<TouchableOpacity 
onPress={() => navigation.navigate('TicketDetails', {id: ticket.id})}
style={{
  backgroundColor: '#fff',
  marginTop: 20,
  borderRadius: 5,
  // height: 100,
  paddingVertical: 10,
  flexDirection: 'row',
}}
key={ticket.id}
>
  <DefaultView style={{
    width: '65%',
    padding: 10,
  }}>
    <Text style={{
      fontSize: 12,
      color: '#000'
    }}>ID {ticket.id.slice(0,8).toUpperCase()} | Ticket | <Text style={{
      color: "green"
    }}>EN-USO</Text></Text>
    <Text style={{
      fontSize: 16,
      fontWeight: '600',
      color: colors.light.text
    }}>{ticket.name}</Text>
    <Text style={{
      fontSize: 14,
      fontWeight: '500',
      color: '#000'
    }}>10 Junio 2023 | {ticket.ticket.hour}</Text>
    <Text style={{
      fontSize: 14,
      fontWeight: '500',
      color: '#000'
    }}>Santa Marta - Colombia</Text>
  </DefaultView>
  <DefaultView style={{
    position: 'relative'
  }}>
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 25,
      width: 25,
      borderRadius: 100,
      position: 'absolute',
      top: -16
    }} />
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 25,
      width: 25,
      borderRadius: 100,
      position: 'absolute',
      bottom: -16
    }} />
    
    <DefaultView style={{
      marginTop:3
    }}>
      
   
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 12,
      left: 13
    }} />
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 27,
      left: 13
    }} />
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 42,
      left: 13
    }} />
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 57,
      left: 13
    }} />
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 72,
      left: 13
    }} />
    
    <DefaultView style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 97,
      left: 13
    }} />
    </DefaultView>
      <Image style={{
        width: 100,
        height: 100,
        marginLeft: 19,
        marginTop: -3
      }} source={{
        uri:'https://i.ibb.co/n14Qpb9/qrcode.png'
      }} />
  </DefaultView>
</TouchableOpacity>
))}
</ScrollView>
      </View>
    </DismissKeyboard>
  );
};

export default Tickets;
