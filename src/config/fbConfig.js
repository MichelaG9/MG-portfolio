import firebase from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBiL6Wzp6AkkD0FyLxQrsChv1IlODUX6s8",
    authDomain: "portfolio-mg-ec0dd.firebaseapp.com",
    databaseURL: "https://portfolio-mg-ec0dd.firebaseio.com",
    projectId: "portfolio-mg-ec0dd",
    storageBucket: "portfolio-mg-ec0dd.appspot.com",
    messagingSenderId: "936834370558",
    appId: "1:936834370558:web:320c5a99fd5f3e3c994eaf",
    measurementId: "G-7Q5ZHYCN0N"
};

firebase.initializeApp(firebaseConfig);

export default firebase;