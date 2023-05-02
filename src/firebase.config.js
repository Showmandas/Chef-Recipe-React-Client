// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf_n9gH-rWHUg8wdJlCPOR_jLTsRyy6wc",
  authDomain: "chef-auth-system.firebaseapp.com",
  projectId: "chef-auth-system",
  storageBucket: "chef-auth-system.appspot.com",
  messagingSenderId: "1048131230125",
  appId: "1:1048131230125:web:62e924ba2199abae87a924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;