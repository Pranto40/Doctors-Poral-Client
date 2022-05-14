// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLCj19EkydoylQFqSh8Aylcki9EwMB0Wo",
  authDomain: "doctors-portal-8ffa3.firebaseapp.com",
  projectId: "doctors-portal-8ffa3",
  storageBucket: "doctors-portal-8ffa3.appspot.com",
  messagingSenderId: "872686904271",
  appId: "1:872686904271:web:91faec112b95c75e58e8ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;