import React from 'react';
import {
  Text,
  View as DefaultView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {View} from '../../components/Layout/Theme';
import Stories from '../../components/UI/Home/Stories';
import HomeCard from '../../components/UI/HomeCard';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_STORES } from '../../graphql/queries/users';
import Header from '../../components/Layout/Header';

const Home = ({navigation}: any) => {
  
  const {user} = useSelector((state: any) => state.auth);

  const { data } = useQuery(GET_STORES, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  return (
    <View style={{
      backgroundColor: '#000',
      height: '100%'
    }}>
      <Header navigation={navigation} filters={true} />
      <ScrollView style={{
      backgroundColor: '#000',
      height: '100%'
    }}>
        <Stories />
        <DefaultView
          style={{
            width: '100%',
            paddingLeft: 10,
          }}>
          <DefaultView
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: '#fff',
                fontSize: 18,
              }}>
              Especialmente para ti
            </Text>

            <TouchableOpacity 
            style={{
              marginRight: 15
            }}
            onPress={() => navigation.navigate('Stores')}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Mostrar todo
              </Text>
            </TouchableOpacity>
          </DefaultView>

          <ScrollView
            horizontal
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
              {data?.getAllStores.map((store: any) => (
                <TouchableOpacity key={store.id} onPress={() => navigation.navigate('Store', {store: store.id})}>
                <HomeCard {...store} />                  
                </TouchableOpacity>
              ))}
          </ScrollView>
        </DefaultView>
        <DefaultView
          style={{
            width: '100%',
            paddingLeft: 10,
            marginTop: 40,
            marginBottom: 60
          }}>
          <DefaultView
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontWeight: '600',
                color: '#fff',
                fontSize: 18,
              }}>
              Las mejores discos
            </Text>

            <TouchableOpacity 
            style={{
              marginRight: 15
            }}
            onPress={() => navigation.navigate('Stores')}>
              <Text
                style={{
                  color: '#fff',
                }}>
                Mostrar todo
              </Text>
            </TouchableOpacity>
          </DefaultView>

          <ScrollView
            horizontal
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
              {data?.getAllStores.map((store: any) => (
                <TouchableOpacity key={store.id} onPress={() => navigation.navigate('Store', {store: store.id})}>
                <HomeCard {...store} />                  
                </TouchableOpacity>
              ))}
          </ScrollView>
          <DefaultView style={{
            marginBottom:30
          }}></DefaultView>
        </DefaultView>
      </ScrollView>
    </View>
  );
};

export default Home;
