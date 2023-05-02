/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState({});

    //registration
    const createUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth, email, password);
    }
    //login
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
             setUser(loggedUser)
         })
         return ()=>{
             unsubscribe()
         }
     },[])
    const authInfo={
        user,
        createUser,
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;