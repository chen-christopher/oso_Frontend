import React, {useState} from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Logo } from "./return.svg";
import { useHistory } from "react-router-dom";
import socketIOClient from "socket.io-client"; 

const socket = socketIOClient('http://localhost:3000', {
  transports: ['websocket'],
  autoConnect: false,
})

function Create() {
  let history = useHistory();
  const [connectionStatus, setConnectionStatus] = useState(false)
  const [time, setTime] = useState([])
  const [channel, setChannel] = useState()

  var code = Math.floor(100000 + Math.random() * 900000); //generate this from the db
  //send code through socket
  socket.on("connection", function(){ //im not actually sure what this does
    socket.emit('code', { code: code });
  })

  return (
    <div>
      <PageTitle title="New Game" />
      <Logo
          className="logo"
          onClick={() => {
          history.push("/landing");
          }}
      />
      <Container fluid className="containerOptions">
        <Row className="optionsRow">
            <Col lg={{ span: 4, offset: 4 }}>
                <label class='optionsButton'>
                    Username:
                    <input class = "textEntry" type="text"/> 
                </label>                       
            </Col>
        </Row>
        <Row className="optionsRow">
          <Col lg={{ span: 4, offset: 4 }}>
            <label class="optionsButton">
              Code:
              <div class="codeDisplay">{code}</div>
            </label>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <button
              onClick={() => {
                history.push("/lobby");
              }}
              className="optionsButton"
            >
              Start Game
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Create;
