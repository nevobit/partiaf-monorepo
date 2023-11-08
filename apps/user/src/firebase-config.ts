import firebase from '@react-native-firebase/app';
import messaging  from '@react-native-firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyAIqEitHOCyeqeTdPMfyABg8DFh2nDAgig",
    authDomain: "barberapp-943ee.firebaseapp.com",
    projectId: "barberapp-943ee",
    storageBucket: "barberapp-943ee.appspot.com",
    messagingSenderId: "586583338948",
    appId: "1:586583338948:android:3aa13e470f631de974fe91",
};

const app = firebase.initializeApp(firebaseConfig);
const mess = messaging();

export default mess;
