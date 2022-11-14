// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa6zmCJU2oTrQVJx1HgHFpuXc5vFRO1DU",
  authDomain: "reactjs-tesla-clone-663c2.firebaseapp.com",
  projectId: "reactjs-tesla-clone-663c2",
  storageBucket: "reactjs-tesla-clone-663c2.appspot.com",
  messagingSenderId: "775348114772",
  appId: "1:775348114772:web:6b4d3077cbc01c37e924c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;