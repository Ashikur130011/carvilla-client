import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
       return <span className="loading loading-ring loading-lg"></span>
    }

    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/login' />
};

export default ProtectedRoute;