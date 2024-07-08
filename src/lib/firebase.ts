// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzejZZWVSlyJh14KkxOjV3UMfI92wNo64",
  authDomain: "portfolio-749a0.firebaseapp.com",
  projectId: "portfolio-749a0",
  storageBucket: "portfolio-749a0.appspot.com",
  messagingSenderId: "430309179781",
  appId: "1:430309179781:web:2a5f89cad5525369ec44ec",
  measurementId: "G-E0NDZ5LEPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);