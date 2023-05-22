/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface Props extends TextInputProps {}

const Input = ({...rest}: Props) => {
  return (
    <TextInput
      {...rest}
      placeholderTextColor="rgba(255,255,255,0.5)"
      style={{
        borderWidth: 1,
        borderColor: '#fff',
        width: '90%',
        borderRadius: 15,
        color: '#fff',
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 15,
      }}
    />
  );
};

export default Input;
