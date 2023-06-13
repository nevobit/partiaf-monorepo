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

const Home = ({navigation}: any) => {
  
  const {user} = useSelector((state: any) => state.auth);

  const { data } = useQuery(GET_STORES, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  
  console.log(data)
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

            <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
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
                <TouchableOpacity onPress={() => navigation.navigate('Store', {store: store.id})}>
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

            <TouchableOpacity>
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
              marginBottom: 70,
            }}>
            <TouchableOpacity onPress={() => navigation.navigate('Store')}>
              <HomeCard />
            </TouchableOpacity>
            <HomeCard />
            <HomeCard />
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
