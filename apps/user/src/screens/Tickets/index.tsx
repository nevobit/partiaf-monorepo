import React from 'react';
import {View} from '../../components/Layout/Theme';
import {ScrollView, View as DefaultView} from 'react-native';

const Tickets = () => {
  return (
    <View
      style={{
        minHeight: '100%',
      }}>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#1C1C1E',
            height: 100,
            width: '95%',
            borderRadius: 20,
          }}></View>
      </ScrollView>
    </View>
  );
};

export default Tickets;
