import React from 'react';
import {View, Text} from 'react-native';

const Moments = () => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "#000"
      }}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontSize: 16,
          marginTop: 20
        }}>
        No tienes Moments
      </Text>
    </View>
  );
};

export default Moments;
