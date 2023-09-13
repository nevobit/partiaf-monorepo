import React, { useEffect } from 'react';
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
import Header from '../../components/Layout/Header';

const Stores = ({navigation}: any) => {  
    const {user} = useSelector((state: any) => state.auth);
  
    const { data, startPolling, stopPolling } = useQuery(GET_STORES, {
      context: {
        headers: {
          authorization: user.token ? `Bearer ${user.token}` : '',
        },
      },
    });

    useEffect(() => {
      startPolling(2000);
      return () => {
        stopPolling();
      };
    }, [stopPolling, startPolling]);
    
  function setOpenFilters(arg0: boolean) {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={{
      flex: 1
    }}>
         <Header navigation={navigation} openFilters={() => setOpenFilters(true)} filters={true} />

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
