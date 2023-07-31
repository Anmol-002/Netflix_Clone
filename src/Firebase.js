import { getAuth } from "firebase/auth";
import "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEZt6uZrEyTXv1xTxU-Z5MDLPAJcrj7-4",
  authDomain: "netflix-clone-b896e.firebaseapp.com",
  projectId: "netflix-clone-b896e",
  storageBucket: "netflix-clone-b896e.appspot.com",
  messagingSenderId: "436439843280",
  appId: "1:436439843280:web:3323fb6b72f09f174cb9d5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
export { auth, firebaseApp };
// export default db;
