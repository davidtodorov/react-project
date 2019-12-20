import React from 'react';
import './App.css';
import './shared/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/Register'

import UserProvider from './contexts/UserContext/UserProvider'


function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </Router>
    </UserProvider>

  );
}

export default App;
