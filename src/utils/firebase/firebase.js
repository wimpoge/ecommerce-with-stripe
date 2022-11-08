import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsg95pNg1sBgsO0FGhnPazzfcBWByiQds",
    authDomain: "e-commerce-with-stripe-a2c7b.firebaseapp.com",
    projectId: "e-commerce-with-stripe-a2c7b",
    storageBucket: "e-commerce-with-stripe-a2c7b.appspot.com",
    messagingSenderId: "1018196273565",
    appId: "1:1018196273565:web:f1eca7d0d5039f6a572774"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    // iff user data doesnt exists
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt
            })
        } catch (error) {
            console.log(error.message)
        }
    }

    // iff user data exists
    return userDocRef

}