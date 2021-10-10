// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx54qVYxl7Ruq9zvhD5-E-OoCZ6A2t-Yk",
  authDomain: "agile-manifesto-6eccf.firebaseapp.com",
  projectId: "agile-manifesto-6eccf",
  storageBucket: "agile-manifesto-6eccf.appspot.com",
  messagingSenderId: "941014499929",
  appId: "1:941014499929:web:0a17197307c26ec672e748",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
