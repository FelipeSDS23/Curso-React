import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKnbNa451tacIVk5Pgs6pFVggUXGnz4kQ",
  authDomain: "miniblog-9a2d2.firebaseapp.com",
  projectId: "miniblog-9a2d2",
  storageBucket: "miniblog-9a2d2.appspot.com",
  messagingSenderId: "473543597313",
  appId: "1:473543597313:web:93c6f80bbe7b1bcbe94f00"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };