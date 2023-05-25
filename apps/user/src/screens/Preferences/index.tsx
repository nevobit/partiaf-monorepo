import React from 'react';
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

const Preferences = ({navigation}: any) => {
  return (
    <View
      style={{
        height: '100%',
        padding: 20,
        paddingTop: 25,
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
            backgroundColor: '#1c1c1e',
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
          Preferencias
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.6)',
          }}>
          Selecciona al menos 5
        </Text>
        <DefaultView
          style={{
            marginTop: 35,
            gap: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 20,
              textAlign: 'left',
            }}>
            Plan
          </Text>
          <DefaultView
            style={{
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
            }}>
            {preferences.plan.map(preference => (
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}
                  key={preference}>
                  {preference}
                </Text>
              </TouchableOpacity>
            ))}
          </DefaultView>

          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 20,
              textAlign: 'left',
            }}>
            Musica
          </Text>
          <DefaultView
            style={{
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
            }}>
            {preferences.music.map(preference => (
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}
                  key={preference}>
                  {preference}
                </Text>
              </TouchableOpacity>
            ))}
          </DefaultView>

          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 20,
              textAlign: 'left',
            }}>
            Comida
          </Text>
          <DefaultView
            style={{
              flexDirection: 'row',
              gap: 10,
              flexWrap: 'wrap',
              marginBottom: 100,
            }}>
            {preferences.food.map(preference => (
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: '#fff',
                  }}
                  key={preference}>
                  {preference}
                </Text>
              </TouchableOpacity>
            ))}
          </DefaultView>
        </DefaultView>
      </ScrollView>

      <TouchableOpacity
        style={{
          backgroundColor: colors.dark.primary,
          height: 50,
          borderRadius: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 30,
          left: 20,
          width: '100%',
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
    </View>
  );
};

export default Preferences;
