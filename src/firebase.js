import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLU8SwMQ7Tsd8paPud5ko9z4O8nQwmwfY",
  authDomain: "argonaute-cda73.firebaseapp.com",
  databaseURL:
    "https://argonaute-cda73-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "argonaute-cda73",
  storageBucket: "argonaute-cda73.appspot.com",
  messagingSenderId: "174086051900",
  appId: "1:174086051900:web:d62c52bb7e96e1c8ddcb39",
});

const db = firebaseApp.firestore();

export default db;