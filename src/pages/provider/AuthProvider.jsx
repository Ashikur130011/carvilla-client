import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';

const auth = getAuth(app);

export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();


    //google Sign In

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // state Observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
              console.log(currentUser)
              setUser(currentUser)
              setLoading(false)
            
          });
          return  () => {
            return unSubscribe()
          }
    },[])

    const logOut = () => {
        setLoading(true)
        return  signOut(auth)
    }

    

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        googleSignIn,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;