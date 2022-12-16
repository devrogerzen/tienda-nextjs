// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClszWZddjUNMRFZL9alsfsApUbOwAGQHo",
  authDomain: "tienda-nextjs.firebaseapp.com",
  projectId: "tienda-nextjs",
  storageBucket: "tienda-nextjs.appspot.com",
  messagingSenderId: "22575905991",
  appId: "1:22575905991:web:bf0fe370c2844e8487d2e2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp