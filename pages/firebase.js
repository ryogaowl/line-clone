import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDg-Qj3rzDXkYtov4rPVpJritDtiZy9VPw",
  authDomain: "line-clone-db32b.firebaseapp.com",
  projectId: "line-clone-db32b",
  storageBucket: "line-clone-db32b.appspot.com",
  messagingSenderId: "790485642551",
  appId: "1:790485642551:web:9746b55baa8a3de0877eb2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
