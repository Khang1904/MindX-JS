const firebaseConfig = {
  apiKey: "AIzaSyDDYGMfVSMvF_DHj4tGKOJPrMiELL8l6h8",
  authDomain: "testing-randomly.firebaseapp.com",
  projectId: "testing-randomly",
  storageBucket: "testing-randomly.firebasestorage.app",
  messagingSenderId: "75648014795",
  appId: "1:75648014795:web:44f3b0f22a23060c307e4e"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);