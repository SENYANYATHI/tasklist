import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAWbpNrsNwJ56BrmkNu_NCVIq_xfjS2Lhc",
  authDomain: "todolist-1024a.firebaseapp.com",
  projectId: "todolist-1024a",
  storageBucket: "todolist-1024a.appspot.com",
  messagingSenderId: "331547277857",
  appId: "1:331547277857:web:62ff2637974d93a3a04160",
  measurementId: "G-YB3ZP90CD5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db =getFirestore(app);

export{auth,db};