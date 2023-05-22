/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Input} from '../../components';

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 90,
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        backgroundColor: '#0c0c0c',
      }}>
      <Text
        style={{
          color: '#fff',
          fontWeight: '600',
          fontSize: 38,
          marginBottom: 10,
        }}>
        Bienvenido a Partiaf
      </Text>
      <Text
        style={{
          color: '#fff',
          marginBottom: 60,
        }}>
        Los eventos mas divertidos, inicia sesion ahora!
      </Text>

      <Input placeholder="Usuario" />
      <Input placeholder="Contrasena" />
      <TouchableOpacity
        style={{
          backgroundColor: 'rgb(255, 226, 67)',
          width: '90%',
          borderRadius: 15,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
          }}>
          Iniciar Sesion
        </Text>
      </TouchableOpacity>
      <View
        style={{
          marginTop: 60,
        }}>
        <Text
          style={{
            color: '#FFFFFF',
          }}>
          O inicia sesion con
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 23,
                height: 23,
              }}
              source={{
                uri: 'https://i.ibb.co/F6Wcdwh/google-logo.png',
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#fff',
              width: 40,
              height: 40,
              borderRadius: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                width: 23,
                height: 23,
              }}
              source={{
                uri: 'https://i.ibb.co/hYz1cZT/apple-emblem.jpg',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          marginTop: 40,
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          ¿No tienes una cuenta?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: 'rgb(255, 226, 67)',
              fontWeight: '600',
            }}>
            Registrate ahora
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
