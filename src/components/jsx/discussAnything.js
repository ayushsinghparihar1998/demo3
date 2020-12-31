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
                            <div className="fs50 col8 fw700 w-100">Discuss anytime with 
                            <span className="d-block">anyone!</span> 
                            </div>

                            <div className="fs30 col8 fs300 pt-4">Get support from an online therapist</div>

                            <div className="col16 fs18 fw300 w-100 pt-4">
                            Want a little extra help? You can get ongoing support and guidance from a 
    licensed therapist when you sign up for online therapy.
                            </div>

                            <div className="col16 fs20 fw300 w-100 pt-3 pb-3"> 
                            Our confidential online therapy & counseling is available for those 
    aged 18+ for $150 per month.
                            </div>

                            <Button variant="primary" className="btnTyp3 mt-3">
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

