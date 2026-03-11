import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Replace these with your actual Firebase project config values
// You can get this from your Firebase Console -> Project Settings -> General
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "idealpower-sydney.firebaseapp.com",
  projectId: "1062273457899", // based on your previous deployment
  storageBucket: "idealpower-sydney.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
