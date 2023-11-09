import React from 'react';
import {Image, Text, View} from 'react-native';

const StoreCard = ({photos, name, type}: any) => {
  return (
    <View
      style={{
        width: 270,
        marginRight: 20,
      }}>
      <Image
        style={{
          width: '100%',
          height: 250,
          borderRadius: 20,
        }}
        source={{
          uri: photos?.length> 0 && photos[0]?.length > 0 ? `${photos[0]}`: 'https://res.cloudinary.com/matosr96/image/upload/v1682659931/vothwysoycqrw8fsne0w.jpg',
        }}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 16,
          marginTop: 10,
        }}>
        <Text style={{fontWeight: '600'}}>{name} -</Text> {type}
      </Text>
      <Text
        style={{
          color: '#fff',
        }}>
        Santa Marta
      </Text>
    </View>
  );
};

export default StoreCard;
