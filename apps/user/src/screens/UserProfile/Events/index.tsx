import React, { useEffect } from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_GOERS_BY_ID, GET_GOERS_BY_USER_ID } from '../../../graphql/queries/goers';
import colors from '../../../components/Layout/Theme/colors';

const Events = ({navigation, route, id}:any) => {
  const {user} = useSelector((state: any) => state.auth);

  const {data: tickets, refetch} = useQuery(GET_GOERS_BY_ID, {
    variables: { id: id },
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
    <View
      style={{
        padding: 10,
      }}>
      <ScrollView>
      {tickets?.getGoersByUserId?.map((ticket:any) => (

<TouchableOpacity 
onPress={() => navigation.navigate('TicketDetails')}
style={{
  backgroundColor: '#fff',
  marginTop: 20,
  borderRadius: 5,
  paddingHorizontal: 10,
  paddingVertical: 5,
  flexDirection: 'row',
}}
key={ticket.id}
>
  <View style={{
    width: '65%',
    padding: 10,
  }}>
    <Text style={{
      fontSize: 12
    }}>ID 2000 | Ticket | <Text style={{
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
    }}>10 Junio 2023 | 10:00PM</Text>
    <Text style={{
      fontSize: 14,
      fontWeight: '500',
    }}>Santa Marta - Colombia</Text>
  </View>
  <View style={{
    position: 'relative'
  }}>
    
    <View style={{
      backgroundColor: 'black',
      height: 25,
      width: 25,
      borderRadius: 100,
      position: 'absolute',
      top: -16
    }} />
    
    <View style={{
      backgroundColor: 'black',
      height: 25,
      width: 25,
      borderRadius: 100,
      position: 'absolute',
      bottom: -16
    }} />
    
    <View style={{
      marginTop:3
    }}>
      
   
    
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 12,
      left: 13
    }} />
    
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 27,
      left: 13
    }} />
    
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 42,
      left: 13
    }} />
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 57,
      left: 13
    }} />
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 72,
      left: 13
    }} />
    
    <View style={{
      backgroundColor: 'black',
      height: 10,
      width: 1,
      borderRadius: 100,
      position: 'absolute',
      top: 97,
      left: 13
    }} />
    </View>
      <Image style={{
        width: 100,
        height: 100,
        marginLeft: 19,
        marginTop: -3
      }} source={{
        uri:'https://i.ibb.co/n14Qpb9/qrcode.png'
      }} />
  </View>
</TouchableOpacity>
))}
      </ScrollView>
    </View>
  );
};

export default Events;
