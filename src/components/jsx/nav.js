import React, { Component } from "react";
import { connect } from "react-redux";
import { Nav, NavDropdown, Navbar, Container, Form, FormControl, Button, Image, Modal, Row, Col } from "react-bootstrap";
import { Link, NavLink, Router } from "react-router-dom";
import logo from "../../assets/images/logos.png";
import insta from "../../assets/images/insta.svg";
import { ToastContainer, toast } from 'react-toastify';
import { actionLogout } from "../../common/redux/actions";
import fb from "../../assets/images/fb.svg";
import twit from "../../assets/images/twit.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Crossbtn from "../../assets/images/blue_cross.svg";
import Signup from '../jsx/listenersignup/signup';
import ProfessionalSignup from '../signup/professionalSignup';
import UserSignup from '../signup/userSignup';
import { getLocalStorage, setLocalStorage } from "../../common/helpers/Utils";
class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
            show2: false,
            show3: false,
        };
    }
    handleModal = () => {
        this.setState({ show: true });
    };
    handleClose = () => {
        this.setState({ show: !this.state.show });
    };
    handleModal2 = () => {
        this.setState({ show2: true });
    };

    handleClose2 = () => {
        this.setState({ show2: false });
    };

    handleModal3 = () => {
        this.setState({ show3: true });
    };

    handleClose3 = () => {
        this.setState({ show3: false });
    };

    handleLogout = () => {
        let data = {}
        this.props
            .actionLogout(data)
            .then((result) => {
                this.props.history.push({ pathname: "/" });
                setLocalStorage("userInfo", '');
                setLocalStorage("userInfoProff", '');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    goToLoginPage = () => {
        this.props.history.push({
            pathname: 'login',
            state: { path: this.state.roleType }
        });
        //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
    }
    render() {
        return (
            <div className="mj_nav">
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                />
                {/* Same as */}
                <ToastContainer />
                <Navbar bg="" expand="lg">
                    <NavLink to="/" className="nav-link navbar-brand">
                        <Image src={logo} alt="" /> Eat Luv N Pray
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">
                            {getLocalStorage("userInfo") || getLocalStorage("userInfoProff")
                                || getLocalStorage("customerInfo") ?
                                [<NavLink to="/myprofile" className="nav-link">
                                    My Profile
                            </NavLink>,
                                <NavLink to="/editprofile" className="nav-link">
                                    Edit Profile
                    </NavLink>] : [
                                    <NavLink to="/becomeListener" className="nav-link">
                                        Connect Now
                                    </NavLink>,
                                    <Nav.Link onClick={this.handleModal}>Volunteer as a Listener</Nav.Link>,
                                    <NavDropdown title="CSR" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Another</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                                    </NavDropdown>,
                                    <NavDropdown title="Communities" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#">Anxiety</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Women Rights</NavDropdown.Item>
                                        <NavDropdown.Item href="#">LGBTQA</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Men Rights</NavDropdown.Item>
                                    </NavDropdown>,
                                    <Nav.Link onClick={this.handleModal3}>Professionals</Nav.Link>,
                                    <Nav.Link onClick={this.handleModal2}>Faq</Nav.Link>]}

                                    <NavDropdown title="Login" id="login-nav-dropdown" className="btnTypeone d-none">
                                        <NavDropdown.Item>Listener Login</NavDropdown.Item> 
                                        <NavDropdown.Item>Professional Login</NavDropdown.Item>
                                        <NavDropdown.Item>User Login</NavDropdown.Item> 
                                    </NavDropdown>

                            <Form inline> 
                                <span>  
                                    {getLocalStorage("userInfo") || getLocalStorage("userInfoProff")
                                        || getLocalStorage("customerInfo") ?
                                        <div onClick={this.handleLogout} className="btnType1">
                                            Logout
                                    </div>
                                        :
                                        <NavLink to="/login" className="btnType1">
                                            Login
                                    </NavLink>}

                                </span>
                                <span>
                                    <Image src={insta} alt="" className="pointer" />
                                </span>
                                <span>
                                    <Image src={fb} alt="" className="pointer" />
                                </span>
                                <span>
                                    <Image src={twit} alt="" className="pointer" />
                                </span>
                                <span>
                                    <Image src={linkedin} alt="" className="pointer" />
                                </span>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {/* user registration start */}

                <Modal show={this.state.show} className="CreateAccount modaltwo">
                    <Modal.Header>
                        <Button onClick={this.handleClose}>
                            <Image src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            <UserSignup {...this.props} />
                        </Container>

                    </Modal.Body>
                </Modal>

                {/* user registration end */}

                {/* Create a member account start */}

                <Modal show={this.state.show3} className="CreateAccount">
                    <Modal.Header>
                        <Button onClick={this.handleClose3}>
                            <Image src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>
                            <div className="layout_box mt-3 mb-4">
                                <ProfessionalSignup {...this.props} />
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>

                {/* Create a member account end */}

                {/* Question answer start */}

                <Modal show={this.state.show2} className="CreateAccount question">
                    <Modal.Header>
                        <Button onClick={this.handleClose2}>
                            <Image src={Crossbtn} alt="" />
                        </Button>
                    </Modal.Header>

                    <Modal.Body>
                        <Container>  
                            <div className="layout_box mt-3 mb-4">
                                <div className="col10 fs30 fw600 mb-2">Create Your Account</div>
                                <div className="fs300 fs20 col14 mb-4 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                                <div className="col11 fs20 fw500">
                                    <span className="fw600 col29">Question 1.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                </div>
                                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">iste natus error sit voluptatem accusantium.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Excepteur sint occaecat cupidatat non proident.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox6" className="d-flex radioTyp1">
                                    <Form.Check
                                            type="radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            className="radioTypone" 
                                            label="" 
                                        />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Duis aute irure dolor in reprehenderit</span> 
                                </Form.Group>

                                <div className="col11 fs20 fw500 mt-4">
                                    <span className="fw600 col29">Question 2.</span> Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                </div>
                                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">iste natus error sit voluptatem accusantium.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Excepteur sint occaecat cupidatat non proident.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox6" className="d-flex radioTyp1">
                                    <Form.Check
                                            type="radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            className="radioTypone" 
                                            label="" 
                                        />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Duis aute irure dolor in reprehenderit</span> 
                                </Form.Group>

                                <div className="col11 fs20 fw500 mt-4">
                                    <span className="fw600 col29">Question 3.</span> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
                                </div>
                                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">iste natus error sit voluptatem accusantium.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox5" className="d-flex radioTyp1">
                                    <Form.Check
                                        type="radio"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        className="radioTypone" 
                                        label="" 
                                    />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Excepteur sint occaecat cupidatat non proident.</span>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox6" className="d-flex radioTyp1">
                                    <Form.Check
                                            type="radio"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios3"
                                            className="radioTypone" 
                                            label="" 
                                        />
                                    <span className="fw300 fs17 col28 pl-4 pt-2">Duis aute irure dolor in reprehenderit</span> 
                                </Form.Group>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>

                {/* question answer end */}
            </div>
        );
    }
}
export default connect(
    null,
    { actionLogout }
)(NavBar);

