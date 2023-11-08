/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TouchableOpacity,
  View as DefaultView,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Button,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import DatePicker from 'react-native-date-picker';
import {useDispatch, useSelector} from 'react-redux';
import {saveUserInfo, signin} from '../../features/auth';
import {useMutation} from '@apollo/client';
import {REGISTER_USER} from '../../graphql/mutations';
import getToken from '../../notifications/get-token';

const VerifyAge = ({navigation}: any) => {
  const {userInfo} = useSelector((state: any) => state.auth);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const [register] = useMutation(REGISTER_USER);
  const [error, setError] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = await getToken();
      const {data} = await register({
        variables: {
          userData: {...userInfo, token  },
        },
      });
      dispatch(signin({...data.userSignup}));
      setLoading(false);
    } catch (err:any) {
      setLoading(false);
      setError(err.message)
      console.log(err);
    }
  };

  if (error.length > 0) {
    setTimeout(() => {
      setError('');
    }, 10000);
  }

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View
      style={{
        height: '100%',
        padding: 10,
        paddingTop: 20,
      }}>
      <DefaultView
        style={{
          marginBottom: 20,
          marginTop: 20,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Preferences')}>
          <Text
            style={{
              color: colors.dark.primary,
            }}>
            Atras
          </Text>
        </TouchableOpacity>
      </DefaultView>
      <DefaultView
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}>
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
        <DefaultView
          style={{
            height: 3,
            width: 80,
            backgroundColor: colors.dark.primary,
          }}
        />
      </DefaultView>
      <ScrollView>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            //  textAlign: 'center',
            fontWeight: '600',
            paddingHorizontal: 10,
          }}>
          Verifica tu edad
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.6)',
            paddingHorizontal: 10,
          }}>
          Algunos eventos estaran disponibles dependiendo de tu edad.
        </Text>
        <DefaultView
          style={{
            padding: 10,
            position:'relative'
          }}>
          <TextInput
            placeholder="Edad"
            placeholderTextColor="rgba(255,255,255,0.5)"
            style={{
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.5)',
              borderRadius: 10,
              color: 'rgba(255,255,255,1)',
              fontSize: 16,
              paddingHorizontal: 10,
              height: 45
            }}
            value={date.toLocaleString().slice(0,9)}
          />
        <TouchableOpacity style={{
          backgroundColor: 'trasparent',
          height: 45,
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: 10,
          marginTop: 10,
          position:'absolute',
          left: 10,
          width: '100%'
        }} onPress={() => setOpen(true)}>
          <Text style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: '600',
            fontSize: 16
          }}></Text>
        </TouchableOpacity>
        </DefaultView>
        
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        mode='date'
        onCancel={() => {
          setOpen(false)
        }}
      />
        <Text
          style={{
            color: 'red',
          }}>
          {error}
        </Text>
        {/* <DatePicker date={date} onDateChange={setDate} /> */}
      </ScrollView>
      <DefaultView style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}
          onPress={onSubmit}>
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text
              style={{
                fontWeight: '500',
                fontSize: 16,
                color: 'rgba(0, 0, 0, .9)',
              }}>
              Continuar
            </Text>
          )}
        </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default VerifyAge;
