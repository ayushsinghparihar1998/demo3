import React, { Component } from 'react';
import { connect } from 'react-redux';
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
} from 'react-bootstrap';
import { Link, NavLink, Router } from 'react-router-dom';
import logo from '../../assets/images/logos.png';
import insta from '../../assets/images/insta.svg';
import { ToastContainer, toast } from 'react-toastify';
import { actionLogout } from '../../common/redux/actions';
import fb from '../../assets/images/fb.svg';
import twit from '../../assets/images/twit.svg';
import linkedin from '../../assets/images/linkedin.svg';
import Crossbtn from '../../assets/images/blue_cross.svg';
import Signup from '../jsx/listenersignup/signup';
import ProfessionalSignup from '../signup/professionalSignup';
import UserSignup from '../signup/userSignup';
import { getLocalStorage, setLocalStorage } from '../../common/helpers/Utils';
import CONSTANTS from '../../common/helpers/Constants';
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

  handleLogoutAdmin = () => {

    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        this.props.history.push({
          pathname: 'adminlogin',
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

    let roleType = '';
    if (getLocalStorage('customerInfo')) {
      roleType = 3;
    } else if (getLocalStorage('userInfo')) {
      roleType = 1;
    } else if (getLocalStorage('userInfoProff')) {
      roleType = 2;
    }

    let data = {};
    this.props
      .actionLogout(data)
      .then((result) => {
        console.log('rnv roleType', roleType);
        this.props.history.push({
          pathname: 'login',
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
      pathname: 'login',
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };
  handleLogin(roleType) {
    this.props.history.push({
      pathname: 'login',
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
      pathname: 'login',
      state: { roleType: this.state.roleType },
    });
    //  this.props.history.push({ pathname: '/login', state: { roleType: this.state.roleType } });
  };
  handleLogin(roleType) {
    this.props.history.push({
      pathname: 'login',
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
            {getLocalStorage('userInfoAdmin') ?
              <Nav className="ml-auto">
                <NavLink to={"Categoryadmin"} className="nav-link">
                  CATEGORY
                </NavLink>
                <NavLink to={"adminlistener"} className="nav-link">
                  DASHBOARD
                </NavLink>
                <NavLink to={"blogs"} className="nav-link">
                  BLOGS
                </NavLink>
                <Form inline>
                  <span >
                    <div onClick={this.handleLogoutAdmin} className="btnType1">
                      Logout
                    </div>
                  </span>
                </Form></Nav>
              :
              ('')}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default connect(null, { actionLogout })(NavBar);
