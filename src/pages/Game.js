import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { useHistory, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./return.svg";
import back from "../cards/back.svg";
import AS from "../cards/AS.svg";
import AH from "../cards/AH.svg";
import AD from "../cards/AD.svg";
import AC from "../cards/AC.svg";
import TwoS from "../cards/2S.svg";
import TwoH from "../cards/2H.svg";
import TwoD from "../cards/2D.svg";
import TwoC from "../cards/2C.svg";
import ThreeS from "../cards/3S.svg";
import ThreeH from "../cards/3H.svg";
import ThreeD from "../cards/3D.svg";
import ThreeC from "../cards/3C.svg";
import FourS from "../cards/4S.svg";
import FourH from "../cards/4H.svg";
import FourD from "../cards/4D.svg";
import FourC from "../cards/4C.svg";

import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:3000", {
  transports: ["websocket"],
  autoConnect: false,
});

function Game() {
  //HOOKS data = {table_cards: asdasd, active_players: asdasdasd, big_blind_Position: jaksjdkajsd, "players_turn": akjsjdjasd}

  /*

  socket.on("game", data) {
    updateData(data)
  }


*/
  const location = useLocation();
  const [users, setUsers] = useState(location.state.participants_usernames)

  socket.open()
  socket.on('connect', () => {
    console.log("CONNECTED")
  })

  socket.emit('connectToRoom', {"table_id": location.state.table_id})

  socket.on('lobby', (data) => { 
    setUsers(data)
  })

  const [showCards, setShowCards] = React.useState(false);
  const deal = () => setShowCards(true);
  const Flop = () => {
    return (
      <div className="frontCard">
        <img src={TwoS} alt="2S" />
        <img src={ThreeH} alt="3H" />
        <img src={AS} alt="AS" />
        {/* <img src={FourH} alt="4H"/>
  <img src={ThreeS} alt="3S" /> */}
      </div>
    );
  };

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
              <label className="gameTable">
                <div className="cardLayout">
                  <img id="backCard" src={back} />
                  <button onClick={deal}>Deal</button>
                </div>
                {showCards ? <Flop /> : null}
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
