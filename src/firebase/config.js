import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");
// require("firebase/auth");
// Import the functions you need from the SDKs you need

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBprbrxpYlTpNDCYs_Se88N5opGs5VbVrg",
  authDomain: "automated-attendance-sys-96fbd.firebaseapp.com",
  projectId: "automated-attendance-sys-96fbd",
  storageBucket: "automated-attendance-sys-96fbd.appspot.com",
  messagingSenderId: "300304335373",
  appId: "1:300304335373:web:b8db61cbbcca36110b8b44",
  measurementId: "G-4FQ3JRFQVS",
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
console.log("firebase initailized");

// const db = firebase.firestore();
console.log("firebase firestore");
// export const auth = app.auth();
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
console.log("firebase export auth");
// export const auth = firebase.auth();

export default app;
console.log("firebase export default app");
