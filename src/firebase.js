// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1xKAIafgLV7it_JY7s3ZIivnPMJb-VNc",
  authDomain: "auth-production-3f3f2.firebaseapp.com",
  projectId: "auth-production-3f3f2",
  storageBucket: "auth-production-3f3f2.appspot.com",
  messagingSenderId: "554687736098",
  appId: "1:554687736098:web:c39b1afce311a33b41dd7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { app, auth };
