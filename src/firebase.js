import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCmbtDxAuhQyU6R0-M0utq0A5snTGqGWCY",
    authDomain: "testreactjs-905a0.firebaseapp.com",
    projectId: "testreactjs-905a0",
    storageBucket: "testreactjs-905a0.appspot.com",
    messagingSenderId: "680453343287",
    appId: "1:680453343287:web:ffef376904b3cfcd9e17b2",
    measurementId: "G-YWW6SBJ2KX"


});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};