import React, { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";
import BubblePage from './components/BubblePage'

function App() {
  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="#" onClick={logOut}>logout</a>
        </header>
        <PrivateRoute exact path="bubblepage" component={BubblePage} />
        <Route exact path="/" component={Login} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.
//test.