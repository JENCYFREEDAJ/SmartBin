// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCR0X6QUymF4-u60O9Yj-bBACU0acYqUi0",
  authDomain: "smartbin-836a5.firebaseapp.com",
  projectId: "smartbin-836a5",
  storageBucket: "smartbin-836a5.appspot.com",
  messagingSenderId: "1061526649460",
  appId: "1:1061526649460:web:f10c565e8d4dae10c42f21",
  measurementId: "G-3XYPEDMHD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)