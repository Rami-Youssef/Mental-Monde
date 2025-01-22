// Import the necessary functions from the Firebase SDK v9+
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";  // Use getDatabase for Realtime DB

// Your web app's Firebase configuration
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
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Realtime Database
export const database2 = getDatabase(firebaseApp);  // Correct database initialization

