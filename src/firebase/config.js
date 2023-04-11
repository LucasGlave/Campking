// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSHWWjAgbkHasNx3bRwfVVg-HKGuiw8uY",
  authDomain: "camp-king10.firebaseapp.com",
  projectId: "camp-king10",
  storageBucket: "camp-king10.appspot.com",
  messagingSenderId: "572396644195",
  appId: "1:572396644195:web:471c5c46e67f8b20df9556"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)