// import firebase from "firebase";
import firebase from "firebase/compat/app" ;
import "firebase/compat/auth" ;
import "firebase/compat/firestore" ;
// import firebase from 'firebase/app';
import 'firebase/compat/storage';  



const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCOZIHhfZevUXmxchdyAsXbveKRhaeRUEg",
  authDomain: "facebook-clone-bcfd6.firebaseapp.com",
  projectId: "facebook-clone-bcfd6",
  storageBucket: "facebook-clone-bcfd6.appspot.com",
  messagingSenderId: "990012157013",
  appId: "1:990012157013:web:b5873c1a37cbed5d52f8dc"
});

const auth=firebase.auth();

const provider=new firebase.auth.FacebookAuthProvider(); 

 const db=firebaseConfig.firestore();
const storage=firebase.storage();

 export {auth,provider,db,storage}
//  export {auth,provider}

