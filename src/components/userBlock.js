import React from "react";
function UserBlock(props) {
  let test = "AH";
  return (
    <div className="userDiv">
      <div className="userInfo">
        <label>{props.username}</label>
        <label>Money: {props.money}</label>
        <label>Bet Amount: {props.betAmount}</label>
      </div>
      <div className="userBlockCards">
        <img src={props.card1} />
        <img src={props.card2} />
      </div>
    </div>
  );
}

export default UserBlock;
