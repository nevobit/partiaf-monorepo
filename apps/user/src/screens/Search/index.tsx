import React from 'react';
import {View} from '../../components/Layout/Theme';
import {
  TextInput,
  View as DefaultView,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {useQuery} from '@apollo/client';
import {GET_USERS} from '../../graphql/queries/users';
import {useEffect} from 'react';
import colors from '../../components/Layout/Theme/colors';
import SearchTopTap from '../../navigator/AppNavigator/SearchTopTap';

const Search = () => {
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading} = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  console.log(data);

  return (
    <View
      style={{
        height: '100%',
      }}>
      <DefaultView
        style={{
          borderRadius: 12,
          paddingHorizontal: 10,
          backgroundColor: 'rgba(255, 255, 255, .5)',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          height: 40,
          width: '95%',
          alignContent: 'center',
          alignSelf: 'center',
        }}>
        <Icon name="search-outline" color="#fff" size={20} />
        <TextInput
          placeholderTextColor="#fff"
          placeholder="Buscar"
          style={{
            color: '#fff',
            marginLeft: 5,
          }}
        />
      </DefaultView>
      <SearchTopTap />
    </View>
  );
};

export default Search;
