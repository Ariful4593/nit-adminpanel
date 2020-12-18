import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AdminPanel from './component/AdminPanel/AdminPanel/AdminPanel';
import Login from './component/AdminPanel/Login/Login';
import SingleStudent from './component/AdminPanel/Page/SingleStudent/SingleStudent';
import SingleTeachers from './component/AdminPanel/Page/SingleTeachers/SingleTeachers';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
        <Route exact path="/">
            <AdminPanel></AdminPanel>
          </Route>
          {/* <PrivateRoute exact path="/">
            <AdminPanel></AdminPanel>
          </PrivateRoute> */}
          <Route path="/info/:roll">
            <SingleStudent></SingleStudent>
          </Route>
          <Route path="/teachers/:id">
            <SingleTeachers/>
          </Route>
          {/* <Route path="/login">
            <Login></Login>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
