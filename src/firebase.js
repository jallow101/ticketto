// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBybH6NmWI8r0ty1Gi0vHCO_BpZRyhWfYs",
  authDomain: "ticketoo-adf4c.firebaseapp.com",
  projectId: "ticketoo-adf4c",
  storageBucket: "ticketoo-adf4c.appspot.com",
  messagingSenderId: "687585227058",
  appId: "1:687585227058:web:21410922b408cf8053672b",
  measurementId: "G-3ZKC0ZKDS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
          console.log("Multiple tabs open, persistence can only be enabled in one tab at a a time. ");
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
          console.log("The current browser does not support all of the features required to enable persistence");
      }
  });


export default db;
export  {auth, analytics};



