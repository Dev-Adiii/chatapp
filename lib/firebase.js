import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

// 🔹 Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDzTklKcZrrdlH9faau07TDggj9RJWrOxo",
  authDomain: "chatapp-ab8e1.firebaseapp.com",
  projectId: "chatapp-ab8e1",
  storageBucket: "chatapp-ab8e1.firebasestorage.app",
  messagingSenderId: "958989125742",
  appId: "1:958989125742:web:a3a0917cd61a128f7c3e7f",
  measurementId: "G-PNNHJ5P9NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };
