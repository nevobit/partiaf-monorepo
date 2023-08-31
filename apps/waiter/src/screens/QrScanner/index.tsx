import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';


const QrScanner = ({navigation}: any) => {
    const [qrValue, setQrValue] = useState('')
    const [light, setLight] = useState(false)
    const [showDialog, setShowDialog] = useState(false)

  return (
    <View style={{
        flex: 1
    }}>
    <QRCodeScanner
        onRead={(e) => {
            setShowDialog(true)
            setQrValue(e.data)
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
        topContent={<>
        </>}
    />
</View>
  )
}

export default QrScanner