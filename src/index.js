import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/lobby">
        <Lobby />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Landing />
    </Switch>
  </Router>,
  document.getElementById("root")
);
