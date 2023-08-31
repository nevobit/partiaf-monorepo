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
          fontSize: 18,
          marginTop: 50
        }}>
        No tienes Moments
      </Text>
    </View>
  );
};

export default Moments;
