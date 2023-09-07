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
          fontSize: 16,
          marginTop: 20
        }}>
        No hay tendencias
      </Text>
    </View>
  );
};

export default Trends;
