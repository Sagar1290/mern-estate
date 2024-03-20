// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    authDomain: "mern-estate-64e2a.firebaseapp.com",
    projectId: "mern-estate-64e2a",
    storageBucket: "mern-estate-64e2a.appspot.com",
    messagingSenderId: "874144626625",
    appId: "1:874144626625:web:bcc5dff86bec2c1646e140"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);