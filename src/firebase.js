import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBUe2z-HA_SoQdWHdEkezU9CJaQWuV5Ztg",
  authDomain: "social-app-e247e.firebaseapp.com",
  projectId: "social-app-e247e",
  storageBucket: "social-app-e247e.appspot.com",
  messagingSenderId: "657369666901",
  appId: "1:657369666901:web:0eca43e24e542436cf0bdc",
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebaseApp.firestore()


export { auth, db}