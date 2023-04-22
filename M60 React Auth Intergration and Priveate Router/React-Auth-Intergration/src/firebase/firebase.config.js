// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJWgvEXV7E9Z61EIiqnd1T7CPzhX7SVg8",
    authDomain: "react-auth-integration-4bf0a.firebaseapp.com",
    projectId: "react-auth-integration-4bf0a",
    storageBucket: "react-auth-integration-4bf0a.appspot.com",
    messagingSenderId: "800140640477",
    appId: "1:800140640477:web:7df8fc1afd909be0095b34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;