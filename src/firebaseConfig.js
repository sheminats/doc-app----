import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyDwbK22IwMO0MmfZ08Jvxn_DCLO1VMjfUQ",
    authDomain: "doc-app-6f22a.firebaseapp.com",
    projectId: "doc-app-6f22a",
    storageBucket: "doc-app-6f22a.appspot.com",
    messagingSenderId: "435149325783",
    appId: "1:435149325783:web:7002a92a53661f35547792",
    measurementId: "G-5EB9R3VR8F"
  };
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)