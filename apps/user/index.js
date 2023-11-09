/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDCAzF0galPUWZVzAbEME7ns4JaNZv15Vk",
    authDomain: "partiaf-776e2.firebaseapp.com",
    projectId: "partiaf-776e2",
    storageBucket: "partiaf-776e2.appspot.com",
    messagingSenderId: "50623224650",
    appId: "1:50623224650:android:09d3d4107f9be466467fb3",
    databaseURL: 'partiaf-776e2.appspot.com'
  // Puedes eliminar esta línea si no estás utilizando la base de datos
};


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
// } else {
//     firebase.app();
// }

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//     console.log('Message handled in the background!', remoteMessage);
// });


AppRegistry.registerComponent(appName, () => App);
