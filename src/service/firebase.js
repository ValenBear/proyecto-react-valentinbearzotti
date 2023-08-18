// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlHA8R_WjtXoPvpYGYBqi9yBiQzTlJv58",
  authDomain: "proyecto-final-react-90860.firebaseapp.com",
  projectId: "proyecto-final-react-90860",
  storageBucket: "proyecto-final-react-90860.appspot.com",
  messagingSenderId: "165927907623",
  appId: "1:165927907623:web:e40c89c45c27111bf73902"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);