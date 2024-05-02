import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBUFbfz7KRym5LftmFoQuTgdETyz5dSBkM",
    authDomain: "mi-playlist-98cf2.firebaseapp.com",
    projectId: "mi-playlist-98cf2",
    storageBucket: "mi-playlist-98cf2.appspot.com",
    messagingSenderId: "499922483811",
    appId: "1:499922483811:web:dfa37c8468dd2fbe429656"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
