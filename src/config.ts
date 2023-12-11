import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStore from '@react-native-async-storage/async-storage'
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJHECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGEBAUKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGINGSENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStore)
})
const db = getFirestore(app)

export { app, auth, db }
