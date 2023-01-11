// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD_rXVQTWEY6Xo0zYtzlzk0zP0x3he1Wos",
  authDomain: "disney-demo-996b9.firebaseapp.com",
  projectId: "disney-demo-996b9",
  storageBucket: "disney-demo-996b9.appspot.com",
  messagingSenderId: "610369691513",
  appId: "1:610369691513:web:14e7d27680ff01955b59a8",
  measurementId: "G-32DJSB9LPL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)