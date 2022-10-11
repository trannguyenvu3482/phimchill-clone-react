import { initializeApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBuWkLRruUaAw9k3c7WoO8u3-6GK3tSQOc',
  authDomain: 'phimchill-clone-react.firebaseapp.com',
  projectId: 'phimchill-clone-react',
  storageBucket: 'phimchill-clone-react.appspot.com',
  messagingSenderId: '469478573904',
  appId: '1:469478573904:web:3b007fb53aaf8f8774ce55',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const storage = getStorage(app);

export { auth, googleProvider, storage, signInWithPopup, facebookProvider };
export default db;
