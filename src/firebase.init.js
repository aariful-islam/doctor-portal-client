// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT61I1QtQLe7-mpcRcpH0LsOkzd_j8oPM",
  authDomain: "doctor-portal-c0160.firebaseapp.com",
  projectId: "doctor-portal-c0160",
  storageBucket: "doctor-portal-c0160.appspot.com",
  messagingSenderId: "1044003362576",
  appId: "1:1044003362576:web:3720678e4cb235a3923795"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
