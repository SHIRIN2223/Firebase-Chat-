// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0El20O0GuC329mBbDMKv1pg8yFSjWkQ8",
  authDomain: "chat-49a27.firebaseapp.com",
  projectId: "chat-49a27",
  storageBucket: "chat-49a27.appspot.com",
  messagingSenderId: "305318928085",
  appId: "1:305318928085:web:fb03e04b60fd9709ce8c5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını alma
export const auth = getAuth (app);

// sağlayıcının kurulumunu yapma
export const provider = new GoogleAuthProvider();

// veritabanın referansını alma
export const db = getFirestore(app)