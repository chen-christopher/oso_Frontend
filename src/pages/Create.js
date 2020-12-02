import React, {useState} from "react";
import PageTitle from "../components/PageTitle";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ReactComponent as Logo } from "./return.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";

const base = "http://localhost:3000/"

function Create() {

const history = useHistory();

const [username, setUsername] = useState('');
const table_id = '-1'; //must be str

function handleUsername(event){
  setUsername(event.target.value);
}

function createGameClick() {
    axios.get(base + "create", {
      headers: {"username": username } //ACTUAL USERNAME NEEDS TO BE PASSED INSTEAD OF USERA
    })
    .then(response => {
      console.log(response.data)
      history.push({
        pathname: '/lobby',
        state: response.data
      })

    })
    .catch(error => {
      console.log(error);
    });
}


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
                  <form>
                    Username:
                    <input class = "textEntry" type="text"  onChange={handleUsername} /> 
                  </form>
                </label>                       
            </Col>
        </Row>
        <Row className="optionsRow">
          <Col lg={{ span: 4, offset: 4 }}>
            <label class="optionsButton">
              Code:
              <div class="codeDisplay">{table_id}</div>
            </label>
          </Col>
        </Row>
        

        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            <button
              onClick={() => {
                createGameClick()
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
