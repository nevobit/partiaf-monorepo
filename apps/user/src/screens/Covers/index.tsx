import React, { useState } from 'react';
import {View} from '../../components/Layout/Theme';
import {
  View as DefaultView,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from '../../components/Layout/Theme/colors';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { GET_USER_BY_ID } from '../../graphql/queries/users';
import { useEffect } from 'react';
import { GET_TICKETS_BY_STORE_ID } from '../../graphql/queries/tickets';
import { DivisaFormater } from '../../utilities/divisaFormater';
import { useFocusEffect } from '@react-navigation/native';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const Covers = ({navigation, route}: any) => {
  
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const {data: tickets} = useQuery(GET_TICKETS_BY_STORE_ID, {
    variables: { id: route.params.store },
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  })

  useFocusEffect(() => {
    refetch();
  });


  useEffect(() => {
    refetch();
  }, [refetch])

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
    <DismissKeyboard>
      <View
        style={{
          minHeight: '100%',
          paddingVertical: 15
        }}>
         <DefaultView
        style={{
          position: 'absolute',
          top: 5,
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
         <ScrollView style={{
          paddingHorizontal: 15,
          marginTop: 50
         }}>
          {tickets?.getTicketsByStoreId?.map((ticket:any) => (

          <TouchableOpacity
          key={ticket.id}
          onPress={() => navigation.navigate('Ticket', {ticket: ticket})}
          style={{
           overflow: 'hidden',
           marginBottom: 20,
           borderRadius: 10,
           width: '100%',
           position: 'relative',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
          }}>
            <DefaultView style={{
              width: '35%',
            }}>

           <Image style={{
            height: 200,
            resizeMode: 'cover',
           }} source={{
            uri: ticket.image,
            
           }} />
            </DefaultView>

           <DefaultView style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            height:'100%',
            width:'65%',
            paddingVertical: 5,
            paddingHorizontal: 10
           }}>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{
            color: colors.dark.primary,
            fontWeight: '600',
            fontSize: 16
           }}>{ticket.name}</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 12
           }}></Text>
               
            </DefaultView>
            
            <DefaultView style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 30
            }}>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>23 Jun 2023</Text>
           <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>{ticket.hour}</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>{ticket.limit} Cupos</Text>
               
            </DefaultView>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25
            }}>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 15
           }}>{DivisaFormater(ticket.price)}</Text>
           <DefaultView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius:10
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
           </DefaultView>
               
            </DefaultView>
            
           </DefaultView>
          </TouchableOpacity>
          ))}

          {/* <DefaultView style={{
           marginTop: 60,
          <DefaultView style={{
           overflow: 'hidden',
           borderRadius: 10,
           width: '100%',
           position: 'relative',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'space-between',
          }}>
            <DefaultView style={{
              width: '35%',
            }}>

           <Image style={{
            height: 200,
            resizeMode: 'cover',
           }} source={{
            uri: 'https://i.ibb.co/ZfVftdq/cover2.jpg',
            
           }} />
            </DefaultView>

           <DefaultView style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            height:'100%',
            width:'65%',
            paddingVertical: 5,
            paddingHorizontal: 10
           }}>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{
            color: colors.dark.primary,
            fontWeight: '600',
            fontSize: 18
           }}>Land Part</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>Santa Marta</Text>
               
            </DefaultView>
            
            <DefaultView style={{
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
            fontWeigetGoersByUserIdIdght: '600',
            fontSize: 16
           }}>3:00PM</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 16
           }}>200 Cupos</Text>
               
            </DefaultView>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25
            }}>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 18
           }}>$50,000</Text>
           <DefaultView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius:10,
            height: 40
           }}>
           <TouchableOpacity
                       onPress={() => addCover({name: 'Land party', price: 50000, id: 'cf34f34-f34f32', limit: 20}, "-")}

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
              }}>{getAmount({name: 'Land party', price: 50000, id: 'cf34f34-f34f32'})}</Text>
            <TouchableOpacity 
            onPress={() => addCover({name: 'Land party', price: 50000, id: 'cf34f34-f34f32', limit: 20}, "+")}
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
           </DefaultView>
               
            </DefaultView>
            
           </DefaultView>
          </DefaultView> */}
         </ScrollView>
         {covers.amount > 0 && (
          
         <DefaultView
        style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
        <TouchableOpacity
         onPress={() => navigation.navigate("Payment", {store: route.params.store, goer: { 
          amount: covers.amount,
          price: covers.price,
          cover: covers.id,
          date: covers.date,
          description: covers.description,
          image: covers.image,
          hour: covers.hour,
          name: covers.name,
          user: data?.getUserById?.id
         }})}
          style={{
            backgroundColor: colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            CONTINUAR
          </Text>
        </TouchableOpacity>
      </DefaultView>
         )}
      
      </View>
    </DismissKeyboard>
  );
};

export default Covers;
