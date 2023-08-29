import React from 'react';
import {View, Text} from 'react-native';

const Trends = () => {
  return (
    <View
      style={{
        padding: 10,
      }}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 18,
          marginTop: 50
        }}>
        No hay Tendencias
      </Text>
    </View>
  );
};

export default Trends;
