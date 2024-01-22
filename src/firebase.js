// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA7hx0hoTiNwVQ3ukoxzzVeLdYzrxAa_So",
  authDomain: "challenge-5be3c.firebaseapp.com",
  projectId: "challenge-5be3c",
  storageBucket: "challenge-5be3c.appspot.com",
  messagingSenderId: "642659947941",
  appId: "1:642659947941:web:9be23a370eea82d409c44c",
  measurementId: "G-BV70QY5QNS"
};


const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing
const db = firebaseApp.firestore();  //creating and storing details into database
const auth = firebase.auth();  //authorization

export { db, auth };