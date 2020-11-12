import React from 'react';
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom';

function Lobby(){
    let history = useHistory();
    
    return(
        <div >
            <PageTitle title="Poker Platform" />
            <Container fluid className="containerOptions">
                <Row className="optionsRow">
                    <Col lg={{ span: 4, offset: 4 }}>
                        
                    </Col>


                </Row>

                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Lobby;