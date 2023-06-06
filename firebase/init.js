import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB6dKYdXlqoP2fLD-fffiL1So-z_vChn70',
  authDomain: 'abys-charms.firebaseapp.com',
  projectId: 'abys-charms',
  storageBucket: 'abys-charms.appspot.com',
  messagingSenderId: '316026074099',
  appId: '1:316026074099:web:3846fb29cd2d748a255886',
  measurementId: 'G-FKN45K1344'
}

initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db
