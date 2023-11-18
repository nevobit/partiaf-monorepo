import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { Text, View as DefaultView, Image, StatusBar, Dimensions, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { GET_ONE_TICKET } from '../../../graphql/queries/tickets';
import { View } from '../../../components/Layout/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { GET_GOERS_BY_TICKET } from '../../../graphql/queries/goers';
import colors from '../../../components/Layout/Theme/colors';
import { DivisaFormater } from '../../../utilities';
import { GET_USER_BY_ID } from '../../../graphql/queries/users';

const screenHeight = Dimensions.get('screen').height;

const TicketDetails = ({navigation, route}: any) => {
    const insets = useSafeAreaInsets();

    const {user} = useSelector((state: any) => state.auth);
    const [ticket, setTicket] = useState(route.params.ticket)
    
    const {data: userElement} = useQuery(GET_USER_BY_ID, {
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    const [covers, setCovers] = useState<any>({});
    const { data, loading, error, refetch } = useQuery(GET_GOERS_BY_TICKET, {
      variables: { id: ticket.id },
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });
    const addCover = (cover: any, op:string) => {
      const has = covers.id === cover.id;
      if(has){
        let updatedCover = {}; 
        if(op == '+' && covers.amount < 1 && cover.limit > 0 ){
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
      const has = covers.id === cover?.id;
      console.log(has)
      if(!has)
        return 0;
      return covers.amount;
    }

    console.log(getAmount(ticket.id))
    
  return (
    <ScrollView style={{
      flex: 1,
      backgroundColor: '#000'
      // paddingTop: 20,
    }}>
      <ScrollView contentContainerStyle={{
        flex: 1
      }}>

      <StatusBar translucent backgroundColor="transparent" />
      <DefaultView
        style={{
          position: 'absolute',
          top: insets.top,
          left: 0,
          zIndex: 9999,
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack(null)}
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
      <Image
        style={{
          position: 'relative',
          top: -20,
          width: '100%',
          height: screenHeight * 0.50,
          resizeMode: 'contain'
        }}
        source={{
          uri: ticket.image,
        }}
      />

      <DefaultView>

      <DefaultView style={{
        flexDirection: 'row',
        marginTop: -35,
        justifyContent: 'space-between',
        marginBottom: 10
      }}>

      <Text style={{
        color: '#fff',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 18,
        marginBottom: 10
      }}>{ticket.name}</Text>
      <Text style={{
        color: '#fff',
        fontWeight: '600',
        paddingHorizontal: 10,
        fontSize: 18,
        marginBottom: 10
      }}>Cupos: {ticket.limit}</Text>
      </DefaultView>

      <DefaultView style={{
        marginTop: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <DefaultView style={{
          flexDirection: 'row',
          paddingLeft: 20
        }}>
          {data?.getGoersByTicketId.slice(0,5).map((goer: any) => (
            <Image 
            key={goer.id}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              marginLeft: -15,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.3)'
            }}
            source={{
              uri: goer?.user?.photo?.length> 0 ? goer?.user?.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg'
            }} />
          ))}

        </DefaultView>
        <DefaultView>

        <Text style={{
          color: '#fff',
          fontSize: 14,
          marginRight: 15
        }}>Precio: <Text style={{
          color: colors.dark.primary
        }}>{DivisaFormater(ticket.price)}</Text></Text>
   <Text style={{
          color: '#fff',
          fontSize: 14,
          marginRight: 15
        }}>Fecha: {ticket.date}</Text>
        <Text style={{
          color: '#fff',
          fontSize: 14,
          marginRight: 15
        }}>Hora: {ticket.hour}</Text>
        </DefaultView>

      </DefaultView>
      <DefaultView style={{
          padding: 15
        }}>

        <Text style={{
          color: '#fff',
          fontWeight: '400',
          fontSize: 15
        }}>
          {ticket.description}
        </Text> 
        </DefaultView>

      {/* <Text style={{
        color: '#fff'
      }}>{JSON.stringify(ticket)}</Text> */}
    
      </DefaultView>
      <DefaultView style={{
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, justifyContent: 'flex-end'
      }}>

    <DefaultView style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius:15,
            width: '50%',
            alignSelf: 'center',
            height: 50
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
               
          <DefaultView
         style={{flex: 1, justifyContent: 'flex-end'}}>
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
           user: userElement?.getUserById.id
          }})}
           style={{
             backgroundColor: covers.amount > 0? colors.dark.primary : 'rgba(255,255,255,.5)',
             height: 50,
             borderRadius: 15,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             width: '95%',
             alignSelf: 'center',
             opacity: 1
           }}
           disabled={covers.amount == 0}
           >
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
          
      </DefaultView>  
      </ScrollView>

    </ScrollView>
  ) 
}

export default TicketDetails