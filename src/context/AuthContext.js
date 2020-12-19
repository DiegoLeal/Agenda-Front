import React, {createContext, useState} from 'react';

const AuthContext = createContext();

function inicialState() {
    return {username: '', password:''}
}

const AuthProvider = ({children}) => {
    const [userCredentials, setUserCredentials] = useState(inicialState)
    const [token, setToken] = useState('')

    return(
        <AuthContext.Provider value={{token, setToken, userCredentials, setUserCredentials}}>
            { children }
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider}
