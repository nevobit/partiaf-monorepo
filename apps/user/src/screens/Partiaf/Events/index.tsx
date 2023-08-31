import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { useSelector } from 'react-redux';
import { GET_ALL_TICKETS } from '../../../graphql/queries/tickets';
import colors from '../../../components/Layout/Theme/colors';
import { DivisaFormater } from '../../../utilities/divisaFormater';

const Events = () => {
  const {user} = useSelector((state: any) => state.auth);

  const {data: tickets, refetch} = useQuery(GET_ALL_TICKETS, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const [covers, setCovers] = useState<any>({});
  
  const addCover = (cover: any, op:string) => {
    const has = covers.id === cover.id;
    if(has){
      let updatedCover = {}; 
      if(op == '+' && covers.amount < cover.limit){
        updatedCover = {...covers,
          amount: covers.amount + 1}
      }else if(op == '-' && covers.amount > 0){
        updatedCover = {
          ...covers,
          amount: covers.amount - 1
        } 
      }else{
        return
      }
      setCovers(updatedCover);
    }else{
      setCovers(
        {
          name: cover.name,
        amount: 1,
        price: cover.price,
        id: cover.id
      })
    }
  }
  
  const getAmount = (cover:any) => {
    const has = covers.id === cover.id;
    if(!has)
      return 0;
    return covers.amount;
  }
  return (
    <View
      style={{
        padding: 10,
      }}>
        
        <ScrollView>
          {/* {tickets?.getAllTickets?.map((ticket:any) => (
              <View style={{
                overflow: 'hidden',
                marginBottom: 20,
                borderRadius: 10,
                width: '100%',
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
               }}>
                 <View style={{
                   width: '35%',
                 }}>
     
                <Image style={{
                 height: 200,
                 resizeMode: 'cover',
                }} source={{
                 uri: ticket.image,
                 
                }} />
                 </View>
     
                <View style={{
                 backgroundColor: 'rgba(255,255,255,0.05)',
                 height:'100%',
                 width:'65%',
                 paddingVertical: 5,
                 paddingHorizontal: 10
                }}>
                 <View style={{
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                 }}>
                 <Text style={{
                 color: colors.dark.primary,
                 fontWeight: '600',
                 fontSize: 18
                }}>{ticket.name}</Text>
                 <Text style={{
                 color: colors.dark.text,
                 fontWeight: '600',
                 fontSize: 14
                }}></Text>
                    
                 </View>
                 
                 <View style={{
                   alignItems: 'flex-start',
                   justifyContent: 'flex-start',
                   marginTop: 30
                 }}>
                 <Text style={{
                 color: colors.dark.text,
                 fontWeight: '600',
                 fontSize: 16
                }}>23 Jun 2023</Text>
                <Text style={{
                 color: colors.dark.text,
                 fontWeight: '600',
                 fontSize: 16
                }}>{ticket.hour}</Text>
                 <Text style={{
                 color: colors.dark.text,
                 fontWeight: '600',
                 fontSize: 16
                }}>{ticket.limit} Cupos</Text>
                    
                 </View>
                 <View style={{
                   flexDirection: 'row',
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   marginTop: 25
                 }}>
                 <Text style={{
                 color: colors.dark.text,
                 fontWeight: '600',
                 fontSize: 18
                }}>{DivisaFormater(ticket.price)}</Text>
                <View style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 alignItems: 'center',
                 borderWidth: 1,
                 borderColor: '#fff',
                 borderRadius:10,
                 height: 40
                }}>
                <TouchableOpacity
                            onPress={() => addCover({...ticket, name: ticket.name, price: ticket.price, id: ticket.id, limit: ticket.limit}, "-")}
     
                style={{
                 width:50,
                }}>
                   <Text style={{
                     fontSize: 25,
                     color: colors.dark.text,
                     textAlign: 'center'
                   }}>
                     -
                   </Text>
                 </TouchableOpacity>
                 <Text style={{
                     fontSize: 20,
                     color: colors.dark.text,
                     textAlign: 'center'
                   }}>{getAmount({name: ticket.name, price: ticket.price, id: ticket.id})}</Text>
                 <TouchableOpacity 
                 onPress={() => addCover({name: ticket.name, price: ticket.price, id: ticket.id, limit: ticket.limit}, "+")}
                 style={{
                 width:50
                }}>
                   <Text style={{
                     fontSize: 25,
                     color: colors.dark.text,
                     textAlign: 'center'
                   }}>
                     +
                   </Text>
                 </TouchableOpacity>
                </View>
                    
                 </View>
                 
                </View>
               </View>
          ))} */}

          <Text style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: 16
          }} >No hay eventos</Text>
        </ScrollView>
      
    </View>
  );
};

export default Events;
