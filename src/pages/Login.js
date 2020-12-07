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
    var err = false;

    const [username, setUsername] = useState('');
    const [table_id, setID] = useState('');
    
    function nonEmptyInput(input){
        //let isValid = true;
        if(String(input).length == 0){
            return false;
        }
        return true;
    }
      
    function handleUsername(event){
        if(nonEmptyInput(event.target.value)){
            setUsername(event.target.value);
        }
        else{
            setUsername("Guest");
        }
    }

    function idValidation(id){
        let isValid = true;
        if(id == ''){
            isValid = false;
        }
        if(typeof(id) !== 'undefined'){
            if(!id.match(/^[0-9]+$/)){
                isValid = false;
            }
        }
        return isValid;
    }

    function handleID(event){
        if(idValidation(event.target.value)){
            setID(event.target.value);
        }  //join default game?
    }

    function idError(msg){
        if(msg){ //if true
            return (
                <Row className="optionsRow">
                    <Col lg={{ span: 4, offset: 4 }}>
                        <label class='optionsButton'>
                            INVALID GAME CODE
                        </label>                       
                    </Col>
                </Row>
            )
        }
        else{
            return null;
        }
    }

    function joinGameClick() {
        axios.get(base + "join", {
            headers: {"username": username, "table_id": parseInt(table_id)}
          })
          .then(response => {
            console.log(response.data)
            if(response.data == "ERROR"){
                err = true;
            } 
            else {
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
                <div>
                    <idError msg = {err}/>
                </div>
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