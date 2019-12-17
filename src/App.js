import React from 'react';
import './App.css';
import './shared/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './Navigation';
import Home from './Home'
import Login from './Login'
import Register from './Register'


function App() {
  return (
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

  );
}

export default App;
