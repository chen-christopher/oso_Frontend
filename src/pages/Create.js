import React from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import axios from "axios";


const base = "http://localhost:3000/"

function Create() {


//CREATE CLICK 

//1.API create and get back table_id
//2. socket.emit("newParticipant", {"username": "usernameA", "table_id" : table_id})

const history = useHistory();
function createGameClick() {
    //1.API create and get back table_id

    

    axios.get(base + "create", {
      headers: {"username": "USERA"}
    })
    .then(response => {
      console.log(response.data)
      history.push({
        pathname: '/lobby',
        state: response.data// your data array of objects
      })

    })
    .catch(error => {
      console.log(error);
    });
}



  
  var code = Math.floor(100000 + Math.random() * 900000); //generate this from the db
  return (
    <div>
      <PageTitle title="New Game" />
      <Container fluid className="containerOptions">
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
                createGameClick()
                //history.push("/lobby");
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
