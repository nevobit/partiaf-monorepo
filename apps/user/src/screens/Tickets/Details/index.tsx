import React, { useEffect, useState } from 'react';
import {
  View as DefaultView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from '../../../components/Layout/Theme';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ONE_GOER } from '../../../graphql/queries/goers';
import { DivisaFormater } from '../../../utilities/divisaFormater';
import QRCode from 'react-native-qrcode-svg';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const Details = ({navigation, route}: any) => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_ONE_GOER, {
    variables: { id: route.params.id },
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
    <DismissKeyboard>
      <View
        style={{
          backgroundColor: '#000',
          minHeight: '100%'
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
            onPress={() => navigation.navigate('Tickets')}
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
              <Icon name="wallet-outline" size={23} color="#fff" />
            </TouchableOpacity>
          </DefaultView>
        </DefaultView>
        
         <ScrollView
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 10
          }}>
          <DefaultView
            style={{
              backgroundColor: '#fff',
              width: '95%',
              borderRadius: 20,
              position: 'relative',
              paddingHorizontal: 15,
              paddingVertical: 5,
            }}>
            <DefaultView
              style={{
                backgroundColor: 'rgba(0,0,0,1)',
                height: 30,
                width: 30,
                borderRadius: 50,
                position: 'absolute',
                left: -20,
                bottom: 230,
              }}
            />
            <DefaultView
              style={{
                backgroundColor: 'rgba(0,0,0,1)',
                height: 30,
                width: 30,
                borderRadius: 50,
                position: 'absolute',
                right: -20,
                bottom: 230,
              }}
            />

              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((n) => (
               
<DefaultView
              style={{
                backgroundColor: 'rgba(0,0,0,.6)',
                height: 1,
                width: 10,
                borderRadius: 50,
                position: 'absolute',
                right: 20 * n,
                bottom: 245,
              }}
            /> 
            ))}
            

            <DefaultView
              style={{
                alignSelf: 'flex-end',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                }}>
                Partiaf
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 12,
                  fontWeight: '300',
                }}>
                FAST PASS
              </Text>
            </DefaultView>

            <DefaultView>
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                }}>
                {data?.getOneGoer?.name},
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 14,
                  fontWeight: '300',
                }}>
                {/* Jun 14  2023 ~ Santa Marta - Colombia */}
              </Text>
            </DefaultView>

            <DefaultView
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 20,
                marginTop: 15,
              }}>
              <DefaultView
                style={{
                  width: '45%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  Nombre
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>
                  {data?.getOneGoer?.user.firstname} {data?.getOneGoer?.user.lastname}
                </Text>
              </DefaultView>
              <DefaultView
                style={{
                  width: '30%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  Costo
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>

                  {DivisaFormater(data?.getOneGoer?.cost * data?.getOneGoer?.amount)}
                </Text>
              </DefaultView>
              
              <DefaultView
                style={{
                  width: '45%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  Hora
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>
                  {data?.getOneGoer?.ticket.hour}
                </Text>
              </DefaultView>
              <DefaultView
                style={{
                  width: '30%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  Evento
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>
                  {data?.getOneGoer?.name}
                </Text>
              </DefaultView>
              <DefaultView
                style={{
                  width: '45%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  Fecha
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>
                  Jun 12 2023
                </Text>
              </DefaultView>
              <DefaultView
                style={{
                  width: '30%',
                }}>
                <Text
                  style={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: 14,
                  }}>
                  NO. de Tickets
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 15,
                  }}>
                  {data?.getOneGoer?.amount}
                </Text>
              </DefaultView>
              
            
            </DefaultView>
            <DefaultView style={{
             justifyContent: 'center',
             alignItems: 'center',
             flexDirection: 'row',
             marginTop: 40
            }}>
             <Text style={{
              maxWidth: 100,
              fontSize: 12,
              color: "rgba(0,0,0,0.6)"
             }}>
              Scanea el QR Code para tener acceso al evento.
             </Text>
             <DefaultView style={{
              alignItems: 'center',
              justifyContent: 'center',
             }}>
             <Text style={{
              fontSize: 14,
              marginBottom: -15,
              marginTop: 20
             }}>
              Tikect ID: {data?.getOneGoer?.id.slice(0,8).toUpperCase()}
             </Text>
           <DefaultView style={{
            marginLeft: 20,
            marginBottom: 40
           }}>

    <QRCode
      value={JSON.stringify(data?.getOneGoer)}
      size={160}
    />
           </DefaultView>

             </DefaultView>
                
            </DefaultView>
                
          
          </DefaultView>
        </ScrollView> 
      </View>
    </DismissKeyboard>
  );
};

export default Details;
