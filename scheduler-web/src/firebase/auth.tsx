import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth } from "../../firebase-config"

export const doSignInWithEmailAndPassword = async (auth:Auth, email:string, password:string) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignUpWithEmailAndPassword = async (auth:Auth, email:string, password:string) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
}

export const doSignOut = async () => {
    return auth.signOut();
}