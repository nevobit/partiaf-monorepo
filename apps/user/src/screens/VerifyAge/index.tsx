import React, {useState, useEffect} from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TouchableOpacity,
  View as DefaultView,
  ScrollView,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';

const preferences = {
  plan: [
    'Amigos',
    'Desayuno/Brunch',
    'Familiar',
    'Negocios',
    'Pareja',
    'Ocasiones especiales',
    'Terraza o Jardin',
    'Perreo',
  ],
  music: [
    'Jazz',
    'Blues',
    'Pop',
    'Salsa',
    'Flamenco',
    'Bachata',
    'Vallenato',
    'Musica clasica',
    'Rock and Roll',
    'Disco',
    'Techno',
    'Reggae',
    'Ranchera',
    'Hip hop/Rap',
    'Reggearon old school',
    'Trap',
    'Electronica',
    'Crossover',
    'Corridos',
  ],
  food: [
    'Hamburguesa',
    'Parrilla',
    'Saludable',
    'Sushi',
    'Internacional',
    'Desayunos',
    'Comida Rapida',
    'Crepes',
    'Pizza',
    'Salchipapas',
    'Arepa',
    'Arabe',
    'Sandwiches',
    'Jugos y batidos',
    'Empanadas',
    'Panaderia',
    'Peruana',
    'Cafe',
    'Vegetariana',
    'Helados',
    'Perros calientes',
    'Poke',
    'Alitas',
    'India',
    'Argentina',
    'Asiatica',
    'China',
    'De autor',
    'Espanola',
    'Colombiana',
    'Italiana',
    'Mexicana',
    'Pescados y mariscos',
    'Pollo',
  ],
};

const VerifyAge = ({navigation}: any) => {
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
          }}>
          Verifica tu edad
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.6)',
          }}>
          Algunos eventos estaran disponibles dependiendo de tu edad.
        </Text>
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
          }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: 'rgba(0, 0, 0, .9)',
            }}>
            Continuar
          </Text>
        </TouchableOpacity>
      </DefaultView>
    </View>
  );
};

export default VerifyAge;
