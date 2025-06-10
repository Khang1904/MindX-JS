const firebaseConfig = {
  apiKey: "AIzaSyDDYGMfVSMvF_DHj4tGKOJPrMiELL8l6h8",
  authDomain: "testing-randomly.firebaseapp.com",
  projectId: "testing-randomly",
  storageBucket: "testing-randomly.firebasestorage.app",
  messagingSenderId: "75648014795",
  appId: "1:75648014795:web:1ffa010a26d710b4307e4e"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const db = firebase.firestore(app);