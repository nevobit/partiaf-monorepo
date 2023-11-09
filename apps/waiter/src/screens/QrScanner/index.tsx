import React, { useEffect, useState } from 'react'
import { View, Dimensions, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from '../../containers/Modal';
import { colors } from '../../layout/theme/colors';
import { useMutation } from '@apollo/client';
import { UPDATE_GOER } from '../../graphql/mutations/auth';
import { request, PERMISSIONS } from 'react-native-permissions';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

const QrScanner = ({navigation}: any) => {
    const [hasPermission, setHasPermission] = useState(false);
    const [qrValue, setQrValue] = useState<any>({})
    const [light, setLight] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const [showDialogError, setShowDialogError] = useState(false)
  
    const [updateGoer, {loading, error}] = useMutation(UPDATE_GOER);
  
    useEffect(() => {
        const solicitarPermisos = async () => {
          try {
            const result = await request(PERMISSIONS.IOS.CAMERA);
            const result2 = await request(PERMISSIONS.ANDROID.CAMERA);
            
            console.log(result2)
            if (result === 'granted') {
              // Permiso concedido, puedes realizar acciones aquí
            } else {
              // Permiso denegado
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        solicitarPermisos();
      }, []);
    
    const onSubmit = async() => {
    try{

      if(qrValue.entry_status !== 'completed'){
        await updateGoer({
          variables: {
            data: {
              id: qrValue.id,
              entry_status: 'completed',
            },
          },
        }); 
        setShowDialog(true)
      }else{
        setShowDialogError(true)
      }    
    }catch(err){
        console.log(err)
        Alert.alert(String(err))
    }
  }

  const getInformation = async (e: any) => {
    const parsedData = JSON.parse(e.data);
    setQrValue(parsedData);
  };
  
  useEffect(() => {
    if(qrValue.name){
      onSubmit(); // Llama a onSubmit después de que qrValue se haya actualizado
    }
  }, [qrValue]);
 

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
            }}>Datos del Tiket: Permitido</Text>
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
                }} >Fecha: {qrValue?.ticket?.date}</Text>
                <Text style={{
                    color: '#fff',
                    marginBottom: 5,
                    fontSize: 16
                }} >Hora: {qrValue?.ticket?.hour}</Text>
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
        <Modal isVisible={showDialogError} setIsVisible={setShowDialogError}>
            <Text style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: '500',
                textAlign: 'center',
                marginBottom: 15
            }}>Ticket usado</Text>
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
                <TouchableOpacity 
                onPress={() => setShowDialogError(false)}
                style={{
                    backgroundColor: 'red',
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
        onRead={(e) => getInformation(e)}
        reactivate={true}
        reactivateTimeout={5000}
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

export default QrScanner