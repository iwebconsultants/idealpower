import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase project config values
// You can get this from your Firebase Console -> Project Settings -> General
const firebaseConfig = {
  apiKey: "AIzaSyD1AD4_oJUdgBtrLoQiwBO4BocRfeKKig0",
  authDomain: "idealpower-sydney.firebaseapp.com",
  projectId: "1062273457899",
  storageBucket: "idealpower-sydney.firebasestorage.app",
  messagingSenderId: "1062273457899",
  appId: "1:1062273457899:web:6f505c6d609a07ab6d68ae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
