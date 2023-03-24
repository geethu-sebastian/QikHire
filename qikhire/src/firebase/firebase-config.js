
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA0qCaHGoJRkOl-C9lPgOmTsuNSa5RxElY",
  authDomain: "qikhire-f6e90.firebaseapp.com",
  projectId: "qikhire-f6e90",
  storageBucket: "qikhire-f6e90.appspot.com",
  messagingSenderId: "470632275674",
  appId: "1:470632275674:web:b9f1fa00798d71bb964fe3"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)