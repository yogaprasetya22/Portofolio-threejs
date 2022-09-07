// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
import { getStorage } from '@firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: 'AIzaSyBqdNSsSVGUaNIDnezCgLkyuhzlKcgVc-c',
  authDomain: 'portfolio-dd69a.firebaseapp.com',
  projectId: 'portfolio-dd69a',
  storageBucket: 'portfolio-dd69a.appspot.com',
  messagingSenderId: '762138306276',
  appId: '1:762138306276:web:92fb75abd3f2fb287caef1'
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
