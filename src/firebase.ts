// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiL7nNNUgEIKOCpQOos5MvEVBPmJEenuA",
  authDomain: "my-birthday-gifts.firebaseapp.com",
  projectId: "my-birthday-gifts",
  storageBucket: "my-birthday-gifts.firebasestorage.app",
  messagingSenderId: "865933172910",
  appId: "1:865933172910:web:41f4f5f1aed28764becd3f",
  measurementId: "G-EYQ56N6D4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);