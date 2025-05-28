import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

/* const firebaseConfig = {
  apiKey: "AIzaSyAPZUs3agJJ3QJuZJ7rvOj1_DMeK37YTKw",
  authDomain: "myreactapp-79473.firebaseapp.com",
  projectId: "myreactapp-79473",
  storageBucket: "myreactapp-79473.firebasestorage.app",
  messagingSenderId: "1070185735559",
  appId: "1:1070185735559:web:5dbd2304b73f4ce67b1f22",
  measurementId: "G-BKEWZ6Z3KR"
}; */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apikey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore};