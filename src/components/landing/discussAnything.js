import React, { Component } from "react";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Image, Container, Row, Col, Modal } from "react-bootstrap";
import Getsupport from '../../assets/images/get_support.svg';
import UserSignup from '../signup/userSignup';
import Crossbtn from '../../assets/images/blue_cross.svg';
class Discussanything extends Component {
    state = {
        show: false
    }
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
                                <div className="fs44 col14 fw600 w-100">Discuss anytime
                            <span className="d-block">anywhere about anything.</span>
                                </div>

                                <div className="fs28 col14 fw300 pt-4">Get guidance from an ELNP Coach.</div>

                                <div className="col16 fs18 fw300 w-100 pt-4">
                                    Want to bring about a positive change in your life? Get confidential guidance and counselling from our ELNP Coach.
                                </div>


                                <Button variant="primary" className="btnTyp3 discussBtn mt-5" onClick={()=>this.setState({ show: true })}>
                                    Get Started
                            </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} className="CreateAccount modaltwo">
                    <Modal.Header>
                        <Button onClick={this.handleClose}>
                            <Image onClick={()=>this.setState({show:false})} src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            <UserSignup {...this.props} handleSet={()=>this.setState({show:false})}/>
                        </Container>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default Discussanything;

