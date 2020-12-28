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
  Dropdown,
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
import Bellicon from "../../assets/images/bell.png";  
import Userprofiles from "../../assets/images/user_profiles.svg";
import Usersettings from "../../assets/images/user_settings.svg";  
import Userenables from "../../assets/images/user_enables.svg";  
import Userlogouts from "../../assets/images/user_logouts.svg";  
import Polygonimg from "../../assets/images/Polygon.png"; 

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
                              to=""
                              className="nav-link"
                            >
                              Dashboard
                            </NavLink>,
                            <NavLink to="" className="nav-link">
                              Blogs
                            </NavLink>,
                          ]
                        : "",
                      <NavLink
                        to="Communities" 
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
                        Dashboard
                      </Nav.Link>,
                      <NavLink to="" className="nav-link">
                        Blogs
                      </NavLink>,
                    
                      <Nav.Link onClick={this.handleModal3}>
                        Communities 
                      </Nav.Link>,

                      <Nav.Link onClick={this.handleModal3}>
                        Communities 
                      </Nav.Link>,
                       
                       <Nav.Link onClick={this.handleModal3}>
                         Professional help
                      </Nav.Link>,

                      <Nav.Link onClick={this.handleModal2}>Donate</Nav.Link>, 
                    ]}
                
                <span className="userprofiles menus">        
                  <Nav.Link> 
                    <Image src={Mailicon} alt="" className="pointer" /> 
                  </Nav.Link>
                  <Nav.Link>
                      <Dropdown className="droptwo notifications"> 
                          <Dropdown.Toggle id="dropdown-basic" className="profilesbtn">   
                            <Image src={Bellicon} alt="" className="pointer" />   
                            <span className="counttwo">2</span>                       
                          </Dropdown.Toggle> 
                          <Dropdown.Menu>     
                            <Dropdown.Item>  
                                <span className="polyicons">
                                    <Image src={Polygonimg} alt="" className="pointer" />
                                </span>
                                <ul className="notes">   
                                    <li>   
                                        <Col md={9}>  
                                          <div className="col10 fs17 fw400">Lorem</div> 
                                          <div className="fs15 col94 fw400">William johnson Invited you to join event</div>
                                        </Col>
                                        <Col md={3}>  
                                            <div className="fs15 col94 fw400">5 mins ago</div> 
                                        </Col>
                                    </li>
                                    <li>   
                                        <Col md={9}> 
                                          <div className="col10 fs17 fw400">Lorem</div> 
                                          <div className="fs15 col94 fw400">William johnson Invited you to join event</div>
                                        </Col>
                                        <Col md={3}>  
                                            <div className="fs15 col94 fw400">25 mins ago</div> 
                                        </Col>
                                    </li>
                                    <li>   
                                        <Col md={9}> 
                                          <div className="col10 fs17 fw400">Yesterday</div> 
                                          <div className="fs15 col94 fw400">Lizzy Mac  Invited you to join event</div>
                                        </Col>
                                        <Col md={3}>  
                                            <div className="fs15 col94 fw400">Yesterday</div> 
                                        </Col>
                                    </li>
                                    <li>   
                                        <Col md={9}> 
                                          <div className="col10 fs17 fw400">Processing Agent</div> 
                                          <div className="fs15 col94 fw400">Nikki Michel cancelled the Rocking Event Concert</div>
                                        </Col>
                                        <Col md={3}>  
                                            <div className="fs15 col94 fw400">Tuesday</div> 
                                        </Col>
                                    </li>
                                    <li>   
                                        <Col md={9}> 
                                          <div className="col10 fs17 fw400">Lorem</div> 
                                          <div className="fs15 col94 fw400">William johnson Invited you to join event</div>
                                        </Col>
                                        <Col md={3}>  
                                            <div className="fs15 col94 fw400">4 days ago</div> 
                                        </Col>
                                    </li> 
                                    <li> 
                                        <div className="text-center">
                                          <Button className="btns_all">See All</Button>  
                                      </div>
                                    </li>
                                </ul>
                                
                            </Dropdown.Item> 

                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}

                          </Dropdown.Menu>
                      </Dropdown>
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
                    <NavDropdown.Item href="#"><Image src={Userprofiles} alt="" className="mr-1" /> USER</NavDropdown.Item>  
                    <NavDropdown.Item href="#"><Image src={Usersettings} alt="" className="mr-1" /> MY SETTINGS</NavDropdown.Item>  
                    <NavDropdown.Item href="#"><Image src={Userenables} alt="" className="mr-1" /> SWITCH ACCOUNT</NavDropdown.Item>   
                    <NavDropdown.Item href="#"><Image src={Userlogouts} alt="" /> LOGOUT</NavDropdown.Item>       
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

