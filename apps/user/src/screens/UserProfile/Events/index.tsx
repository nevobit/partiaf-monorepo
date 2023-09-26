import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_GOERS_BY_ID, GET_GOERS_BY_USER_ID } from '../../../graphql/queries/goers';
import colors from '../../../components/Layout/Theme/colors';

const Events = ({ navigation, route, id }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  const { data: tickets, refetch } = useQuery(GET_GOERS_BY_ID, {
    variables: { id: id },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });


  console.log(tickets?.getGoersById[0]?.ticket)

  useEffect(() => {
    refetch();
  }, [refetch]);
  return (
    <View
      style={{
        padding: 10,
      }}>
      <ScrollView>
        {tickets?.getGoersById?.map((ticket: any) => (

          <TouchableOpacity
          onPress={() => navigation.navigate('Ticket', {ticket: ticket.ticket})}
            style={{
              backgroundColor: '#1D1C21',
              marginTop: 20,
              borderRadius: 15,
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection: 'row',
            }}
            key={ticket.id}
          >
           <View style={{
    width: '100%',
    padding: 10,
  }}>
    <View style={{
      flexDirection: 'row'
    }}>
    <Text style={{
      color: '#fff',
      fontSize: 18,
      fontWeight: '600'
    }}>
    {ticket.name}
    </Text>
    <Text style={{
      color: "#333",
      fontWeight: '600',
      padding: 5,
      borderRadius: 10,
      backgroundColor: '#2FC500',
      width: 80,
      textAlign: 'center',
      marginLeft: 'auto',
      fontSize: 14,
    }}>Activo</Text>
    </View>
    <Text style={{
      fontSize: 14,
      fontWeight: '500',
      color: colors.dark.text
    }}>10 Junio 2023 | 10:00PM</Text>
    <Text style={{
      fontSize: 14,
      fontWeight: '500',
      color: colors.dark.text
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
      bottom: 30,
      right: -25
    }} />
  </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Events;
