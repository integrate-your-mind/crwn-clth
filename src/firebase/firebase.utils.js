import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOU8_xLr7eujauV9DqNgLxVNNyWuA_Vj8",
  authDomain: "crwn-db-ce250.firebaseapp.com",
  databaseURL: "https://crwn-db-ce250.firebaseio.com",
  projectId: "crwn-db-ce250",
  storageBucket: "",
  messagingSenderId: "712887558455",
  appId: "1:712887558455:web:ace1c4b4af467d23"
};

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase; 