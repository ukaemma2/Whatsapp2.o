import { auth, db} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import '../styles/globals.css'
import Login from './login'
import Loading from '../components/Loading'
import { useEffect } from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function MyApp({ Component, pageProps }) {
const [person, loading] = useAuthState(auth)

useEffect(() => {
if(person) {
  db.collection('persons').doc(person.uid).set({
    email: person.email,
    lastseen: firebase.firestore.FieldValue.serverTimestamp(),
    photoURL: person.photoURL

},{merge: true})
} 
}, [person])

if(loading) return <Loading />
  
if(!person) return <Login />;

return <Component {...pageProps} />;
}
export default MyApp
