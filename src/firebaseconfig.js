// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYd3ZyqcXs-JzhHqHLsRMkWeS1rIKvHOY",
  authDomain: "fir-login-ece16.firebaseapp.com",
  projectId: "fir-login-ece16",
  storageBucket: "fir-login-ece16.firebasestorage.app",
  messagingSenderId: "1062325371393",
  appId: "1:1062325371393:web:f404bfbc7c340c44447600"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;