import React from 'react';
import {View} from '../../components/Layout/Theme';
import {Text, Image, Dimensions, View as DefaultView} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';

const screenHeight = Dimensions.get('screen').height;

const Store = ({navigation}: any) => {
  return (
    <DefaultView
      style={{
        backgroundColor: 'transparent',
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
          onPress={() => navigation.navigate('HomeScreen')}
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
          width: '100%',
          height: screenHeight * 0.35,
          resizeMode: 'cover',
        }}
        source={{
          uri: 'https://res.cloudinary.com/matosr96/image/upload/v1682659931/vothwysoycqrw8fsne0w.jpg',
        }}
      />

      <DefaultView
        style={{
          backgroundColor: 'rgba(10,10,10,1)',
          height: '100%',
        }}>
        <DefaultView
          style={{
            position: 'relative',
            bottom: 40,
            // height: '100%',
            borderRadius: 30,
            backgroundColor: 'rgba(10,10,10,1)',
            padding: 20,
            paddingTop: 20,
            paddingBottom: 0,
          }}>
          <DefaultView
            style={{
              backgroundColor: colors.dark.primary,
              borderRadius: 20,
              width: 65,
              height: 25,
              paddingHorizontal: 6,
              paddingVertical: 3,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="star-outline" size={16} />
            <Text
              style={{
                marginLeft: 5,
              }}>
              4.24
            </Text>
          </DefaultView>

          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 20,
              marginTop: 10,
            }}>
            Jennylao Club
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '500',
              fontSize: 16,
            }}>
            Santa Marta, Colombia
          </Text>
          <Text
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontWeight: '400',
              fontSize: 16,
            }}>
            Disocteca
          </Text>

          <DefaultView
            style={{
              flexDirection: 'row',
              gap: 10,
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                height: 25,
              }}>
              18+
            </Text>
            <Text
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                height: 25,
              }}>
              Discoteca
            </Text>
            <Text
              style={{
                color: '#fff',
                borderWidth: 1,
                borderColor: colors.dark.primary,
                paddingVertical: 2,
                paddingHorizontal: 10,
                borderRadius: 10,
                height: 25,
              }}>
              Salsa
            </Text>
          </DefaultView>
        </DefaultView>
        <DefaultView
          style={{
            paddingHorizontal: 20,
            paddingVertical: 15,
            paddingTop: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
            backgroundColor: 'rgba(10,10,10,1)',
          }}>
          <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="browsers-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Reservas
            </Text>
          </DefaultView>
          <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="barcode-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Tickets
            </Text>
          </DefaultView>
          <DefaultView
            style={{
              alignItems: 'center',
            }}>
            <Icon name="fast-food-outline" color="#fff" size={30} />
            <Text
              style={{
                color: '#fff',
              }}>
              Menu
            </Text>
          </DefaultView>
        </DefaultView>
        <DefaultView
          style={{
            borderWidth: 1,
            borderColor: 'rgba(255,255,255, .1)',
            paddingHorizontal: 20,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 15,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
            source={{
              uri: 'https://i.ibb.co/Q8BQGxC/photo-1615109398623-88346a601842.jpg',
            }}
          />
          <DefaultView>
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
              }}>
              Alessandro de Bonis
            </Text>
            <Text
              style={{
                color: 'rgba(255,255,255,.8)',
              }}>
              Organizador
            </Text>
          </DefaultView>
        </DefaultView>
        <DefaultView
          style={{
            height: 140,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 18,
              color: '#fff',
            }}>
            Ubicacion
          </Text>
          {/* <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
        </DefaultView>
      </DefaultView>
    </DefaultView>
  );
};

export default Store;
