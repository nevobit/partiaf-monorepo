import React, {useState, useEffect} from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TouchableOpacity,
  View as DefaultView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';
import { signin } from '../../features/auth';

const VerifyAge = ({navigation}: any) => {

  const [date, setDate] = useState(new Date());

  const [user, setUser] = useState({
    phone: 'Alessandro',
    password: 'De bonis'
  });

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const onSubmit = async (e: any) => {
    e.preventDefault();
   setLoading(true)
  try{
      setTimeout(() => {
dispatch(signin(user)); 
 setLoading(false)
      },3000)
      
        
    }catch(err){
      console.log(err)
    }
  }
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
        <TouchableOpacity onPress={() => navigation.navigate('Photo')}>
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
          onPress={onSubmit}
          >
            {loading ? (
              <ActivityIndicator color="#000" />
            ): (
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
