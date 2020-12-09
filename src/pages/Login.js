import React, {useState} from 'react';
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { ReactComponent as Logo } from "./return.svg";

const base = "http://localhost:3000/"

function Login() {
    let history = useHistory();

    const [username, setUsername] = useState('');
    const [table_id, setID] = useState('');
    
    function handleUsername(event){
        setUsername(event.target.value);
    }

    function handleID(event){
        setID(event.target.value);
    }

    function joinGameClick() {
        axios.get(base + "join", {
            headers: {"username": username, "table_id": parseInt(table_id)} //ACTUAL USERNAME AND TABLE_ID NEEDS TO BE PASSED INSTEAD OF USERA AND TABLE_ID
          })
          .then(response => {
            console.log(response.data)
            if (response.data === "ERROR") {
                console.log("INVALID")//SHOW INVALID MESSAGE
            } else {
            history.push({
              pathname: '/lobby',
              state: response.data
            })
            }
            
      
          })
          .catch(error => {
            console.log(error);
          });
    }

    return (
        <div>
            <PageTitle title = "Login"/>
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
                                <input class = "textEntry" type="text" onChange={handleUsername} /> 
                            </form>
                        </label>                       
                    </Col>
                </Row>
                <Row className="optionsRow">
                    <Col lg={{ span: 4, offset: 4 }}>
                        <label class='optionsButton'>
                            <form>
                                Code:
                                <input class = "textEntry" type="text" onChange={handleID}/> 
                            </form>
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