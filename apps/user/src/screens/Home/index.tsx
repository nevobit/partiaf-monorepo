import React, { useState } from 'react';
import {
  Text,
  View as DefaultView,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {View} from '../../components/Layout/Theme';
import Stories from '../../components/UI/Home/Stories';
import HomeCard from '../../components/UI/HomeCard';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_STORES } from '../../graphql/queries/users';
import Header from '../../components/Layout/Header';
import colors from '../../components/Layout/Theme/colors';

const Home = ({navigation}: any) => {
  const {user} = useSelector((state: any) => state.auth);
  const [openFilters, setOpenFilters] = useState(false);
  const [type, setType] = useState('all');
  const [when, setWhen] = useState('all');


  const { data } = useQuery(GET_STORES, {
    context: {
      headers: {
        authorization: user.token ? `Bearer ${user.token}` : '',
      },
    },
  });

  const resetFilters = () => {
    setType('all')
    setWhen('all')
    setOpenFilters(false);
  }

  return (
    <View style={{
      backgroundColor: '#000',
      height: '100%',
      position: 'relative'
    }}>
      <Header navigation={navigation} openFilters={() => setOpenFilters(true)} filters={true} />
      <ScrollView style={{
      backgroundColor: '#000',
      height: '100%'
    }}>
        <Stories navigation={navigation} />

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


      <Modal 
            animationType='fade'
            transparent={true}
            visible={openFilters}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000'
      }}>
        <DefaultView style={{
          backgroundColor: '#000',
          width: '100%',
          height: '100%',
        }}>

        <DefaultView style={{
          paddingHorizontal: 15,
          marginTop: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          

        <TouchableOpacity
                        onPress={() => setOpenFilters(false)}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#fff" />
                    </TouchableOpacity>

        <Text style={{
          color: '#fff',
          fontSize: 16,
          fontWeight: '500'
        }}>Filtros</Text>
        <TouchableOpacity
                        onPress={() => setOpenFilters(false)}
                        style={{
                            flexDirection: 'row',
                            gap: 10,
                        }}>

                        <Icon name="chevron-back-outline" size={24} color="#000" />
                    </TouchableOpacity>
        </DefaultView>

        <DefaultView style={{
          paddingHorizontal: 15,
          marginTop: 30
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 15
          }}>Tipo de negocio</Text>
          <DefaultView style={{
            marginTop: 10,
            flexDirection: 'row',
            gap: 15,
            flexWrap: 'wrap'
          }}>
                       <TouchableOpacity
                onPress={() => setType('all')}
                style={{
                  backgroundColor: type == 'all'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: type == 'all'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: type == 'all'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Todo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType('restaurante')}
                style={{
                  backgroundColor: type == 'restaurante'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: type == 'restaurante'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: type == 'restaurante'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Restaurante
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType('discoteca')}
                style={{
                  backgroundColor: type == 'discoteca'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: type == 'discoteca'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: type == 'discoteca'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Discoteca
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType('bar')}
                style={{
                  backgroundColor: type == 'bar'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: type == 'bar'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: type == 'bar'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Bar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setType('gastrobar')}
                style={{
                  backgroundColor: type == 'gastrobar'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: type == 'gastrobar'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: type == 'gastrobar'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Gastrobar
                </Text>
              </TouchableOpacity>
              
          </DefaultView>
        </DefaultView>

        <DefaultView style={{
          paddingHorizontal: 15,
          marginTop: 30
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 15
          }}>¿Cuando?</Text>
          <DefaultView style={{
            marginTop: 10,
            flexDirection: 'row',
            gap: 15,
            flexWrap: 'wrap'
          }}>
                       <TouchableOpacity
                onPress={() => setWhen('all')}
                style={{
                  backgroundColor: when == 'all'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: when == 'all'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: when == 'all'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Todo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setWhen('restaurante')}
                style={{
                  backgroundColor: when == 'restaurante'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: when == 'restaurante'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: when == 'restaurante'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Hoy
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setWhen('bar')}
                style={{
                  backgroundColor: when == 'bar'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: when == 'bar'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20
                }}>
                <Text
                  style={{
                    color: when == 'bar'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Esta semana
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setWhen('discoteca')}
                style={{
                  backgroundColor: when == 'discoteca'
                    ? colors.dark.primary
                    : 'rgba(255,255,255,0.2)',
                  borderRadius: 10,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: when == 'discoteca'
                  ? colors.dark.primary
                  : 'rgba(255,255,255,0.2)',
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingHorizontal: 20,
                  flexDirection: 'row',
                  gap: 5
                }}>
                <Text
                  style={{
                    color: when == 'discoteca'
                      ? 'rgba(0,0,0,1)'
                      : '#fff',
                  }}
                  >
                  Ahora
                </Text>
                <Icon name='flash-outline' size={16} color='#fff' />
              </TouchableOpacity>
                      
          </DefaultView>
        </DefaultView>

<DefaultView style={{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 15,
  marginTop: 'auto',
  marginBottom: 20,
  gap: 10
}}>

                  <TouchableOpacity 
                  onPress={resetFilters}
                        style={{
                          backgroundColor:'rgba(255,255,255,0.2)',
                          borderRadius: 10,
                          padding: 5,
                          borderWidth: 1,
                          height: 40,
                          width: '48%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingHorizontal: 20
                        }}
                  >
                    <Text style={{
                      color: '#fff'
                    }}>Resetear</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  onPress={() => setOpenFilters(false)}
                  style={{
                                      backgroundColor: colors.dark.primary,
                                    borderRadius: 10,
                                    padding: 5,
                                    borderWidth: 1,
                                    height: 40,
                          width: '48%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 20
                  }}>
                    <Text style={{
                      color: '#333'
                    }}>Aplicar</Text>
                  </TouchableOpacity>
</DefaultView>

        </DefaultView>
      
      </Modal>
    </View>
  );
};

export default Home;
