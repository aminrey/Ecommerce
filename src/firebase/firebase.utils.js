import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyB_dWNLGdEbxxxU-Kv_51A6sWDdFP7Ss0U",
  
    authDomain: "ecommerce-d4519.firebaseapp.com",
  
    projectId: "ecommerce-d4519",
  
    storageBucket: "ecommerce-d4519.appspot.com",
  
    messagingSenderId: "808171154053",
  
    appId: "1:808171154053:web:b9069327c86fb8200b97ec",
  
    measurementId: "G-JWLNCTRP60"
  
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
