import React from "react";
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

function Lobby() {
  let history = useHistory();
  
  const [connectionStatus, setConnectionStatus] = useState(false)
  const [time, setTime] = useState([])
  const [channel, setChannel] = useState()

  useEffect(() => {
    socket.on(channel, (data) => {
      setTime((prev) => [data, ...prev])
    })
  }, [channel])

  const handleSocket = () => {
    socket.open()
    socket.on('connect', () => {
      setChannel(socket.connected ? socket.id : '')
    })
  }

  const handleToggle = () => {
    socket.connected ? socket.close() : handleSocket()
    setConnectionStatus((prev) => !prev)
    setTime([])
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
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Host: XxPolarDealerxX</label>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Waiting for players . . .</label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Waiting for players . . .</label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Waiting for players . . .</label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Waiting for players . . .</label>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <label className="lobbyDiv">Waiting for players . . .</label>
          </Col>
        </Row>
        <Row>
          <div className="flexRow">
            <div>
              <label className="lobbyDiv" id="codeDisplayButton">
                Code:
              </label>
            </div>

            <div id="rightCorner">
              <label id="codeDisplayButton" className="lobbyDiv">
                1/6
              </label>
              <div>
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
