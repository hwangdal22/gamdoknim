// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC76UO382ag8wictHgXm4cVR6d-jmYcZMU",
  authDomain: "gamdoknim-18712.firebaseapp.com",
  projectId: "gamdoknim-18712",
  storageBucket: "gamdoknim-18712.appspot.com",
  messagingSenderId: "1070367551016",
  appId: "1:1070367551016:web:cf51d36071a8591ed1cf1d",
  measurementId: "G-YXNJ2T6943"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
