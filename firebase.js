import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8_CXieGiaD_xYD-nzVE_H_1eqBjz00wE",
  authDomain: "hackerthone-2257d.firebaseapp.com",
  projectId: "hackerthone-2257d",
  storageBucket: "hackerthone-2257d.appspot.com",
  messagingSenderId: "859045538473",
  appId: "1:859045538473:web:7ba17880ec70745b8397b8",
  measurementId: "G-Q8H8V62H98",
};

// Initialize firebase app.
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
