import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Layout/Theme'
import { View as DefaultView } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';

const Moments = () => {
    const [video, setVideo] = useState<string>();
    const getPhoto = () => {
        launchCamera({
            mediaType: 'video',
            videoQuality: 'high',
            saveToPhotos: true,
            presentationStyle: 'fullScreen',
            cameraType: 'back',
            durationLimit: 60
        }, (resp) => {
            console.log(resp)

            if (resp.didCancel) return;
            if (!resp.assets) return;
            if (!resp.assets[0].uri) return;
            console.log(resp)

            setVideo(resp.assets[0].uri)
            const file = { uri: resp.assets[0].uri, name: resp.assets[0].fileName, type: resp.assets[0].type };
        })
    }

    return (
        <View style={{
            height: '100%',
            width: '100%'
        }}>
            <StatusBar backgroundColor='transparent' />
            <Video source={video? {
                uri: video
            } : require('./video1.mp4')}
                controls={false}
                resizeMode="contain"
                style={{
                    height: '100%',
                    width: '100%',
                    zIndex: 9999
                }}
                audioOnly={false}
                repeat={true}
            />
            <Text style={{
                color: '#fff',
                position: 'absolute',
                marginTop: 60,
                marginLeft: 20,
                zIndex: 999,
                fontSize: 18,
                fontWeight: '500'
            }}>Moments</Text>
            <DefaultView style={{
                width: '100%',
                position: 'absolute',
                bottom: 0,
                padding: 15
            }}>
                <DefaultView style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 25,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10
                }}>
                    <Icon name='eye-outline' size={25} color='#fff' />
                    <Text style={{
                        color: '#fff'
                    }}>0</Text>
                </DefaultView>

            </DefaultView>
            <TouchableOpacity 
        onPress={getPhoto}
        style={{
            position: 'absolute',
            top: 60,
            right: 25,
            zIndex: 999999
        }}>
                               <Icon name='camera-outline' size={25} color='#fff' />
        </TouchableOpacity> 
        </View>
    )
}

export default Moments