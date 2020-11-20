import React from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Logo } from "./return.svg";
import { useHistory } from "react-router-dom";

function Lobby() {
  let history = useHistory();

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
