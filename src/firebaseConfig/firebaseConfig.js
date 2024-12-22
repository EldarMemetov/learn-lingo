import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBvl_jMC7WrXgsBKOZjRiCpZwKh6Pmc6Yg",
  authDomain: "learn-lingo-7dc83.firebaseapp.com",
  databaseURL: "https://learn-lingo-7dc83-default-rtdb.firebaseio.com",
  projectId: "learn-lingo-7dc83",
  storageBucket: "learn-lingo-7dc83.firebasestorage.app",
  messagingSenderId: "1004874940932",
  appId: "1:1004874940932:web:1612842d3ab254786a6b51",
};

const app = initializeApp(firebaseConfig);
export default app;
