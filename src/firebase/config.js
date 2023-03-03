import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
require("firebase/auth");
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = firebaseConfig.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
console.log("firebase initailized");

const db = firebase.firestore();

// export const auth = app.auth();

export const auth = firebase.auth();

export default app;
