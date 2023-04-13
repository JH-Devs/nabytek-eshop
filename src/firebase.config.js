import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAcpLevTjKCE6HTxewybCg5eHGkNjYT8UA",
  authDomain: "nabytek-eshop.firebaseapp.com",
  projectId: "nabytek-eshop",
  storageBucket: "nabytek-eshop.appspot.com",
  messagingSenderId: "387475537313",
  appId: "1:387475537313:web:4b202624d9f43dcaad9fe0"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;