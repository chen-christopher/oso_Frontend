import React from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";

function Create() {
  let history = useHistory();
  var code = Math.floor(100000 + Math.random() * 900000); //generate this from the db
  return (
    <div>
      <PageTitle title="New Game" />
      <Container fluid className="containerOptions">
        <Row className="optionsRow">
            <Col lg={{ span: 4, offset: 4 }}>
                <label class='optionsButton'>
                    Username:
                    <input class = "textEntry" type="text" /> 
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
