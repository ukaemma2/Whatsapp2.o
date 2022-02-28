import { auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import '../styles/globals.css'
import Login from './login'

function MyApp({ Component, pageProps }) {
const [user] = useAuthState(auth)
  
  if (!auth) return <Login />

  return <Component {...pageProps} />
}

export default MyApp
