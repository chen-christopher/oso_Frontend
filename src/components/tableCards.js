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

function TableCards(props) {
  return (
    <div className="frontCard">
          <img src={AS} alt="back" />
          <img src={TwoC} alt="back" />
          <img src={FourS} alt="back" />
          <img src={AC} alt="back" />
          <img src={AD} alt="back" />
        </div>
  );
}

export default TableCards;