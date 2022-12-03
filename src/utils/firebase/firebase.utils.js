import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);