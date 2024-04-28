// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsg81hhnaeV_HJLFiZB8bkzlIcJ7u9Tpg",
  authDomain: "ecocrafts-hub.firebaseapp.com",
  projectId: "ecocrafts-hub",
  storageBucket: "ecocrafts-hub.appspot.com",
  messagingSenderId: "1062407797466",
  appId: "1:1062407797466:web:fbe8f6cfb3bc6830fc83e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;