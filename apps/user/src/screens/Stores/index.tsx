import React from 'react';
import {
  View as DefaultView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {View} from '../../components/Layout/Theme';
import Stories from '../../components/UI/Home/Stories';
import Icon from 'react-native-vector-icons/Ionicons';
import StoreCard from '../../components/UI/StoreCard';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_STORES } from '../../graphql/queries/users';

const Stores = ({navigation}: any) => {  
    const {user} = useSelector((state: any) => state.auth);
  
    const { data } = useQuery(GET_STORES, {
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });
    
  return (
    <View>
      <DefaultView
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 15,
          paddingBottom: 15,
          paddingHorizontal: 10,
        }}>
        <DefaultView
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <Icon name="options-outline" size={23} color="#fff" />
          <Icon name="qr-code-outline" size={23} color="rgba(10,10,10,1)" />
        </DefaultView>
        <Image
          style={{
            width: 110,
            height: 18,
            resizeMode: 'contain',
            tintColor: 'rgba(255,255,255,.9)',
          }}
          source={{
            uri: 'https://i.ibb.co/4Y7W9S0/333333-Partiaf-logo-ios.png',
          }}
        />
        <DefaultView
          style={{
            flexDirection: 'row',
            gap: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Wallet')}>
            <Icon name="wallet-outline" size={23} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Tickets')}>
            <Icon name="qr-code-outline" size={23} color="#fff" />
          </TouchableOpacity>
        </DefaultView>
      </DefaultView>
      <ScrollView>
        <Stories navigation={navigation} />
        <DefaultView
          style={{
            width: '100%',
            marginTop: 10,
          }}>
          <ScrollView
            style={{
              flexDirection: 'column',
              marginBottom: 100,
              width: '100%',
            }}>
              {data?.getAllStores.map((store:any) => (
                 <TouchableOpacity
                 key={store.id}
                 style={{
                   width: '100%',
                   marginBottom: 40,
                 }}
                 onPress={() => navigation.navigate('Store', {store: store.id})}>
                 <StoreCard {...store} />
               </TouchableOpacity>
              ))}
           
          </ScrollView>
        </DefaultView>
      </ScrollView>
    </View>
  );
};

export default Stores;
