import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBX2o-nch5rB-xml1u8K47tRM1Sqj0eYQo",
  authDomain: "beyond-threads-db.firebaseapp.com",
  projectId: "beyond-threads-db",
  storageBucket: "beyond-threads-db.appspot.com",
  messagingSenderId: "199259441755",
  appId: "1:199259441755:web:4fe66779cfd16921210d7e",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const twitterProvider = new TwitterAuthProvider();
twitterProvider.setCustomParameters({
  prompt: "select_account",
  lang: "EN",
});

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
auth.languageCode = "it";

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithTwitter = () => signInWithPopup(auth, twitterProvider);

// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

export const db = getFirestore();
//This actually helps us get access to the firebase database.

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  //This userSnapshot allows us to check whether or not there is an instance of it that exists inside of our database. It also allows us to access the data and make necessary changes if the authority is provided.
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //If user does not exist, the usersnapshot boolean will return false and hence we create a new user with the following details and then show it in the database. If the user already exists, we just return it.

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        createdDate,
        email,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error", error.message);
    }
  }

  return userDocRef;
};
//This allows to control how the utilities will affect with respect to these services.
export const AuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SignInUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
