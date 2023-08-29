import React, {useState} from 'react';
import {View} from '../../components/Layout/Theme';
import {
  Text,
  TouchableOpacity,
  View as DefaultView,
  ScrollView,
} from 'react-native';
import colors from '../../components/Layout/Theme/colors';
import {useDispatch} from 'react-redux';
import {saveUserInfo} from '../../features/auth';

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
    'Exotico',
    'Champeta',
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
  const [myPreferences, setMyPreferences] = useState({});
  const [preferenceFood, setPreferenceFood] = useState<string[]>([]);
  const [preferenceMusic, setPreferenceMusic] = useState<string[]>([]);
  const [preferencePlan, setPreferencePlan] = useState<string[]>([]);

  const addPreferenceFood = (name: string) => {
    setPreferenceFood(prev => {
      const updatedPreferencesFood = [...prev];

      if (updatedPreferencesFood?.includes(name)) {
        // Si el nombre ya está en el arreglo, se elimina
        updatedPreferencesFood?.splice(updatedPreferencesFood.indexOf(name), 1);
      } else {
        // Si el nombre no está en el arreglo, se agrega
        updatedPreferencesFood.push(name);
      }

      return updatedPreferencesFood;
    })
  }

  const addPreferenceMusic = (name: string) => {
    setPreferenceMusic(prev => {
      const updatedPreferencesMusic = [...prev];

      if (updatedPreferencesMusic?.includes(name)) {
        // Si el nombre ya está en el arreglo, se elimina
        updatedPreferencesMusic?.splice(updatedPreferencesMusic.indexOf(name), 1);
      } else {
        // Si el nombre no está en el arreglo, se agrega
        updatedPreferencesMusic.push(name);
      }

      return updatedPreferencesMusic;
    })
  }

  const addPreferencePlan = (name: string) => {
    setPreferencePlan(prev => {
      const updatedPreferencesPlan = [...prev];

      if (updatedPreferencesPlan?.includes(name)) {
        // Si el nombre ya está en el arreglo, se elimina
        updatedPreferencesPlan?.splice(updatedPreferencesPlan.indexOf(name), 1);
      } else {
        // Si el nombre no está en el arreglo, se agrega
        updatedPreferencesPlan.push(name);
      }

      return updatedPreferencesPlan;
    })
  }

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(saveUserInfo({interests: {food: preferenceFood, music: preferenceMusic, plan: preferencePlan}}));
    navigation.navigate('VerifyAge');
  };

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
          paddingHorizontal: 10,
          marginTop: 20,
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
            paddingHorizontal: 10,
          }}>
          Preferencias
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.6)',
            paddingHorizontal: 10,
          }}>
          Selecciona al menos 5
        </Text>
        <DefaultView
          style={{
            marginTop: 35,
            gap: 20,
            paddingHorizontal: 10,
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
                key={preference}
                onPress={() => addPreferencePlan(preference)}
                style={{
                  backgroundColor: preferencePlan.includes(preference)
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: preferencePlan.includes(preference)
                      ? 'rgba(10,10,10,1)'
                      : '#fff',
                  }}>
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
                key={preference}
                onPress={() => addPreferenceMusic(preference)}
                style={{
                  backgroundColor: preferenceMusic.includes(preference)
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: preferenceMusic.includes(preference)
                      ? 'rgba(10,10,10,1)'
                      : '#fff',
                  }}>
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
                key={preference}
                onPress={() => addPreferenceFood(preference)}
                style={{
                  backgroundColor: preferenceFood.includes(preference)
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                }}>
                <Text
                  style={{
                    color: preferenceFood.includes(preference)
                      ? 'rgba(10,10,10,1)'
                      : '#fff',
                  }}
                  key={preference}>
                  {preference}
                </Text>
              </TouchableOpacity>
            ))}
          </DefaultView>
        </DefaultView>
      </ScrollView>
      <DefaultView style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          disabled={preferenceFood.length < 2}
          style={{
            backgroundColor:
              preferenceFood.length <= 2
                ? 'rgb(100,100,100)'
                : colors.dark.primary,
            height: 50,
            borderRadius: 15,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '95%',
            alignSelf: 'center',
          }}
          onPress={onSubmit}>
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

export default Preferences;
