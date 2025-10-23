// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkC7SaOcTZN0CwnM2Gr0NLv3FhTi0W9wQ",
  authDomain: "skillswap-739e4.firebaseapp.com",
  projectId: "skillswap-739e4",
  storageBucket: "skillswap-739e4.firebasestorage.app",
  messagingSenderId: "1088192730919",
  appId: "1:1088192730919:web:18529704bf6f2e61b7fb02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);