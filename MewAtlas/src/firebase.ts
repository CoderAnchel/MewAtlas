import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";  "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA1jJDKqZyFTyt264ilQ7DV4QtkIpp4d1I",
    authDomain: "gatos-87cd3.firebaseapp.com",
    projectId: "gatos-87cd3",
    storageBucket: "gatos-87cd3.appspot.com",
    messagingSenderId: "85648647350",
    appId: "1:85648647350:web:f3f8bb3610ac32eb097217"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
