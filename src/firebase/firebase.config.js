// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvHAzAHpDa1A_F7V21zlP3-QwjZGRPBCw",
  authDomain: "user-email-password-auth-8f261.firebaseapp.com",
  projectId: "user-email-password-auth-8f261",
  storageBucket: "user-email-password-auth-8f261.appspot.com",
  messagingSenderId: "908841298793",
  appId: "1:908841298793:web:ba65e451e0b52c8295ebf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;


