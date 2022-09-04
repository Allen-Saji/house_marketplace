// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

 // Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLuUyxxCji-PoTSaJ3ZQAfgH3uOUJfHOk",
  authDomain: "house-marketplace-8f9e5.firebaseapp.com",
  projectId: "house-marketplace-8f9e5",
  storageBucket: "house-marketplace-8f9e5.appspot.com",
  messagingSenderId: "558665904464",
  appId: "1:558665904464:web:8143e7fbfbfad4a8cabc55",
  measurementId: "G-7CNEM0M8D6"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
