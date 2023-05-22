/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeCard from '../../components/UI/HomeCard';

const Home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          overflow: 'scroll',
          paddingHorizontal: 15,
          paddingVertical: 30,
        }}>
        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: '#000',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/GVRTSzP/52696599642627236248.webp',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Nestor
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'rgb(255, 226, 67)',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/kqP9Dz7/ive-member-wonyoung-profile-facts-tmi-2.jpg',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Maria
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'rgb(255, 226, 67)',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/TWGQCbW/Pkht-Ho-Y-400x400.jpg',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Karol
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'rgb(255, 226, 67)',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/Q8BQGxC/photo-1615109398623-88346a601842.jpg',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Alessandro
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'rgb(255, 226, 67)',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/87Rdyx1/photo-1618517047977-854f5c4b6976.jpg',
                }}
              />
            </View>
          </View>

          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Franklin
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            gap: 5,
          }}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'rgb(255, 226, 67)',
              borderRadius: 50,
            }}>
            <View
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
                  uri: 'https://i.ibb.co/GVRTSzP/52696599642627236248.webp',
                }}
              />
            </View>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
            }}>
            Josue
          </Text>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          paddingLeft: 20,
        }}>
        <View
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

          <TouchableOpacity>
            <Text
              style={{
                color: '#fff',
              }}>
              Mostrar todo
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </ScrollView>
      </View>

      <View
        style={{
          width: '100%',
          paddingLeft: 20,
          marginTop: 40,
        }}>
        <View
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
        </View>

        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </ScrollView>
      </View>
      <View
        style={{
          width: '100%',
          paddingLeft: 20,
          marginTop: 20,
        }}>
        <View
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
              paddingRight: 20,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Mostrar todo
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
