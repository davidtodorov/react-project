import React from 'react';
import logo from './logo.svg';
import './App.css';
import './shared/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from './Navigation';
import Login from './Login'
import Register from './Register'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>

      </div>
    </Router>

  );
}

function Header() {
  return (
    <header className="App-header">

      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn Reactt
      </a>
    </header>
  ) 
}

export default App;
