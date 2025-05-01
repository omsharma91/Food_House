// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsV2xrVOzumG9g33IbAfLNuONW7Tcm9jQ",
  authDomain: "foodhouse-58411.firebaseapp.com",
  projectId: "foodhouse-58411",
  storageBucket: "foodhouse-58411.firebasestorage.app",
  messagingSenderId: "911018981322",
  appId: "1:911018981322:web:2103fffb0df08e5ddec133",
  measurementId: "G-JKNPJJ8L07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()