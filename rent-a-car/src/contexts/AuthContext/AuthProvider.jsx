import React, { useState } from 'react';
import Cookies from 'js-cookie';
import AuthContext from './index'

const AuthProvider = (props) => {

    const [authtoken, setAuthtoken] = useState(Cookies.get('authtoken'));
    const [isAuth, setAuth] = useState(authtoken);

    const setToken = (token) => {
        Cookies.set('authtoken', token);
        setAuth(true)
        setAuthtoken(token)
    }
    const destroyToken = () => {
        Cookies.remove('authtoken');
        setAuth(false)
        setAuthtoken(null)
    }

    return (
        <AuthContext.Provider 
        value={{
            isAuth,
            authtoken, 
            setToken, 
            destroyToken,
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;