import React from 'react';
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom';
import axios from "axios";

const base = "http://localhost:3000/"

function Login() {
    let history = useHistory();

    function joinGameClick() {
        axios.get(base + "join", {
            headers: {"username": "USERB", "table_id": 5} //ACTUAL USERNAME AND TABLE_ID NEEDS TO BE PASSED INSTEAD OF USERA AND TABLE_ID
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
            <PageTitle title = "Login"/>

            <Container fluid className="containerOptions">
                <Row className="optionsRow">
                    <Col lg={{ span: 4, offset: 4 }}>
                        <label class='optionsButton'>
                            Code:
                            <input class = "codeEntry" type="text" /> 
                        </label>                       
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <button onClick={() => {
                            joinGameClick()
                            
                        }} className="optionsButton">
                            Join Game
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;