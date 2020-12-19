import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
    const {token} = useContext(AuthContext)
    if(token != null) {
        const { data } = token
        localStorage.setItem('token', data)
    }
    return(
        <Route 
            {...rest}
            render={() => token ? <Component {...rest}/> : <Redirect to="/login"/>}
        />
    );
}

export default PrivateRoute;