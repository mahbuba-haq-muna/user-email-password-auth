// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEquadhWS154xK6oN1ReyX_Ihrbqn9KwA",
  authDomain: "user-email-password-auth-c182c.firebaseapp.com",
  projectId: "user-email-password-auth-c182c",
  storageBucket: "user-email-password-auth-c182c.appspot.com",
  messagingSenderId: "420313095454",
  appId: "1:420313095454:web:3248a0ec08933a1db53d0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;