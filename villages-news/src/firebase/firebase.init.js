// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS7xwdkE-KUklEAbtEKUCf_33NH7vgkhw",
  authDomain: "villages-news.firebaseapp.com",
  projectId: "villages-news",
  storageBucket: "villages-news.firebasestorage.app",
  messagingSenderId: "810362201767",
  appId: "1:810362201767:web:28e12de06eafdeac999d82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;