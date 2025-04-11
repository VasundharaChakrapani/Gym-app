// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA29NZ5wiFr4ZLCokyx4SQ5Gw5CeRnRu00",
  authDomain: "gym-app-9922e.firebaseapp.com",
  projectId: "gym-app-9922e",
  storageBucket: "gym-app-9922e.firebasestorage.app",
  messagingSenderId: "933420149626",
  appId: "1:933420149626:web:df71df508846fb759b84c3",
  measurementId: "G-23WXMHJ0R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};