
import { getApp, getApps, initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    // TODO: Add SDKs for Firebase products that you want to use


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWVj0crhikMUiOlJLb_0surWUSYkCOC9U",
  authDomain: "chatgpt-messagenr.firebaseapp.com",
  projectId: "chatgpt-messagenr",
  storageBucket: "chatgpt-messagenr.appspot.com",
  messagingSenderId: "943163886471",
  appId: "1:943163886471:web:a617cc2b37d403eb07e122"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
export { db };