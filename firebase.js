import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5_XfoT1ffzvP7ETtFFjjs1EaFU96_8J0",
  authDomain: "codenseek-0505.firebaseapp.com",
  projectId: "codenseek-0505",
  storageBucket: "codenseek-0505.firebasestorage.app",
  messagingSenderId: "561075961044",
  appId: "1:561075961044:web:d46f1691a6da00414e8f41",
  measurementId: "G-WH613D1BCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log("Firebase initialized:", app);
