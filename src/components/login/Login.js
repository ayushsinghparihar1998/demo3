import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator';
import {
  actionLogin,
  actionProfessionalLogin,
  actionUserLogin,
  actionAdminLogin,
} from '../../common/redux/actions';
import { encrypt, decrypt, setLocalStorage } from '../../common/helpers/Utils';

import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form, Modal
} from "react-bootstrap";
import Crossbtn from "../../assets/images/blue_cross.svg";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import QuestionAndAnswer from '../signup/questionAndAnswer';
import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationLogin";
import ProfessionalSignup from '../signup/professionalSignup';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      password: "",
      show3:false,
      roleType: this.props.location && this.props.location.state && this.props.location.state.roleType ?
        this.props.location.state.roleType : this.props.roleType ? this.props.roleType : CONSTANTS.ROLES.LISTNER,
    };
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      className: 'msgcolor',
      messages: {
        email: 'Enter a valid email',
      },
    });
    console.log('this.props.roleType', this.props.roleType);
  }

  componentWillReceiveProps(next) {
    this.setState({
      roleType:
        next.location && next.location.state && next.location.state.roleType
          ? next.location.state.roleType
          : this.props.roleType
          ? this.props.roleType
          : CONSTANTS.ROLES.LISTNER,
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleSubmitListener = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim(),
        // password: encrypt(this.state.password.trim())
      };
      this.props
        .actionLogin(data)
        .then((result) => {
          if (result && result.data && result.data.status === 'success') {
            this.setState({
              errors: {},
            });
            let u_que_ans_per = result.data.data.u_que_ans_per;
            if (u_que_ans_per >= 60) {
              setLocalStorage('userInfo', result.data.data);
              setLocalStorage('loggedIn', true);
              this.props.history.push({ pathname: '/userdashboard' });
            } else {
              setLocalStorage('result', u_que_ans_per);
              setLocalStorage('loggedIn', false);
            }
          } else {
            this.setState({
              errors: {},
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleSubmitProfessional = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim(),
        // password: encrypt(this.state.password.trim())
      };

      this.props
        .actionProfessionalLogin(data)
        .then((result) => {
          if (result && result.data && result.data.status === 'success') {
            setLocalStorage('userInfoProff', result.data.data);
            setLocalStorage('loggedIn', true);
            this.props.history.push({ pathname: '/userDashboardproff' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleSubmitUser = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim(),
        // password: encrypt(this.state.password.trim())
      };

      this.props
        .actionUserLogin(data)
        .then((result) => {
          if (result && result.data && result.data.status === 'success') {
            setLocalStorage('customerInfo', result.data.data);
            setLocalStorage('loggedIn', true);
            this.props.history.push({ pathname: '/userDashboardcust' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleSubmitAdmin = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim(),
      };
      this.props
        .actionAdminLogin(data)
        .then((result) => {
          if (result && result.data && result.data.status === 'success') {
            setLocalStorage('userInfoAdmin', result.data.data);
            setLocalStorage("loggedIn", true);
            setLocalStorage("isAdmin", true);

            this.props.history.push({ pathname: '/adminlistener' });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleClose = () => {
    this.setState({
      QAndA: true,
    });
  };

  changepath = (path) => {
    let roleType =  this.state.roleType;
    if(roleType == 2)
    {
      this.handleModal3();
    }else
    {
      this.props.history.push(path);
    }    
  };  

handleModal3 = () => {
    this.setState({ show3: true });
};

handleClose3 = () => {
  this.setState({ show3: false });
};

handleGet = () => {
  this.setState({
      show: false,
      show3: false
  })
}

  render() {
    const { email, password } = this.state;
    const { errors } = this.state;
    console.log('errors', errors);
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">
              {this.state.roleType === CONSTANTS.ROLES.LISTNER
                ? 'Listener Login'
                : this.state.roleType === CONSTANTS.ROLES.PROFESSIONAL
                ? 'Professional Login'
                : this.state.roleType === CONSTANTS.ROLES.USER
                ? 'User Login'
                : this.state.roleType === CONSTANTS.ROLES.SUPER_ADMIN
                ? 'Admin Login'
                : ''}
            </div>
            {this.state.roleType !== CONSTANTS.ROLES.SUPER_ADMIN ? (
              <div className="col14 fs25 fw300 mb-4 pb-2">
                Don’t have an account?
                <strong className="fw500">Become a Member</strong>
              </div>
            ) : (
              ''
            )}

            <div className="layout_box mb-4">
              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  type="email"
                  placeholder="Email address"
                  error={errors.email ? true : false}
                  className="inputTyp2"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                  maxLength="50"                                
                  inputProps={{
                      maxLength: 50,
                  }}                  
                />
                <div className="error alignLeft">{errors.email}</div>
              </Form.Group>

              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  name="password"
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  error={errors.password ? true : false}
                  placeholder="Password"
                  className="inputTyp2"
                  minLength="8"    
                  maxLength="15"                                
                  inputProps={{
                      maxLength: 15,
                  }}
                />
                <div className="error alignLeft">{errors.password}</div>
              </Form.Group>

              {this.state.roleType === CONSTANTS.ROLES.LISTNER ? (
                <Button
                  className="btnTyp4 mb-4"
                  onClick={this.handleSubmitListener}
                >
                  LOGIN
                </Button>
              ) : this.state.roleType === CONSTANTS.ROLES.PROFESSIONAL ? (
                <Button
                  className="btnTyp4 mb-4"
                  onClick={this.handleSubmitProfessional}
                >
                  LOGIN
                </Button>
              ) : this.state.roleType === CONSTANTS.ROLES.USER ? (
                <Button
                  className="btnTyp4 mb-4"
                  onClick={this.handleSubmitUser}
                >
                  LOGIN
                </Button>
              ) : this.state.roleType === CONSTANTS.ROLES.SUPER_ADMIN ? (
                <Button
                  className="btnTyp4 mb-4"
                  onClick={this.handleSubmitAdmin}
                >
                  LOGIN
                </Button>
              ) : (
                ''
              )}
              <div className="pt-2 fs18 fw300 col14">
                Forgot your password?

                  <span
                  className="fw500 pointer pl-1"
                  onClick={() =>                    
                    this.props.history.push({
                      pathname: 'forgotpassword',
                      state: { roleType: this.state.roleType }
                    })
                  }                  
                  >
                    Reset it Here
                    </span>
              </div>
            </div>

            {this.state.roleType !== CONSTANTS.ROLES.SUPER_ADMIN ? (
              <div className="fs18 fw300 pb-5 col14">
                Interested in becoming a Listener?
  <span
                  className="fw600 pointer pl-1"
                  onClick={() =>
                    this.changepath("/listenersignup")
                  }
                >
                  Learn More / Signup
                </span>
              </div>

                
            ) : (
              ''
            )}

          </Container>
        </div>
        <Modal
          show={this.state.QAndA}
          onHide={this.handleClose}
          className="custom-popUp confirmation-box"
          bsSize="small"
        >
          <Modal.Body>
            <Container>
              <div className="layout_box mt-3 mb-4">
                <div className="col10 fs30 fw600 mb-2">Create Your Account</div>
                <div className="fs300 fs20 col14 mb-4 pb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                {/* <QuestionAndAnswer {...this.props} /> */}
              </div>
            </Container>
          </Modal.Body>
        </Modal>
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
                                    {...this.props} />
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
        <Footer />
      </div>
    );
  }
}

export default connect(null, {
  actionLogin,
  actionProfessionalLogin,
  actionUserLogin,
  actionAdminLogin,
})(Login);
