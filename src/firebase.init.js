// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJag7hzteKMZC768RROU5DXqKSxs-dYnA",
  authDomain: "car-inventory-ed06b.firebaseapp.com",
  projectId: "car-inventory-ed06b",
  storageBucket: "car-inventory-ed06b.appspot.com",
  messagingSenderId: "127049662274",
  appId: "1:127049662274:web:482683509983d4799f52db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;