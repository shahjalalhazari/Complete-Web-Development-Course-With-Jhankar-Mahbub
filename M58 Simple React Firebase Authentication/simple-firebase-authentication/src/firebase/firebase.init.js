// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxyXFH9137b28UsRQ-NX1vdWJfuktBQL8",
    authDomain: "simple-firebase-authenti-3a3a0.firebaseapp.com",
    projectId: "simple-firebase-authenti-3a3a0",
    storageBucket: "simple-firebase-authenti-3a3a0.appspot.com",
    messagingSenderId: "968415360597",
    appId: "1:968415360597:web:c91f3dc43cffe1159306dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;