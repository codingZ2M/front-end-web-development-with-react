import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut  } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBM5_xilakP7puUbdeNOpSe7LqW6yotCn8",
    authDomain: "react-netflix-clone-build.firebaseapp.com",
    projectId: "react-netflix-clone-build",
    storageBucket: "react-netflix-clone-build.appspot.com",
    messagingSenderId: "613058119973",
    appId: "1:613058119973:web:c7c9814a2e3378dc68f2cc",
    measurementId: "G-17L7G6SZ88"
  };


  initializeApp( firebaseConfig );
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export {auth, provider, signInWithPopup, onAuthStateChanged, signOut }
    
