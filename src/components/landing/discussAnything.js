import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col } from "react-bootstrap";
import Getsupport from '../../assets/images/get_support.svg';

class Discussanything extends Component {     
  render() {
    
    return (
        <div className="Discussanything">      
            <Container>
                <Row>
                    <Col md={5}>
                        <div>
                            <Image src={Getsupport} alt="" />
                        </div>
                    </Col>

                    <Col md={7}> 
                        <div className="discuss">  
                            <div className="fs44 col8 fw700 w-100">Discuss anytime 
                            <span className="d-block">anywhere with anyone.</span> 
                            </div>

                            <div className="fs28 col8 fs300 pt-4">Get guidance from an ELNP Coach.</div>

                            <div className="col16 fs18 fw300 w-100 pt-4">
                            Want to bring about a positive change in your life? Get confidential guidance and counselling from our ELNP Coach.
                            </div>
                           

                            <Button variant="primary" className="btnTyp3 mt-5">
                                Get Started 
                            </Button> 
                        </div> 
                    </Col> 
                </Row>
            </Container>
        </div>
    )
  }
}

export default Discussanything;

