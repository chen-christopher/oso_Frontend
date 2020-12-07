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

function nonEmptyInput(input){
  //let isValid = true;
  if(input.value.length == 0){
      return false;
  }
  return true;
}

function handleUsername(event){
  if(nonEmptyInput(event.target.value)){
    setUsername(event.target.value);
  }
  else{
    setUsername("Host");
  }
}

function createGameClick() {
    axios.get(base + "create", {
      headers: {"username": username }
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
