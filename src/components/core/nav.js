import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Image,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import { Link, NavLink, Router } from "react-router-dom";
import logo from "../../assets/images/logos.png";
import insta from "../../assets/images/insta.svg";
import { ToastContainer, toast } from "react-toastify";
import { actionLogout } from "../../common/redux/actions";
import fb from "../../assets/images/fb.svg";
import twit from "../../assets/images/twit.svg";
import linkedin from "../../assets/images/linkedin.svg";
import Crossbtn from "../../assets/images/blue_cross.svg";
import Mailicon from "../../assets/images/mail_icon.svg";
import Bellicon from "../../assets/images/bell_icons.svg";
import Msgbox from "../../assets/images/msg_box.svg";
import Masklayer from "../../assets/images/mask_layer.png";
import Signup from "../jsx/listenersignup/signup";
import ProfessionalSignup from "../signup/professionalSignup";
import UserSignup from "../signup/userSignup";
import { getLocalStorage, setLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import socketClass from "../../common/utility/socketClass";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      email_varified: true,
    };
  }
  componentDidMount() {
    console.log("hello");
    console.log(getLocalStorage("userInfo"));

    let data = getLocalStorage("userInfo")
      ? getLocalStorage("userInfo")
      : getLocalStorage("userInfoProff");
    console.log("data", data);

    if (data) {
      this.setState(
        {
          email_varified: data.u_verified == 1 ? false : true,
        },
        () => {
          console.log("email_varified", this.state.email_varified);
        }
      );
    }
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

  handleLogoutAdmin = () => {
    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        this.props.history.push({
          pathname: "adminlogin",
          state: { roleType: 4 },
        });

        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleLogout = () => {
    // let roleType = getLocalStorage('customerInfo') ? 3 : getLocalStorage('userInfo') ? 1
    // : getLocalStorage('userInfoProff') ? 2 : CONSTANTS.ROLES.LISTNER;

    let roleType = "";
    if (getLocalStorage("customerInfo")) {
      roleType = 3;
    } else if (getLocalStorage("userInfo")) {
      roleType = 1;
    } else if (getLocalStorage("userInfoProff")) {
      roleType = 2;
    }

    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        socketClass.disconnect();
        console.log("rnv roleType", roleType);
        this.props.history.push({
          pathname: "login",
          state: { roleType: roleType },
        });

        localStorage.clear();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  goToLoginPage = () => {
    this.props.history.push({
      pathname: "login",
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };
  handleLogin(roleType) {
    this.props.history.push({
      pathname: "login",
      state: { roleType: roleType },
    });
  }
  handleGet = () => {
    this.setState({
      show: false,
      show3: false,
    });
  };

  goToLoginPage = () => {
    this.props.history.push({
      pathname: "login",
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };
  handleLogin(roleType) {
    this.props.history.push({
      pathname: "login",
      state: { roleType: roleType },
    });
  }
  handleGet = () => {
    this.setState({
      show: false,
      show3: false,
    });
  };
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
            {getLocalStorage("userInfoAdmin") ? (
              <Nav className="ml-auto">
                <Form inline>
                  <span>
                    <div onClick={this.handleLogoutAdmin} className="btnType1">
                      Logout
                    </div>
                  </span>
                </Form>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                {getLocalStorage("userInfo") ||
                getLocalStorage("userInfoProff") ||
                getLocalStorage("customerInfo")
                  ? [
                      getLocalStorage("customerInfo")
                        ? [
                            <NavLink
                              to="/professionalSearch"
                              className="nav-link"
                            >
                              Professional Search
                            </NavLink>,
                            <NavLink to="/listenerSearch" className="nav-link">
                              Listener Search
                            </NavLink>,
                          ]
                        : "",
                      <NavLink
                        to={
                          getLocalStorage("userInfo")
                            ? "userDashboard"
                            : getLocalStorage("userInfoProff")
                            ? "userDashboardproff"
                            : getLocalStorage("customerInfo")
                            ? "userDashboardcust"
                            : ""
                        }
                        className="nav-link"
                      >
                        Dashboard
                      </NavLink>,
                      <NavLink
                        to={
                          getLocalStorage("userInfoProff") ||
                          getLocalStorage("userInfo")
                            ? "calendar"
                            : ""
                        }
                        className="nav-link"
                      >
                        My Schedule
                      </NavLink>,
                      <NavLink to="/myprofile" className="nav-link">
                        My Profile
                      </NavLink>,
                      <NavLink to="/editprofile" className="nav-link">
                        Edit Profile
                      </NavLink>,
                    ]
                  : [
                      <Nav.Link onClick={this.handleModal}>
                        Connect Now
                      </Nav.Link>,
                      <NavLink to="/becomeListener" className="nav-link">
                        Volunteer as a Listener
                      </NavLink>,
                      <NavDropdown title="CSR" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#">Another</NavDropdown.Item>
                        <NavDropdown.Item href="#">Something</NavDropdown.Item>
                      </NavDropdown>,
                      <NavDropdown title="Communities" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Anxiety</NavDropdown.Item>
                        <NavDropdown.Item href="#">
                          Women Rights
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#">LGBTQA</NavDropdown.Item>
                        <NavDropdown.Item href="#">Men Rights</NavDropdown.Item>
                      </NavDropdown>,
                      <Nav.Link onClick={this.handleModal3}>
                        Professionals
                      </Nav.Link>,
                      <Nav.Link onClick={this.handleModal2}>Faq</Nav.Link>,
                    ]}
                {getLocalStorage("userInfo") ||
                getLocalStorage("userInfoProff") ||
                getLocalStorage("customerInfo") ? (
                  <Nav.Link onClick={this.handleLogout}>Logout</Nav.Link>
                ) : (
                  <NavDropdown
                    title="Login"
                    id="login-nav-dropdown"
                    className="btnTypeone"
                  >
                    <NavDropdown.Item
                      onClick={(e) => {
                        this.handleLogin(1);
                      }}
                    >
                      Listener Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => {
                        this.handleLogin(2);
                      }}
                    >
                      Professional Login
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      onClick={(e) => {
                        this.handleLogin(3);
                      }}
                    >
                      User Login
                    </NavDropdown.Item>
                  </NavDropdown>
                )}

                <Form inline>
                  <span className="d-none">
                    {getLocalStorage("loggedIn") ? (
                      <div onClick={this.handleLogout} className="btnType1">
                        Logout
                      </div>
                    ) : (
                      <NavLink to="/login" className="btnType1">
                        Login
                      </NavLink>
                    )}
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
                <span className="userprofiles d-flex">
                  <Nav.Link>
                    <Image src={Mailicon} alt="" className="pointer" />
                  </Nav.Link>
                  <Nav.Link>
                    <Image src={Bellicon} alt="" className="pointer" />
                  </Nav.Link>
                  <NavDropdown title="Profile" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                  </NavDropdown>
                </span>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>

        {this.state.email_varified ? (
          <div className="email_verified">
            <div class="verifys">
              <Image src={Msgbox} alt="" />
              <span className="fs20 fw600 col18 ml-2">Email not verified</span>
            </div>
          </div>
        ) : (
          ""
        )}

        {/* user registration start */}

        <Modal show={this.state.show} className="CreateAccount">
          <Modal.Header>
            <Button onClick={this.handleClose}>
              <Image src={Crossbtn} alt="" />
            </Button>
          </Modal.Header>

          <Modal.Body>
            <Container>
              <UserSignup handleSet={this.handleGet} {...this.props} />
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
                <ProfessionalSignup
                  handleSet={this.handleGet}
                  {...this.props}
                />
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
                <div className="fs300 fs20 col14 mb-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="col11 fs20 fw500">
                  <span className="fw600 col29">Question 1.</span> Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit?
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox4" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox5" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox6" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
                </Form.Group>

                <div className="col11 fs20 fw500 mt-4">
                  <span className="fw600 col29">Question 2.</span> Section
                  1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero
                  in 45 BC
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox7" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox8" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox9" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
                </Form.Group>

                <div className="col11 fs20 fw500 mt-4">
                  <span className="fw600 col29">Question 3.</span> At vero eos
                  et accusamus et iusto odio dignissimos ducimus qui blanditiis
                  praesentium.
                </div>
                <div className="col30 fw600 fs20 mt-4 pb-3">Answer:</div>

                <Form.Group controlId="formBasicCheckbox10" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="iste natus error sit voluptatem accusantium."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox11" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    checked="checked"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Excepteur sint occaecat cupidatat non proident."
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox12" className="d-flex">
                  <Form.Check
                    type="checkbox"
                    className="fw300 fs17 col28 mt-1 checkboxTyp1"
                    label="Duis aute irure dolor in reprehenderit."
                  />
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
export default connect(null, { actionLogout })(NavBar);
