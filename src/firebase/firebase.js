import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyBYpWOFqYJs_cmHOTfWfa-ezWTRV2V0wZ0",
    authDomain: "animestore-db.firebaseapp.com",
    projectId: "animestore-db",
    storageBucket: "animestore-db.appspot.com",
    messagingSenderId: "652790234300",
    appId: "1:652790234300:web:595af3ccd556ad9d7b24b9",
    measurementId: "G-MTQC4487WC"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
    // Always trigger the google popup whenever we use this GoogleAuthProvider for authentication and sign in
    provider.customParameters = {prompt:'select_account'};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;   