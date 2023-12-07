import { initializeApp } from "firebase/app";
 
const firebaseConfig = {
  apiKey: "AIzaSyAYlmPzFZq7TbhrGIWp8c_Ya75sbtWBnZY",
  authDomain: "optic-ecommers.firebaseapp.com",
  projectId: "optic-ecommers",
  storageBucket: "optic-ecommers.appspot.com",
  messagingSenderId: "889028739131",
  appId: "1:889028739131:web:3fb4a80434f6ccb787dc1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => app;