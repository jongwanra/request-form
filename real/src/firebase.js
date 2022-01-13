// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaUM_BXaa78i0zqd8Zay8jrbGWutkDdX4",
  authDomain: "request-form-c787a.firebaseapp.com",
  projectId: "request-form-c787a",
  storageBucket: "request-form-c787a.appspot.com",
  messagingSenderId: "61943786456",
  appId: "1:61943786456:web:dcb2f078143045e992e0ad",
  measurementId: "G-X67CWVTYPM",
};
initializeApp(firebaseConfig);

const db = getFirestore();
export { db };
