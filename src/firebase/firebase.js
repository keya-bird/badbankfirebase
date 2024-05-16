// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration you can find this in the firebase console. 
const firebaseConfig = {
  apiKey: "AIzaSyChBzs97LDnNQsg_zUsy6T4PTaWSY2UZA0",
  authDomain: "badbank-3cad3.firebaseapp.com",
  projectId: "badbank-3cad3",
  storageBucket: "badbank-3cad3.appspot.com",
  messagingSenderId: "315827515981",
  appId: "1:315827515981:web:99d0299277abc3ac9ea204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app, auth};