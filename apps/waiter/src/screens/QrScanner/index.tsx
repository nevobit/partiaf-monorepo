import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'
import { RNCamera } from 'react-native-camera';
import { colors } from '../../layout/theme/colors';


const QrScanner = ({navigation}: any) => {
    const [qrValue, setQrValue] = useState('')
    const [light, setLight] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

  return (
    <View style={styles.container}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('covers')}
        style={{
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 9999
        }}>
            <Text style={{
                color: '#333',
                fontWeight: '600',
                fontSize: 16
            }}>Salir</Text>
        </TouchableOpacity>
    <QRCodeScanner
        onRead={(e) => {
            setShowDialog(true)
            setQrValue(e.data)
        }}
        flashMode={light ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.auto}
        topContent={<></>}
        bottomContent={
            <TouchableOpacity
                onPress={() => {setLight(!light)}}
                style={{
                    backgroundColor: colors.dark.primary,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 20,
                    width: 100,
                    alignItems: 'center',
                }}
            >
                <Text>Flash</Text>
            </TouchableOpacity>
        }
    />
    {/* <Dialog
    isVisible={showDialog}
    onBackdropPress={() => setShowDialog(!showDialog)}>
        <Dialog.Title titleStyle={{color:'#000', fontSize:25}} title="Scanned QR:"/>
        <Text style={{color:'#000', fontSize: 25}}>
            {qrValue}
        </Text>
        <Dialog.Actions>
            <Dialog.Button title="Scan Again" onPress={() => {
                this.scanner.reactivate()
                setShowDialog(false)
            }}/>
        </Dialog.Actions>
    </Dialog> */}
</View>
  )
}

export default QrScanner