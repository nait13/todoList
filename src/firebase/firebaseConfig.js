import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9xBQo0qk3xlA-6fT-hyAn70ZfIeKhbDA",
    authDomain: "todo-gomel-91173.firebaseapp.com",
    projectId: "todo-gomel-91173",
    storageBucket: "todo-gomel-91173.appspot.com",
    messagingSenderId: "577139778441",
    appId: "1:577139778441:web:a1617b318b7a76d6c37758",
    measurementId: "G-GTSGYMQJTT"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();