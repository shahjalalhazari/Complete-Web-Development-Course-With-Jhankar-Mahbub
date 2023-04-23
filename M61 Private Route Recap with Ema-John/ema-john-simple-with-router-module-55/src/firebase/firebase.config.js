// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYkUQ6-zbLuT_uQN9HZGbOqyzi06NkkQg",
    authDomain: "ema-john-e-commerce-651d8.firebaseapp.com",
    projectId: "ema-john-e-commerce-651d8",
    storageBucket: "ema-john-e-commerce-651d8.appspot.com",
    messagingSenderId: "944027471098",
    appId: "1:944027471098:web:869324953b51412a57cd43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;