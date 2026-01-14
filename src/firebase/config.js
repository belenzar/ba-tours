import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtyt_JlTwAdwNaRGh-cDJoX6KlrvVAdjA",
  authDomain: "ba-tours-79cb5.firebaseapp.com",
  projectId: "ba-tours-79cb5",
  storageBucket: "ba-tours-79cb5.firebasestorage.app",
  messagingSenderId: "447227818816",
  appId: "1:447227818816:web:4ba5420e6fa19103e9c0a5"
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
