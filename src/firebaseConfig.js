// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7UQFCIdepehLMxgV0bdl9-_yehqKcaKY",
  authDomain: "budgetify-5bd63.firebaseapp.com",
  projectId: "budgetify-5bd63",
  storageBucket: "budgetify-5bd63.appspot.com",
  messagingSenderId: "194978510308",
  appId: "1:194978510308:web:e4c226c50924e30b5a03f1",
  measurementId: "G-YYZ509V4MK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
