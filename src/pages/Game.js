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
import FiveD from "../cards/5D.svg";
import FiveH from "../cards/5H.svg";
import FiveC from "../cards/5H.svg";
import SixS from "../cards/6S.svg";
import SixH from "../cards/6H.svg";
import SixD from "../cards/6D.svg";
import SixC from "../cards/6C.svg";
import SevenS from "../cards/7S.svg";
import SevenH from "../cards/7H.svg";
import SevenD from "../cards/7D.svg";
import SevenC from "../cards/7C.svg";
import EightS from "../cards/8S.svg";
import EightD from "../cards/8D.svg";
import EightH from "../cards/8S.svg";
import EightC from "../cards/8C.svg";
import NineS from "../cards/9S.svg";
import NineD from "../cards/9D.svg";
import NineH from "../cards/9H.svg";
import NineC from "../cards/9C.svg";
import TenS from "../cards/10S.svg";
import TenD from "../cards/10D.svg";
import TenH from "../cards/10H.svg";
import TenC from "../cards/10C.svg";
import JS from "../cards/JS.svg";
import JD from "../cards/JD.svg";
import JH from "../cards/JH.svg";
import JC from "../cards/JC.svg";
import QS from "../cards/QS.svg";
import QD from "../cards/QD.svg";
import QH from "../cards/QH.svg";
import QC from "../cards/QC.svg";
import KS from "../cards/KS.svg";
import KH from "../cards/KH.svg";
import KD from "../cards/KD.svg";
import KC from "../cards/KC.svg";
import UserBlock from "../components/userBlock";
import TableCards from "../components/tableCards";
import { propTypes } from "react-bootstrap/esm/Image";


