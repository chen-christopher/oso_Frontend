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
    
    function validateUsername(usr){
        //let errors = {};
        let isValid = true;
      
        if(usr == ''){
          isValid = false;
          //errors['username'] = "must have valid username";
        }
        if(typeof(usr) !== 'undefined'){
          if(!usr.match(/^[a-zA-Z]+$/)){
            isValid = false;
            //errors['username'] = "must be letters only";
          }
        }
        //this.setstate(errors: errors)
        return isValid;
      }
      
      function handleUsername(event){
        if(validateUsername(event.target.value)){
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
            if(!usr.match(/^[0-9]+$/)){
                isValid = false;
                //errors['username'] = "must be numbers only";
            }
        }
        return isValid;
    }

    function handleID(event){
        if(idValidation(event.target.value)){
            setID(event.target.value);
        }
        //join default game?
    }

    function joinGameClick() {
        axios.get(base + "join", {
            headers: {"username": username, "table_id": parseInt(table_id)}
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