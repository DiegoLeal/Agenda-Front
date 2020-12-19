import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login';
import Contacts from '../pages/Contacts';
import {AuthProvider} from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';


function Routes() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />           
          <PrivateRoute exact path="/contatos" component={Contacts} />
        </Switch>
      </Router>
      </AuthProvider>
    </>
  );
}

export default Routes;
