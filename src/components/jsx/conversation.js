import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import conversations from '../../assets/images/conversations.svg';
import professionals from '../../assets/images/professionals.svg';

class Conversations extends Component {
  render() {
    return (
        <div className="conversations">   
            <Container>
                <Row>
                    <Col md={6}> 
                        <Image src={conversations} alt="" /> 
                        <div className="fs48 fw700 col9">40,997,916</div> 
                        <div className="col3 fs40 fw600">Conversations</div>
                        <div className="fs25 fw300 col14 pt-2">The World's Largest Emotional Support System</div> 
                    </Col>

                    <Col md={6}>
                        <Image src={professionals} alt="" className="pt-4 mt-4" />
                        <div className="fs48 fw700 col9">180</div> 
                        <div className="col3 fs40 fw600">Professional Therapists</div>
                        <div className="fs25 fw300 col14 pt-2">Over 300,000 trained listeners Helped
                        over 25 million people</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Conversations;
