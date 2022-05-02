// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjxpRqN3ixOjwZ7KXfRyoiJXj_hZPHoI4",
  authDomain: "crwn-db-f5260.firebaseapp.com",
  projectId: "crwn-db-f5260",
  storageBucket: "crwn-db-f5260.appspot.com",
  messagingSenderId: "527934674908",
  appId: "1:527934674908:web:54e66f9087dd8cbb33a119",
  measurementId: "G-73LN0WZTYJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
const db = getFirestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return; // if there is no userAuth (user is not signed in), return nothing

    const docRef = doc(db, `users/${userAuth.uid}`);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) { // if the user id does not exist in our database, then we create one 
        // document for that relative user
        const {displayName, email} = userAuth
        const createdAt = new Date() // the first time the user logged in

        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return docRef
}

const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => signInWithPopup(auth, provider);
//  prompt users to sign in with their Google Accounts by opening a pop-up window 