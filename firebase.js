import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI95UkHr2zhd7oXpi7vkfOZ9b_aF8fSls",
  authDomain: "whatsapp-2-3a5d0.firebaseapp.com",
  projectId: "whatsapp-2-3a5d0",
  storageBucket: "whatsapp-2-3a5d0.appspot.com",
  messagingSenderId: "250692399969",
  appId: "1:250692399969:web:55549a9711c2b79e69cb20"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app()
const db = app.firestore() 
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth, provider}