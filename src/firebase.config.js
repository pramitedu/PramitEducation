// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz0hc4WJFwlICqV-dRQot2N5vuPKxhNNI",
    authDomain: "pramiteducation-1a856.firebaseapp.com",
    projectId: "pramiteducation-1a856",
    storageBucket: "pramiteducation-1a856.appspot.com",
    messagingSenderId: "1062596222082",
    appId: "1:1062596222082:web:e4cfb25d1afbc50e0da89b",
    measurementId: "G-ZSRNYF0BVV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
