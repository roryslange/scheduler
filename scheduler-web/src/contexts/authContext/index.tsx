import React, { useEffect, useState, useContext, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../../firebase-config";

const AuthContext = React.createContext({
    currentUser: auth.currentUser,
    userLoggedIn: false,
    isLoading: true
});

type AuthProviderProps = {
    children: ReactNode;
};

export function useAuth() {
    return useContext(AuthContext);
}

export function authProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user: User | null) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setIsLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        isLoading,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}