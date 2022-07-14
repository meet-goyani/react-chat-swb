// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_PUKYmdNXTrW2l3vwLGNc2T8KwSkf5w0",
  authDomain: "react-chat-e2b95.firebaseapp.com",
  databaseURL: "https://react-chat-e2b95-default-rtdb.firebaseio.com",
  projectId: "react-chat-e2b95",
  storageBucket: "react-chat-e2b95.appspot.com",
  messagingSenderId: "1060865081256",
  appId: "1060865081256:web:26f720d0047a70626b679d",
  measurementId: "G-1QPK1V7V2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const ad = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);