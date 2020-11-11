import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Create from './pages/Create';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Landing />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);


