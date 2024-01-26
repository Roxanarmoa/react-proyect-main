import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDEJtJcQvhLLimSGiS-LQtLt8cN_bkXpTk",
    authDomain: "react-proyect-51dff.firebaseapp.com",
    projectId: "react-proyect-51dff",
    storageBucket: "react-proyect-51dff.appspot.com",
    messagingSenderId: "951659575326",
    appId: "1:951659575326:web:819b58aa51ecafdf76560f"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export default db
