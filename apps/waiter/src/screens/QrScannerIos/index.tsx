import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Dimensions, Alert, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Modal from '../../containers/Modal';
import { colors } from '../../layout/theme/colors';
import { useMutation } from '@apollo/client';
import { UPDATE_GOER } from '../../graphql/mutations/auth';

const QrScannerIos = ({navigation}: any) => {
    const [qrValue, setQrValue] = useState<any>({})
    const [light, setLight] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

    const [updateGoer, {loading, error}] = useMutation(UPDATE_GOER);

  const onSubmit = async() => {
    try{

          await updateGoer({
            variables: {
              data: {
                entry_status: 'completed',
              },
            },
            
          }); 

          setShowDialog(true)
    
    }catch(err){
        console.log(err)
        Alert.alert(String(err))
    }
  }

  return (
    <View style={{
        flex: 1
    }}>
        <Modal isVisible={showDialog} setIsVisible={setShowDialog}>
            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: 15
            }}>Datos del Tiket</Text>
            <View>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Usuario: {qrValue.user?.firstname} {qrValue.user?.lastname}</Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Nombre del evento: {qrValue.name}</Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Cantidad: {qrValue.amount}</Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Valor pagado: {qrValue.cost} </Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Fecha: {qrValue.date}</Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Hora: {qrValue.time}</Text>
                <TouchableOpacity 
                onPress={() => setShowDialog(false)}
                style={{
                    backgroundColor: colors.dark.primary,
                    width: '100%',
                    height: 40,
                    borderRadius: 30,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}><Text style={{
                    color: '#333',
                    fontSize: 16,
                    textAlign: 'center',
                    fontWeight: '500'
                }}>Aceptar</Text></TouchableOpacity>
            </View>

        </Modal>
    <QRCodeScanner
        onRead={(e) => {
            onSubmit()
            setQrValue(JSON.parse(e.data))
        }}
        reactivate={true}
        reactivateTimeout={10000}
        showMarker
        cameraContainerStyle={{
            height: Dimensions.get('window').height,
        }}
        cameraStyle={{
            height: Dimensions.get('window').height,
        }}
        bottomViewStyle={{
            height: 0,
            flex: 0,
        }}
        topViewStyle={{
            height: 0,
            flex: 0,
        }}
        flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
    />
</View>
  )
}

export default QrScannerIos