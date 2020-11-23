import Deck from "react-poker";
import React, { Component } from "react";

const Cards = props =>
    <Deck
        board={["3s", "Qh", "As"]} // array of cards to render on board
        boardXoffset={375} // X axis pixel offset for dealing board
        boardYoffset={200} // Y axis pixel offset for dealing board
        size={200} // card height in pixels
    />

export default Cards;