import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP2gwf7K1qW6vklSmPdy46kpEWbfU3v_Q",
  authDomain: "challenge-93cd9.firebaseapp.com",
  projectId: "challenge-93cd9",
  storageBucket: "challenge-93cd9.appspot.com",
  messagingSenderId: "814495241050",
  appId: "1:814495241050:web:e856e6935094e21dfe1963",
  measurementId: "G-P9L27N834E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
