// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth' 
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Qmd4XAkLlm1pJWeB1ebb4fx6CbTQrDQ",
  authDomain: "react-firebase-970eb.firebaseapp.com",
  projectId: "react-firebase-970eb",
  storageBucket: "react-firebase-970eb.appspot.com",
  messagingSenderId: "174027052657",
  appId: "1:174027052657:web:7cf1ba0107027cc38b6dd0",
  measurementId: "G-3BT53XJ9V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);   
export const auth =getAuth(app); 
export const db=getFirestore(app);