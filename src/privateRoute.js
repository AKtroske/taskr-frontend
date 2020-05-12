import React, {useContext} from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import { UserContext } from './context/userContext';
import authHeader from './services/authHeader';
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api/';

//Nested information from route
const PrivateRoute = ({ component: Component, ... rest}) => {

  // const { component: Component, ... rest } = props;

  let { userInfo, setUserInfo } = useContext(UserContext);

  const verifyLoggedIn = async () => {
    const res = await axios.get(BASE_URL + 'users/verify', { headers:authHeader() })
    setUserInfo({loggedIn:res.data.success});
    return res.data.sucesss
  }

  return (
    <Route
      {...rest}
      render={props =>
        verifyLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
)}

export default PrivateRoute;
