// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNYOqZcGJwmIfTgJoPNBKyR5HDq62fmQw",
    authDomain: "podstream-78e71.firebaseapp.com",
    projectId: "podstream-78e71",
    storageBucket: "podstream-78e71.appspot.com",
    messagingSenderId: "576798895310",
    appId: "1:576798895310:web:644aeb2a5ca60eb903f49f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
