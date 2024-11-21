import { useContext, createContext, useState, useEffect } from "react";
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";

type AuthContextType = {
    currentUser: User | null;
    signUp: (email: string, password: string) => Promise<UserCredential>;
    signIn: (email: string, password: string) => Promise<UserCredential>;
    signOut: () => Promise<void>;
};


const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('context not working');
    } else {
        return context;
    }
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);


    function signUp(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function signIn(email: string, password: string) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signOut() {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setIsLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signUp,
        signIn,
        signOut
    }

    return(
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}