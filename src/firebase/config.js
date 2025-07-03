import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config (get this from your Firebase project)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_AUTH_DOMAIN_HERE",
  projectId: "YOUR_PROJECT_ID_HERE",
  storageBucket: "YOUR_STORAGE_BUCKET_HERE",
  messagingSenderId: "YOUR_SENDER_ID_HERE",
  appId: "YOUR_APP_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQkg3pJhp71cCiJM4sp_4mx7GdvAuqsgo",
  authDomain: "skillify-113e7.firebaseapp.com",
  projectId: "skillify-113e7",
  storageBucket: "skillify-113e7.firebasestorage.app",
  messagingSenderId: "422092249529",
  appId: "1:422092249529:web:f642be5e9bb85b60af3e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);