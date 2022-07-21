import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAujftaIPx_6OwSOy3BKi8xJO7VAQj2Qs4",
  authDomain: "airbnb-clone-c.firebaseapp.com",
  projectId: "airbnb-clone-c",
  storageBucket: "airbnb-clone-c.appspot.com",
  messagingSenderId: "813106626458",
  appId: "1:813106626458:web:1aa2c92df94b5217e04423",
  measurementId: "G-9QDGPEZV94",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
