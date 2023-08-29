import React from 'react';
import {Image, Text, View} from 'react-native';

const StoreCard = ({photos, name, type}: any) => {
  return (
    <View
      style={{
        width: '100%',
        marginRight: 20,
      }}>
      <View
        style={{
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
              fontSize: 16,
            }}>
            {name} -{' '}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '300',
              color: 'rgba(255,255,255, .5)',
            }}>
            {type}
          </Text>
        </View>
        <Text
          style={{
            color: 'rgba(255,255,255, .5)',
            fontSize: 14,
            fontWeight: '300',
          }}>
          Medellin - Colombia
        </Text>
      </View>
      <Image
        style={{
          width: '100%',
          height: 450,
        }}
        source={{
          uri: photos?.length > 0 ? photos[0] : 'https://res.cloudinary.com/matosr96/image/upload/v1682659931/vothwysoycqrw8fsne0w.jpg',
        }}
      />
      <View></View>
    </View>
  );
};

export default StoreCard;
