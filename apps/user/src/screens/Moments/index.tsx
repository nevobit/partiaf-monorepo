import React, { useState } from 'react'
import { StatusBar, Text, TouchableOpacity } from 'react-native'
import { View } from '../../components/Layout/Theme'
import { View as DefaultView } from 'react-native'
import { launchCamera } from 'react-native-image-picker'
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios'

const Moments = () => {
    const [video, setVideo] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();

    const uploadImage = async (file:any) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('image', file);
    
        try {
          const { data } = await axios.post('https://partiaf-api.xyz/api/v3/upload/image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'api-key': 'a0341d0de71a21b122a134576803f9fea2e9841a307b4e26f9240ac2f7d363ff3018a17f2d7f3ecb5a9fe62327e4eaf306864ec741e6432aa50faaf9d92aa6bd'
            },
          });
          setVideo(data.url);
          setIsLoading(false);
        } catch (error:any) {
          setIsLoading(false);
          setError(JSON.stringify(error.message))
          console.log(error)
        }
      };

    const getPhoto = () => {
        launchCamera({
            mediaType: 'video',
            videoQuality: 'high',
            saveToPhotos: true,
            presentationStyle: 'fullScreen',
            cameraType: 'back',
            durationLimit: 60
        }, (resp) => {
            if (resp.didCancel) return;
            if (!resp.assets) return;
            if (!resp.assets[0].uri) return;

            // setVideo(resp.assets[0].uri)
            const file = { uri: resp.assets[0].uri, name: resp.assets[0].fileName, type: resp.assets[0].type };
        
            uploadImage(file)
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
                width: '70%',
                fontWeight: '500'
            }}>Moments Video: {video} Error: {error}</Text>
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