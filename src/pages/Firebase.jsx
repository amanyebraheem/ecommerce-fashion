// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBthSXrN7TeJiaX9fr3UI55XL1i_Mf-xx4",
  authDomain: "authentication-6012e.firebaseapp.com",
  projectId: "authentication-6012e",
  storageBucket: "authentication-6012e.firebasestorage.app",
  messagingSenderId: "304545577659",
  appId: "1:304545577659:web:dc1fcaeb20189b7297079e",
  measurementId: "G-6RG5RBT0NM"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export {auth}
