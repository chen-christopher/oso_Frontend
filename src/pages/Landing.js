import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageTitle from "../components/PageTitle";
import { useHistory } from "react-router-dom";

function Landing() {
  let history = useHistory();
  return (
    <div>
      <PageTitle title="Poker Platform" />
      <Container fluid className="containerOptions">
        <Row className="optionsRow">
          <Col lg={{ span: 4, offset: 4 }}>
            <button
              onClick={() => {
                history.push("/create");
              }}
              className="optionsButton"
            >
              Create Game
            </button>
          </Col>
        </Row>

        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="optionsButton"
            >
              Join Game
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Landing;
