/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase.config';

export const AuthContext=createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const[user,setUser]=useState({});

    const createUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo={
        user,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;