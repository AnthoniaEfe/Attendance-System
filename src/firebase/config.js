import "firebase/compat/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBprbrxpYlTpNDCYs_Se88N5opGs5VbVrg",
  authDomain: "automated-attendance-sys-96fbd.firebaseapp.com",
  projectId: "automated-attendance-sys-96fbd",
  storageBucket: "automated-attendance-sys-96fbd.appspot.com",
  messagingSenderId: "300304335373",
  appId: "1:300304335373:web:b8db61cbbcca36110b8b44",
  measurementId: "G-4FQ3JRFQVS",
};

//Init firebase app
const app = initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

//collection ref
const colRef = collection(db, "cards");

//queries, use to filter levels
const q = query(colRef, orderBy("addedAt"));
//   where("course", "==", "MCT 509"),

//real time collection data
function GetDocuments() {
  onSnapshot(q, (snapshot) => {
    let cards = [];
    snapshot.docs.forEach((doc) => {
      cards.push({ ...doc.data(), id: doc.id });
    });
    console.log(cards);
  });
}

//get single document
function GetDocument() {
  const docRef = doc(db, "cards", "L1y5Q6bU75M4teCCfN5M");
  onSnapshot(docRef, (doc) => {
    console.log(doc.data(), doc.id);
  });
}

//password reset email
function resetPassword(email) {
  sendPasswordResetEmail(email);
}

//exports
export {
  colRef,
  addDoc,
  deleteDoc,
  doc,
  db,
  serverTimestamp,
  GetDocuments,
  GetDocument,
  auth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
};
export default app;
