import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import {
getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, sendSignInLinkToEmail, errorCode, errorMessage 
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyAxPh0ahB78AA3igRe8k0rE6bqDjFuuGpg",
    authDomain: "pawn-gpt.firebaseapp.com",
    projectId: "pawn-gpt",
    storageBucket: "pawn-gpt.appspot.com",
    messagingSenderId: "260525350928",
    appId: "1:260525350928:web:4d4e8c82a10c1b379eea95",
    measurementId: "G-R368B2VXL7",
});
const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user);{
    if (user != null) {
        console.log('You have been authenticated!')
    } else {
        console.log('You have not been authenticated yet!')
    };
};

const email = document.getElementById("email_input")
const password = document.getElementById("password_input")

createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    user.sendEmailVerification()
    handleStatusMessage(AUTH_SUCCESS)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage)
  });

  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    window.alert(errorMessage)
  });
