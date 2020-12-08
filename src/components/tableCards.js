import React from "react";
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

const cardstable = [
  {
    card: "AS",
    image: AS
  },
  { card: "AD", image: AD},
  { card: "AH", image: AH},
  { card: "AC", image: AC},
  { card: "TwoS", image: TwoS },
  { card: "TwoH", image: TwoH },
  { card: "TwoD", image: TwoD },
  { card: "TwoC", image: TwoC },
  { card: "ThreeS", image: ThreeS},
  { card: "ThreeH", image: ThreeH},
  { card: "ThreeD", image: ThreeD},
  { card: "ThreeC", image: ThreeC},
  { card: "FourS", image: FourS},
  { card: "FourH", image: FourH},
  { card: "FourD", image: FourD},
  { card: "FourC", image: FourC},
  { card: "FiveS", image: FiveS},
  { card: "FiveD", image: FiveD},
  { card: "FiveH", image: FiveH},
  { card: "FiveC", image: FiveC},
  { card: "SixS", image: SixS},
  { card: "SixD", image: SixD},
  { card: "SixH", image: SixH},
  { card: "SixC", image: SixC},
  { card: "SevenS", image: SevenS},
  { card: "SevenD", image: SevenD},
  { card: "SevenH", image: SevenH},
  { card: "SevenC", image: SevenC},
  { card: "EightS", image: EightS},
  { card: "EightH", image: EightH},
  { card: "EightD", image: EightD},
  { card: "EightC", image: EightC},
  { card: "NineS", image: NineS},
  { card: "NineD", image: NineD},
  { card: "NineH", image: NineH},
  { card: "NineC", image: NineC},
  { card: "TenS", image: TenS},
  { card: "TenH", image: TenH},
  { card: "TenD", image: TenD},
  { card: "TenC", image: TenC},
  { card: "JS", image: JS},
  { card: "QS", image: QS},
  { card: "KS", image: KS},
  { card: "JD", image: JD},
  { card: "QD", image: QD},
  { card: "KD", image: KD} ,
  { card: "JH", image: JH},
  { card: "QH", image: QH},
  { card: "KH", image: KH},
  { card: "JC", image: JC},
  { card: "QC", image: QC},
  { card: "KC", image: KC}
]

function TableCards(props) {

  //set some array of the cards on the table first

  return (
    <div className="tableCardDiv">
      <div className="frontCard">
        <ul>
          {
          cardstable.map(card => (
            <img src={card.image} alt="back" />
          ))
          }
        </ul>
      </div>
    </div>
  );
}

export default TableCards;
