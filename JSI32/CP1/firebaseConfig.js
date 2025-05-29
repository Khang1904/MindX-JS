const firebaseConfig = {
    apiKey: "AIzaSyDNKr7rgjY34ELhKo6MRSeKWJsUs5e4Dco",
    authDomain: "checkpoint-1-mindx.firebaseapp.com",
    projectId: "checkpoint-1-mindx",
    storageBucket: "checkpoint-1-mindx.firebasestorage.app",
    messagingSenderId: "375171367364",
    appId: "1:375171367364:web:a8e74b56786fb3bfcaa491",
    measurementId: "G-2655FKS62Z"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(); // Initialize Firebase Authentication
const googleProvider = new firebase.auth.GoogleAuthProvider(); // Google Auth Provider
console.log(firebase.app().name);