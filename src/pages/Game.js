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
import FiveS from "../cards/5S.svg";
import FiveH from "../cards/5H.svg";
import FiveD from "../cards/5D.svg";
import FiveC from "../cards/5C.svg";

import socketIOClient from "socket.io-client";
import UserBlock from "../components/userBlock";
import TableCards from "../components/tableCards";
import { propTypes } from "react-bootstrap/esm/Image";

const socket = socketIOClient("http://localhost:3000", {
  transports: ["websocket"],
  autoConnect: false,
});

function Game() {
  const location = useLocation(); //{"table_id": table_id, "participants_usernames": [username], "player_id": 0}

  const table_id = location.state.table_id;
  const player_id = location.state.player_id;
  const usernames = location.state.participants_usernames;
  var game = {
    pot: 200,
    participants_cards: ["AH,TwoH", "TenC,EightH", "NineC,EightC"],
    table_cards: ["TwoC", "2D", "3D"],
    current_round_type: 1,
    player_turn_id: 0,
    active_participants: [true, true, true],
    top_matching_bet: 200,
    participants_current_money: [1000, 500, 800],
    participants_bets: [0, 0, 200],
  };
  const UsersCards = () => {
    const userRows = [];
    for (let userIndex = 0; userIndex < usernames.length; userIndex++) {
      let spliceChar = game.participants_cards[userIndex].indexOf(",");
      let firstCard = game.participants_cards[userIndex].slice(0, spliceChar);
      let secCard = game.participants_cards[userIndex].slice(
        spliceChar + 1,
        game.participants_cards[userIndex].length
      );
      userRows.push(
        <UserBlock
          username={usernames[userIndex]}
          money={game.participants_current_money[userIndex]}
          betAmount={game.participants_bets[userIndex]}
          card1={{ firstCard }} //come from game.participants_cards[userIndex]
          card2={{ secCard }}
        />
      );
    }
    return <div>{userRows}</div>;
  };

  const [showCards, setShowCards] = React.useState(0);
  const deal = () => setShowCards(showCards + 1);

  let history = useHistory();
  return (
    <div>
      <PageTitle title="Polar Poker" />
      <Logo
        className="logo"
        onClick={() => {
          history.push("/landing");
        }}
      />
      <Container fluid className="testContainer">
        <div className="testUserBlock">
          <UsersCards />
        </div>

        <div className="gameStyles">
          <div className="cardLayout">
            <div className="gameTable">
              <TableCards />
            </div>
          </div>
        </div>
        {/* <div className="buttonRow">
              <button className="buttonStyles">Fold</button>
              <button className="buttonStyles">Check</button>
              <button className="buttonStyles">Call</button>
              <button className="buttonStyles">Raise</button>
            </div> */}
      </Container>
    </div>
  );
}
{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
export default Game;