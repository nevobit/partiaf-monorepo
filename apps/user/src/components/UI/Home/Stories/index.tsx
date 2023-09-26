import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import {ScrollView, View as DefaultView, Image, Text, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USERS, GET_USER_BY_ID } from '../../../../graphql/queries/users';
import localStorage from 'redux-persist/es/storage';

const Stories = ({navigation}:any) => {
  
  const {user} = useSelector((state: any) => state.auth);

  const {data, loading, error, refetch} = useQuery(GET_USER_BY_ID, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const {data: users, loading: loadingUsers} = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  console.log()
  useEffect(() => {
    refetch();
  }, [refetch]);

  if(loadingUsers || loading) return <Text style={{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    padding: 40
  }}>Cargando...</Text>


// Función para calcular la puntuación de similitud entre dos conjuntos de intereses
function calcularPuntuacionIntereses(interesesA: string[], interesesB: string[]): number {
  const interesesComunes = interesesA?.filter((interes) => interesesB?.includes(interes));
  return interesesComunes?.length;
}

// Función de comparación personalizada
function compararUsuariosPorIntereses(a: any, b: any): number {
  const puntuacionA = calcularPuntuacionIntereses(data?.getUserById?.interests?.food, a.interests.food) +
    calcularPuntuacionIntereses(data?.getUserById?.interests?.music, a.interests.music) +
    calcularPuntuacionIntereses(data?.getUserById?.interests?.plan, a.interests.plan);

  const puntuacionB = calcularPuntuacionIntereses(data?.getUserById?.interests?.food, b.interests.food) +
    calcularPuntuacionIntereses(data?.getUserById?.interests?.music, b.interests.music) +
    calcularPuntuacionIntereses(data?.getUserById?.interests?.plan, b.interests.plan);

  return puntuacionB - puntuacionA; // Orden descendente
}

// Clonar el arreglo antes de ordenar para evitar errores de lectura
const filteredUsers = [...users?.getAllUsers];

// Ordenar el arreglo de usuarios utilizando la función de comparación personalizada
filteredUsers.sort(compararUsuariosPorIntereses);


  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        gap: 20,
        paddingHorizontal: 5,
        paddingTop: 5,
        paddingBottom: 20,
      }}>
      <DefaultView
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: '#000',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri: data?.getUserById?.photo[0]? data?.getUserById?.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          {data?.getUserById?.firstname}
        </Text>
      </DefaultView>

      {filteredUsers?.map((user: any) => (

       <TouchableOpacity
       key={user._id}
       onPress={() => navigation.navigate('UserProfile', {id: user._id})}
        style={{
          alignItems: 'center',
          gap: 5,
          marginRight: 15,
        }}>
        <DefaultView
          style={{
            borderWidth: 2,
            borderColor: 'rgb(255, 226, 67)',
            borderRadius: 50,
          }}>
          <DefaultView
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <Image
              style={{
                width: 55,
                height: 55,
                borderRadius: 100,
              }}
              source={{
                uri:  user.photo[0]?.length > 5? user.photo[0] : 'https://i.postimg.cc/0jMMGxbs/default.jpg',
              }}
            />
          </DefaultView>
        </DefaultView>
        <Text
          style={{
            color: '#fff',
            fontSize: 12,
          }}>
          {user.firstname}
        </Text>
      </TouchableOpacity>
      ))}

    </ScrollView>
  );
};

export default Stories;
