// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


import {initializeApp} from "firebase/app";
import {Firestore, getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBOB_XSfGEiKOEgL7y_1oLkahRyWu7RxEI",
  authDomain: "natgram-b746a.firebaseapp.com",
  projectId: "natgram-b746a",
  storageBucket: "natgram-b746a.appspot.com",
  messagingSenderId: "1071834652162",
  appId: "1:1071834652162:web:83c48daf5afee0d5ec111b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const projectStorage = getStorage();
const projectFirestore = getFirestore();

export {projectFirestore, projectStorage}