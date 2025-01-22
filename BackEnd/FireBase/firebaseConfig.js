// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTR5IgLdvLEQYBEEYOGRrmFxgsZaIbbGw",
  authDomain: "mental-monde.firebaseapp.com",
  projectId: "mental-monde",
  storageBucket: "mental-monde.firebasestorage.app",
  messagingSenderId: "165149842571",
  appId: "1:165149842571:web:95d27c71f3fb57750c888e",
  measurementId: "G-7B30D8T0EX"
};

// Initialize Firebase
export const firebaseapp  = initializeApp(firebaseConfig);
export const database = getFirestore(firebaseapp)