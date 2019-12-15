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


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/login">
            <div>Login</div>
          </Route>
        </Switch>
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
      </div>
    </Router>

  );
}

export default App;
