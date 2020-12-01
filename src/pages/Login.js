import React from 'react';
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();

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
                            //socket.emit("newParticipant", {"username": "usernameA", "table_id" : code)
                            history.push("/lobby");
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