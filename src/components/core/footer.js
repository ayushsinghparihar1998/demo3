import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";


class Footer extends Component {     
  render() {
    return (
        <div className="footer">      
            <Container fluid>
                <Row>
                    <Col md={6}> 
                        <div className="fs15 fw300 col17">© 2020 EatLoveNPray. All rights reserved. </div>
                    </Col>
                    <Col md={6}>
                        <ul class="social"> 
                            <li className="pointer">Privacy Policy</li>
                            <li className="pointer">Terms & Conditions</li>
                            <li className="pointer">Site Map</li> 
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Footer; 
