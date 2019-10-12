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

//IMPORTANT
//This function allows us to obtain our user from the database and store it as an object inside the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();

  // console.log({collection : collectionSnapshot.docs.map(doc => doc.data())});

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

//Function used to upload Collections and Documents to firestore as a map using a batch write
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  //console.log(collectionRef);

  //Creating firestore batch and adding docs using the reference
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // console.log(newDocRef);
    //Setting each doc with object
    batch.set(newDocRef, obj);
  });

  //waiting for the collection to be loaded with docs and then commiting them to firestore
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName:encodeURI(title.toLowerCase()), 
      id:doc.id, 
      title, 
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection; 
    return accumulator; 
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
