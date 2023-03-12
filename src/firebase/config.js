import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
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

//collection ref
const colRef = collection(db, "cards");

//queries
// use to filter levels
const q = query(colRef, where("course", "==", "MCT 509"));

//real time collection data
//////colRef
onSnapshot(q, (snapshot) => {
  let cards = [];
  snapshot.docs.forEach((doc) => {
    cards.push({ ...doc.data(), id: doc.id });
  });
  console.log(cards);
});

//exports
export const auth = getAuth(app);
export { colRef, addDoc, deleteDoc, doc, db };
export default app;
