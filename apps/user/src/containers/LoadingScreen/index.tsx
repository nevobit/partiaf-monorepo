import { View, Text, Image, Animated, Easing } from 'react-native';
import React, { useEffect, useRef } from 'react';

const LoadingScreen = () => {
  const rotateValueHolder = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startImageRotateFunction();
  }, []);

  const startImageRotateFunction = () => {
    rotateValueHolder.setValue(0);
    Animated.timing(rotateValueHolder, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => startImageRotateFunction());
  };

  const rotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', flex: 1 }}>
      <Animated.Image
        source={{
          uri: 'https://i.ibb.co/JrHLDXM/svgviewer-png-output-1.png',
        }}
        style={{  width: 50,
          height: 50,
          resizeMode: 'contain', transform: [{ rotate: rotateData }] }}
      />
      <Text style={{
        color: '#fff',
        fontSize: 16,
        marginTop: 10
      }}>Cargando...</Text>
    </View>
  );
};

export default LoadingScreen;
