import React, {useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";
import { ReactComponent as Logo } from "./return.svg";
import Deck from 'react-poker';

import socketIOClient from "socket.io-client"; 

const socket = socketIOClient('http://localhost:3000', {
  transports: ['websocket'],
  autoConnect: false,
})

function Game() {


  //HOOKS data = {table_cards: asdasd, active_players: asdasdasd, big_blind_Position: jaksjdkajsd, "players_turn": akjsjdjasd}

/*

  socket.on("game", data) {
    updateData(data)
  }


*/

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
              <label className="gameTable">TABLE
                <Deck
                  board={["3s", "Qh", "As"]} // array of cards to render on board
                  boardXoffset={375} // X axis pixel offset for dealing board
                  boardYoffset={200} // Y axis pixel offset for dealing board
                  size={200} // card height in pixels
                />
              </label>
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
