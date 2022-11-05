// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBjvgaMHuNw5IVjsZWCaaL_miUbQ_bQydY",
  authDomain: "coin-website-9028d.firebaseapp.com",
  projectId: "coin-website-9028d",
  storageBucket: "coin-website-9028d.appspot.com",
  messagingSenderId: "925275113477",
  appId: "1:925275113477:web:62a756ed993b4b9b2ab46c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore()