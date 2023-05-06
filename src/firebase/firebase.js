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

  export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    // console.log(snapShot);

    //if snapshot is not present then we create a snapshot using 
    // data from userauth object
    if(snapShot.exists === false){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error:',error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
    // Always trigger the google popup whenever we use this GoogleAuthProvider for authentication and sign in
    provider.customParameters = {prompt:'select_account'};

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;   