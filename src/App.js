import React, { useState } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

import Login from './views/login/login';
import Signup from './views/signup/signup';
import Dash from './views/dash/dash';
import MyProfile from './views/profile/profile';

import PrivateRoute from './privateRoute';

import { UserContext } from './context/userContext';
import { TaskAddedContext } from './context/taskAddedContext';


function App() {
  const [userInfo, setUserInfo] = useState({username: '', wallet: null});
  const [added, setAdded] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
        <TaskAddedContext.Provider value={{ added, setAdded }}>
          <Route exact path='/'>
            <Redirect to='/login'/>
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dash' component={Dash} />
          <PrivateRoute exact path='/profile' component={MyProfile}/>
          <GlobalStyles/>
        </TaskAddedContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
