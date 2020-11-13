import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";

function Game() {
  let history = useHistory();
  return (
    <div>
      <PageTitle title="Game UI" />
    </div>
  );
}

export default Game;
