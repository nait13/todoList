import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMCD81FZnGFZiIzsj8MkZkqPVRu6lv2Zg",
  authDomain: "todo-gomel.firebaseapp.com",
  projectId: "todo-gomel",
  storageBucket: "todo-gomel.appspot.com",
  messagingSenderId: "388477249613",
  appId: "1:388477249613:web:55c0d62eb8ee2a36a89404"
};

export const app = initializeApp(firebaseConfig);