import React from 'react';
import {View} from '../../components/Layout/Theme';
import {ScrollView, View as DefaultView, Text, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {TouchableOpacity, Image, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)
const Tickets = ({navigation}: any) => {
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
          onPress={() => navigation.navigate('HomeScreen')}
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
            height: 50
          }}
        />
      </DefaultView>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <DefaultView
          style={{
            backgroundColor: '#1C1C1E',
            height: 500,
            width: '95%',
            borderRadius: 20,
            position: 'relative',
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}>
          <DefaultView
            style={{
              backgroundColor: 'rgba(10,10,10,1)',
              height: 30,
              width: 30,
              borderRadius: 50,
              position: 'absolute',
              left: -20,
              bottom: 200,
            }}
          />
          <DefaultView
            style={{
              backgroundColor: 'rgba(10,10,10,1)',
              height: 30,
              width: 30,
              borderRadius: 50,
              position: 'absolute',
              right: -20,
              bottom: 200,
            }}
          />


            <DefaultView style={{
              overflow: 'hidden'
            }}>

            
          <DefaultView
            style={{
              backgroundColor: '#1c1c1e',
              height: 40,
              width: '98%',
              borderTopWidth: 2,
              borderColor: '#000',
              borderStyle: 'dashed',
              position: 'absolute',
              margin: -2,
              marginTop: 10,
              left: 20,
              bottom: 175,
            }}
          >
            <DefaultView style={{
              height: 200, width: 200
            }}>

            </DefaultView>
          </DefaultView>
          </DefaultView>

          <DefaultView
            style={{
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 30,
              }}>
              Partiaf
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '300',
              }}>
              FAST PASS
            </Text>
          </DefaultView>

          <DefaultView>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
              }}>
              Alessandro,
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: '300',
              }}>
              Te esparamos con emocion.
            </Text>
          </DefaultView>

          <DefaultView
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 20,
              marginTop: 30,
            }}>
            <DefaultView
              style={{
                width: '45%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                }}>
                Evento
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                }}>
                Partiaf Party
              </Text>
            </DefaultView>
            <DefaultView
              style={{
                width: '45%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                }}>
                Fecha
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                }}>
                May 12, 22:00
              </Text>
            </DefaultView>
            <DefaultView
              style={{
                width: '45%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                }}>
                Cantidad
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                }}>
                3
              </Text>
            </DefaultView>
            <DefaultView
              style={{
                width: '45%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                }}>
                Total
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                }}>
                $ 20.000
              </Text>
            </DefaultView>
          </DefaultView>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: 'auto',
              paddingBottom: 10,
            }}>
            info@partiaf.com
          </Text>
        </DefaultView>
      </ScrollView>
    </View>
    </DismissKeyboard>
  );
};

export default Tickets;
