import React from 'react';
import {View} from '../../components/Layout/Theme';
import {ScrollView, View as DefaultView} from 'react-native';
import PartiafTopTap from '../../navigator/AppNavigator/PartiafTopTap';

const Partiaf = () => {
  return (
    <View
      style={{
        minHeight: '100%',
      }}>
      <PartiafTopTap />
    </View>
  );
};

export default Partiaf;