const cardstable = [
  { card: "back", image: back },
  { card: "AS", image: AS },
  { card: "AD", image: AD },
  { card: "AH", image: AH },
  { card: "AC", image: AC },
  { card: "TwoS", image: TwoS },
  { card: "TwoD", image: TwoD },
  { card: "TwoH", image: TwoH },
  { card: "TwoC", image: TwoC },
  { card: "ThreeS", image: ThreeS },
  { card: "ThreeD", image: ThreeD },
  { card: "ThreeH", image: ThreeH },
  { card: "ThreeC", image: ThreeC },
  { card: "FourS", image: FourS },
  { card: "FourD", image: FourD },
  { card: "FourH", image: FourH },
  { card: "FourC", image: FourC },
  { card: "FiveS", image: FiveS },
  { card: "FiveD", image: FiveD },
  { card: "FiveH", image: FiveH },
  { card: "FiveC", image: FiveC },
  { card: "SixS", image: SixS },
  { card: "SixD", image: SixD },
  { card: "SixH", image: SixH },
  { card: "SixC", image: SixC },
  { card: "SevenS", image: SevenS },
  { card: "SevenD", image: SevenD },
  { card: "SevenH", image: SevenH },
  { card: "SevenC", image: SevenC },
  { card: "EightS", image: EightS },
  { card: "EightD", image: EightD },
  { card: "EightH", image: EightH },
  { card: "EightC", image: EightC },
  { card: "NineS", image: NineS },
  { card: "NineD", image: NineD },
  { card: "NineH", image: NineH },
  { card: "NineC", image: NineC },
  { card: "TenS", image: TenS },
  { card: "TenD", image: TenD },
  { card: "TenH", image: TenH },
  { card: "TenC", image: TenC },
  { card: "JS", image: JS },
  { card: "JD", image: JD },
  { card: "JH", image: JH },
  { card: "JC", image: JC },
  { card: "QS", image: QS },
  { card: "QD", image: QD },
  { card: "QH", image: QH },
  { card: "QC", image: QC },
  { card: "KS", image: KS },
  { card: "KD", image: KD },
  { card: "KH", image: KH },
  { card: "KC", image: KC },
];
const test = ["back", "AS", "AD", "AH", "AC"];
function Game(props) {
  function cardIndex(card) {
    //returns the index of the card
    var ind = -1;
    if (card.includes("1")) {
      ind = 1;
    }
    if (card.includes("2")) {
      ind = 5;
    }
    if (card.includes("3")) {
      ind = 9;
    }
    if (card.includes("4")) {
      ind = 13;
    }
    if (card.includes("5")) {
      ind = 17;
    }
    if (card.includes("6")) {
      ind = 21;
    }
    if (card.includes("7")) {
      ind = 25;
    }
    if (card.includes("8")) {
      ind = 29;
    }
    if (card.includes("9")) {
      ind = 33;
    }
    if (card.includes("10")) {
      ind = 37;
    }
    if (card.includes("11")) {
      ind = 41;
    }
    if (card.includes("12")) {
      ind = 45;
    }
    if (card.includes("13")) {
      ind = 49;
    }
    if (card.includes("S")) {
      //do nothing
    }
    if (card.includes("D")) {
      ind += 1;
    }
    if (card.includes("H")) {
      ind += 2;
    }
    if (card.includes("C")) {
      ind += 3;
    }
    if (card.includes("back")) {
      ind = 0;
    }
    return ind;
  }
  const location = useLocation(); 

  const socket = props.socket
  socket.open()

  const table_id = location.state.table_id;
  const player_id = location.state.player_id;
  const usernames = location.state.participants_usernames;
  const [game, setGame] = useState({
    game_id: 0,
    pot: 200,
    participants_cards: ["TenH,EightD", "TenC,EightH", "NineC,EightC"],
    table_cards: ["TwoC", "TwoD", "ThreeD", "ThreeH", "woH"],
    current_round_type: 1,
    player_turn_id: 0,
    active_participants: [true, true, true],
    top_matching_bet: 200,
    participants_current_money: [1000, 500, 800],
    participants_bets: [0, 0, 200],
  });

  socket.on('action', (data) => { 
    console.log(data)
    setGame(data)
    
  })


  function fold() {
    socket.emit("sendAction", {
      game_id: game.game_id,
      player_id: player_id,
      action_type: 0,
      amount: 0
    })

  }
  function check() {
    socket.emit("sendAction", {
      game_id: game.game_id,
      player_id: player_id,
      action_type: 1,
      amount: 0
    })

  }
  function call() {
    socket.emit("sendAction", {
      game_id: game.game_id,
      player_id: player_id,
      action_type: 2,
      amount: 0
    })

  }
  function raise() {
    socket.emit("sendAction", {
      game_id: game.game_id,
      player_id: player_id,
      action_type: 3,
      amount: 100
    })

  }
  
  const UsersCards = () => {
    const userRows = [];
    for (let userIndex = 0; userIndex < game.participants_cards.length; userIndex++) {
      let spliceChar = game.participants_cards[userIndex].indexOf(",");
      let firstCard = game.participants_cards[userIndex].slice(0, spliceChar);
      let secCard = game.participants_cards[userIndex].slice(
        spliceChar + 1,
        game.participants_cards[userIndex].length
      );
      let cardIndexNum1 = cardIndex(firstCard);
      let cardIndexNum2 = cardIndex(secCard);
      let userCard1 = cardstable[cardIndexNum1].image;
      let userCard2 = cardstable[cardIndexNum2].image;

      
      userRows.push(
        <UserBlock
          currentUser = {userIndex === player_id}
          currentPlayer = {userIndex === game.player_turn_id}
          username={usernames[userIndex]}
          money={game.participants_current_money[userIndex]}
          betAmount={game.participants_bets[userIndex]}
          firstCard={userCard1} //come from game.participants_cards[userIndex]
          secondCard={userCard2}
          backCard={cardstable[0].image}
        />
      );
    }
    return <div>{userRows}</div>;
  };
  const CenterCards = () => {
    let card1_Index = cardIndex(game.table_cards[0]);
    let card2_Index = cardIndex(game.table_cards[1]);
    let card3_Index = cardIndex(game.table_cards[2]);
    let card4_Index = cardIndex(game.table_cards[3]);
    let card5_Index = cardIndex(game.table_cards[4]);
    let c1 = cardstable[card1_Index].image;
    let c2 = cardstable[card2_Index].image;
    let c3 = cardstable[card3_Index].image;
    let c4 = cardstable[card4_Index].image;
    let c5 = cardstable[card5_Index].image;
    return (
      <TableCards
        backCard={cardstable[0].image}
        rountType = {game.current_round_type}
        center1={c1}
        center2={c2}
        center3={c3}
        center4={c4}
        center5={c5}
      />
    );
  };
  const [showCards, setShowCards] = React.useState(0);
  const deal = () => setShowCards(showCards + 1);

  const totalBet = () => {
    var sum = 0
    for (var i=0; i < game.participants_bets; i++) {
      sum += 50
    }
    return (
      <h1>
        BET: {game.participants_bets.reduce(function(a, b) { return a + b; }, 0)}
      </h1>
    )
  }

  const winnerDisplay = () => {
    if (game.winner != null) {
      return (
        <div className="winner">
          <h1>
          WINNER:  {usernames[game.winner]} 
        </h1>
        <h2>
          {game.winnerPattern.slice(8)}
        </h2>
        </div>
        
      )
    }
    return
    
  }

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
              <CenterCards />
              {totalBet()}
              {winnerDisplay()}
            </div>
            
            <div className="buttonRow">
              <button onClick= {fold} onclick="" className="buttonStyles">Fold</button>
              <button onClick= {check} className="buttonStyles">Check</button>
              <button onClick= {call} className="buttonStyles">Call</button>
              <button onClick= {raise}  className="buttonStyles">Raise</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
{
  /* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
}
export default Game;
