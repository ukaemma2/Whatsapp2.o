import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDD-ITm8wC7tls_ZYEkbe8kP-SpXgVALPM",
  authDomain: "clone-cd0ee.firebaseapp.com",
  projectId: "clone-cd0ee",
  storageBucket: "clone-cd0ee.appspot.com",
  messagingSenderId: "592482402834",
  appId: "1:592482402834:web:a7246b080aa72109f14ecb",
  measurementId: "G-7SG2YVSCXQ"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig)
: firebase.app()
const db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {db,auth, provider}