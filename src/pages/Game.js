import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "./return.svg";
import Deck from 'react-poker';


function Game() {
  let history = useHistory();
  return (
    <div>
      {/* <img src={require("./return.svg")} className="img-fluid" alt="Return" /> */}
      <PageTitle title="Polar Poker" />
      <Logo
        className="logo"
        onClick={() => {
          history.push("/landing");
        }}
      />
      <Container fluid className="gameContainer">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="gameStyles">
              <label className="gameTable">TABLE</label>
            </div>
          </Col>
        </Row>
        <Row className="gameContainer">
          <Col>
            <div className="posBottom">
              <button className="buttonStyles">Fold</button>
            </div>
          </Col>
          <Col>
            <div className="posBottom">
              <button className="buttonStyles">Check</button>
            </div>
          </Col>
          <Col>
            <button className="buttonStyles">Raise</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
export default Game;
