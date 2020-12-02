import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Logo } from "./return.svg";
import { useHistory, useLocation } from "react-router-dom";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:3000", {
  transports: ["websocket"],
  autoConnect: false,
});

function Lobby() {
  let history = useHistory();
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

  socket.on("lobby", (data) => {
    setUsers(data);
  });

  function startButton(){
    if (location.state.player_id == '0'){
      return <button
        onClick={() => {
          history.push("/game");
        }}
        className="lobbyDiv"
        id="startButton"
      >
        Start
      </button>
    }
  }

  return (
    <div>
      <PageTitle title="Game Lobby" />
      <Logo
          className="logo"
          onClick={() => {
          history.push("/landing");
          }}
      />
      <Container fluid className="lobbyContainer">
        {users &&
          users.map((user) => (
            <p>
              <Row>
                <Col lg={{ span: 4, offset: 4 }}>
                  <label className="lobbyDiv">{user}</label>
                </Col>
              </Row>
            </p>
          ))}

        <Row>
          <div className="flexRow">
            <div>
              <label className="lobbyDiv" id="codeDisplayButton">
                Code:
                { " " + location.state.table_id} 
              </label>
            </div>

            <div id="rightCorner">
              <label id="codeDisplayButton" className="lobbyDiv">
                1/6
              </label>
              <div>
                <startButton location = {location}/>
                <button
                  onClick={() => {
                    history.push("/game");
                  }}
                  className="lobbyDiv"
                  id="startButton"
                >
                Start
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Lobby;
