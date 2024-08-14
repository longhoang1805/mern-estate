// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dbcb5.firebaseapp.com",
  projectId: "mern-estate-dbcb5",
  storageBucket: "mern-estate-dbcb5.appspot.com",
  messagingSenderId: "144645772106",
  appId: "1:144645772106:web:eee7363fbd50c8fd2e67b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);