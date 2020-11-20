import React from 'react';
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Logo } from "./return.svg";
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();
    //var code;
    return (
        <div>
            <PageTitle title = "Join Game"/>
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
                            <input class = "textEntry" type="text" /> 
                        </label>                       
                    </Col>
                </Row>
                <Row className="optionsRow">
                    <Col lg={{ span: 4, offset: 4 }}>
                        <label class='optionsButton'>
                            Code:
                            <input class = "textEntry" type="text" /> 
                        </label>                       
                    </Col>
                </Row>

                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <button onClick={() => {
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