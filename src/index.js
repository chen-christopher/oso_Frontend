import React from "react";
import ReactDOM from "react-dom";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Create from "./pages/Create";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("https://node-poker-backend.herokuapp.com/", {
  transports: ["websocket"],
  autoConnect: false,
});

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
        <Lobby socket = {socket} />
      </Route>
      <Route path="/game">
        <Game socket = {socket} />
      </Route>
      <Landing />
    </Switch>
  </Router>,
  document.getElementById("root")
);
