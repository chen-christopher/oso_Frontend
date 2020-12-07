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
import UserBlock from "../components/userBlock";
import { propTypes } from "react-bootstrap/esm/Image";

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
  const [users, setUsers] = useState(location.state.participants_usernames);
  socket.open();
  socket.on("connect", () => {
    console.log("CONNECTED");
  });

  socket.emit("connectToRoom", { table_id: location.state.table_id });

  socket.on("game", (data) => {
    setUsers(data);
  });
  const [showCards, setShowCards] = React.useState(0);
  const deal = () => setShowCards(showCards + 1);
  console.log("count: " + showCards);
  const Flop = () => {
    if (showCards === 0) {
      return null;
    }
    if (showCards === 1) {
      return (
        <div className="frontCard">
          <img src={back} alt="back" />
          <img src={back} alt="back" />
          <img src={back} alt="back" />
        </div>
      );
    } else if (showCards === 2) {
      return (
        <div className="frontCard">
          <img src={AS} alt="back" />
          <img src={TwoC} alt="back" />
          <img src={FourS} alt="back" />
        </div>
      );
    } else if (showCards === 3) {
      return (
        <div className="frontCard">
          <img src={AS} alt="back" />
          <img src={TwoC} alt="back" />
          <img src={FourS} alt="back" />
          <img src={AC} alt="back" />
        </div>
      );
    } else if (showCards === 4) {
      return (
        <div className="frontCard">
          <img src={AS} alt="back" />
          <img src={TwoC} alt="back" />
          <img src={FourS} alt="back" />
          <img src={AC} alt="back" />
          <img src={AD} alt="back" />
        </div>
      );
    } else {
      setShowCards(0);
      return null;
    }
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
      {/* <UserBlock
        username={users}
        money="100"
        betAmount="50000"
        card1={back}
        card2={back}
      /> */}
      <Container fluid className="testContainer">
        <div className="testUserBlock">
          <UserBlock
            username={users}
            money="100"
            betAmount="50000"
            card1={back}
            card2={back}
          />
        </div>
        <div className="gameStyles">
          <div className="cardLayout">
            <label className="gameTable">
              <img id="backCard" src={back} />
              <button onClick={deal}>Deal</button>
              <Flop />
            </label>
          </div>
        </div>
        {/* <div className="buttonRow">
              <button className="buttonStyles">Fold</button>
              <button className="buttonStyles">Check</button>
              <button className="buttonStyles">Call</button>
              <button className="buttonStyles">Raise</button>
            </div> */}
      </Container>
      {/* <Container fluid className="gameContainer">
        <Row>
          <Col lg={{ span: 8, offset: 2 }}>
            <div className="gameStyles">
              <label className="gameTable">
                <div className="cardLayout">
                  <img id="backCard" src={back} />
                  <button onClick={deal}>Deal</button>
                </div>
                <Flop />
              </label>
            </div>
          </Col>
        </Row>
        <Row className="gameContainer">
          <Col>
            <div className="posBottom">
              <button onClick={deal}>Deal</button>
            </div>
          </Col>
          <Col>
            <div className="posBottom">
              <button onClick={deal}>Deal</button>
            </div>
          </Col>
          <Col>
            <button className="buttonStyles">Call</button>
          </Col>
          <Col>
            <button className="buttonStyles">Raise</button>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}
{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
export default Game;
