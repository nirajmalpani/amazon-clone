import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_eSvusHipadpNR-UgA6kvTSPtKtabrbA",
  authDomain: "clone-85120.firebaseapp.com",
  projectId: "clone-85120",
  storageBucket: "clone-85120.appspot.com",
  messagingSenderId: "1030189794227",
  appId: "1:1030189794227:web:fc277d10b0aeb56d3dc1c6",
  measurementId: "G-FGVZQ1CTSL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
