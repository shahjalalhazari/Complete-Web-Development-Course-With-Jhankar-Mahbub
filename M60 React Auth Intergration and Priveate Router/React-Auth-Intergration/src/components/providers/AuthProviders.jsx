import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // User SignUp/Register
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // User Login
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    // User LogOut/SignOut
    const logOut = () => {
        return signOut(auth);
    }


    // Get the current user and observe auth state change
    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;
