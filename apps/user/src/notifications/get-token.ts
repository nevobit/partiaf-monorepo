import messaging from '@react-native-firebase/messaging';
import { useUpdateUser } from '../hooks';

const getToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    console.log("TOKEN", token);
    return token;
}

export default getToken;