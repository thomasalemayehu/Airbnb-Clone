// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAujftaIPx_6OwSOy3BKi8xJO7VAQj2Qs4",
  authDomain: "airbnb-clone-c.firebaseapp.com",
  projectId: "airbnb-clone-c",
  storageBucket: "airbnb-clone-c.appspot.com",
  messagingSenderId: "813106626458",
  appId: "1:813106626458:web:1aa2c92df94b5217e04423",
  measurementId: "G-9QDGPEZV94",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
