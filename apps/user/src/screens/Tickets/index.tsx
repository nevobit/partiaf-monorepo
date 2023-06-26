import React from 'react';
import {View} from '../../components/Layout/Theme';
import {
  View as DefaultView,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../components/Layout/Theme/colors';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const Tickets = ({navigation,  route}: any) => {
  return (
    <DismissKeyboard>
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
            onPress={() => navigation.navigate('HomeScreen', {store:  route.params.store})}
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
          
          <TouchableOpacity 
          onPress={() => navigation.navigate('TicketDetails')}
          style={{
            backgroundColor: '#fff',
            marginTop: 20,
            borderRadius: 5,
            height: 100,
            flexDirection: 'row',
          }}>
            <DefaultView style={{
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
              }}>Aluna Disco Bar</Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '500',
              }}>10 Junio 2023 | 10:00PM</Text>
              <Text style={{
                fontSize: 14,
                fontWeight: '500',
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
                  marginLeft: 25,
                  marginTop: -3
                }} source={{
                  uri:'https://i.ibb.co/n14Qpb9/qrcode.png'
                }} />
            </DefaultView>
          </TouchableOpacity>
        </DefaultView>
      </View>
    </DismissKeyboard>
  );
};

export default Tickets;
