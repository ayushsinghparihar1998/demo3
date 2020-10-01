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
import { actionLogout,actionLogoutSuccess } from "../../common/redux/actions";
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
class Menubar extends Component {
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

  handleLogoutAdmin = () => { 
    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
      if (result && result.status === 200) {
        this.props.actionLogoutSuccess(data)
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
}
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleLogout = () => {
    // let roleType = getLocalStorage('customerInfo') ? 3 : getLocalStorage('userInfo') ? 1
    // : getLocalStorage('userInfoProff') ? 2 : CONSTANTS.ROLES.LISTNER;

     let roleType = "";
    // if (getLocalStorage("customerInfo")) {
    //   roleType = 3;
    // } else if (getLocalStorage("userInfo")) {
    //   roleType = 1;
    // } else if (getLocalStorage("userInfoProff")) {
    //   roleType = 2;
    // }

    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
 if (result && result.status === 200) {
        this.props.actionLogoutSuccess(data)
      .then((result) => {

        socketClass.disconnect();
        this.props.history.push({
          pathname: "login",
          state: { roleType: roleType },
        });

        localStorage.clear();

        })
      .catch((error) => {
        console.log(error);
      });
}

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
                    
                      <Nav.Link onClick={this.handleModal3}>
                        Professionals
                      </Nav.Link>,
                      <Nav.Link onClick={this.handleModal2}>Faq</Nav.Link>,
                    ]}
                

                <span className="userprofiles menus">        
                  <Nav.Link> 
                    <Image src={Mailicon} alt="" className="pointer" />
                  </Nav.Link>
                  <Nav.Link>
                    <Image src={Bellicon} alt="" className="pointer" />
                  </Nav.Link>
                  {/* <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         Profile
                      </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Profile</a> 
                      </div>
                </li>  */} 
                  <NavDropdown title="" id="basic-nav-dropdown" className="profile_icon profiletwo ml-3 mr-5">    
                    <NavDropdown.Item href="#">Profile</NavDropdown.Item>  
                    <NavDropdown.Item href="#">Logout</NavDropdown.Item>        
                  </NavDropdown> 
                </span>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>


      </div>
    );
  }
}
export default Menubar;  
