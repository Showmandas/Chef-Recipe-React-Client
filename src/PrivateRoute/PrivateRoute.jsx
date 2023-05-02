/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <Loader/>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>
};

export default PrivateRoute;