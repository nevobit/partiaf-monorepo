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
import colors from '../../components/Layout/Theme/colors';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const Covers = ({navigation}: any) => {
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
          onPress={() => navigation.navigate('Store')}
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
          paddingHorizontal: 15
         }}>
          <DefaultView style={{
           marginTop: 60,
           overflow: 'hidden',
           borderRadius: 20,
           width: '100%',
           position: 'relative'
          }}>
           <Image style={{
            height: 200,
            width: '100%',
            resizeMode: 'stretch',
            zIndex: 1
           }} source={{
            uri: 'https://i.ibb.co/wrpN79h/coverimage.jpg',
            
           }} />
           <DefaultView style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            width:'100%',
            height:'100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9,
            padding: 10
           }}>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{
            color: colors.dark.primary,
            fontWeight: '600',
            fontSize: 20
           }}>Land Part</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>Santa Marta-Colombia</Text>
               
            </DefaultView>
            
            <DefaultView style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 15
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
              marginTop: 20
            }}>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 20
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
          </DefaultView>
          <DefaultView style={{
           marginTop: 60,
           overflow: 'hidden',
           borderRadius: 20,
           width: '100%',
           position: 'relative'
          }}>
           <Image style={{
            height: 200,
            width: '100%',
            resizeMode: 'stretch',
            zIndex: 1
           }} source={{
            uri: 'https://i.ibb.co/ZfVftdq/cover2.jpg',
            
           }} />
           <DefaultView style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            width:'100%',
            height:'100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9,
            padding: 10
           }}>
            <DefaultView style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{
            color: colors.dark.primary,
            fontWeight: '600',
            fontSize: 20
           }}>Land Part</Text>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 14
           }}>Santa Marta-Colombia</Text>
               
            </DefaultView>
            
            <DefaultView style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 15
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
              marginTop: 20
            }}>
            <Text style={{
            color: colors.dark.text,
            fontWeight: '600',
            fontSize: 20
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
                       onPress={() => addCover({name: 'Land party', price: 10000, id: 'cf34f34-q34f32', limit: 200}, "-")}

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
              }}>{getAmount({name: 'Land party', price: 50000, id: 'cf34f34-q34f32'})}</Text>
            <TouchableOpacity 
            onPress={() => addCover({name: 'Land party', price: 10000, id: 'cf34f34-q34f32', limit: 200}, "+")}
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
          </DefaultView>
         </ScrollView>
         {covers.amount > 0 && (
          
         <DefaultView
        style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 10}}>
        <TouchableOpacity
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
