import React, { Component } from "react";
import { connect } from "react-redux";
import SimpleReactValidator from "simple-react-validator/dist/simple-react-validator";
import { actionLogin, actionProfessionalLogin, actionUserLogin } from "../../common/redux/actions";
import {
  encrypt,
  decrypt,
  setLocalStorage,
} from "../../common/helpers/Utils";
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
import NavBar from "../core/nav";
import Footer from "../core/footer";
import QuestionAndAnswer from '../signup/questionAndAnswer';
import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationLogin";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      password: "",
      roleType: this.props.location.state && this.props.location.state.roleType ?
        this.props.location.state.roleType : CONSTANTS.ROLES.LISTNER,
    };
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      className: "msgcolor",
      messages: {
        email: "Enter a valid email",
      },
    });
  }

  componentWillReceiveProps(next) {
    this.setState({
      roleType: next.location && next.location.state && next.location.state.roleType ?
        next.location.state.roleType : CONSTANTS.ROLES.LISTNER,
    })
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
          if (result && result.data && result.data.status === "success") {
            let u_que_ans_per = result.data.data.u_que_ans_per;
            if (u_que_ans_per >= 60) {
              setLocalStorage("userInfo", result.data.data);
              setLocalStorage("loggedIn", true);
              this.props.history.push({ pathname: "/userdashboard" });
            } else {
              setLocalStorage("result", u_que_ans_per);
              setLocalStorage("loggedIn", false);
            }
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
        password: this.state.password.trim()
        // password: encrypt(this.state.password.trim())
      };

      this.props
        .actionProfessionalLogin(data)
        .then(result => {
          if (result && result.data && result.data.status === "success") {
            setLocalStorage('userInfoProff', result.data.data);
            setLocalStorage("loggedIn", true);
            this.props.history.push({ pathname: '/userDashboardproff' });

          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleSubmitUser = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim()
        // password: encrypt(this.state.password.trim())
      };

      this.props
        .actionUserLogin(data)
        .then(result => {
          if (result && result.data && result.data.status === "success") {
            setLocalStorage('customerInfo', result.data.data);
            setLocalStorage("loggedIn", true);
            this.props.history.push({ pathname: '/userDashboardcust' });

            

          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  handleClose = () => {
    this.setState({
      QAndA: true,
    })
  };

  changepath = (path) => {
    this.props.history.push(path);
  };  

  render() {
    const { email, password } = this.state;
    const { errors } = this.state;
    console.log("errors", errors)
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>


            <div className="col10 fs40 fw600 pt-4 mb-2">
              {this.state.roleType === 1 ? ('Listener Login') : this.state.roleType === 2 ? 'Professional Login' :
                this.state.roleType === 3 ? 'User Login' : ''}
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Don’t have an account? <strong className="fw500">Become a Member</strong></div>

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
                />
                <div className="error alignLeft">{errors.password}</div>
              </Form.Group>

              {this.state.roleType === 1 ? (
                <Button className="btnTyp4 mb-4" onClick={this.handleSubmitListener}>
                  LOGIN
                </Button>
              ) : this.state.roleType === 2 ? (
                <Button className="btnTyp4 mb-4" onClick={this.handleSubmitProfessional}>
                  LOGIN
                </Button>) : this.state.roleType === 3 ? (
                  <Button className="btnTyp4 mb-4" onClick={this.handleSubmitUser}>
                    LOGIN
                  </Button>) : ''}
              <div className="pt-2 fs18 fw300 col14">
                Forgot your password?
                  <span className="fw500 pointer pl-1">Reset it Here</span>
              </div>

            </div>

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
                <div className="fs300 fs20 col14 mb-4 pb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                {/* <QuestionAndAnswer {...this.props} /> */}
              </div>
            </Container>

          </Modal.Body>
        </Modal>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { actionLogin, actionProfessionalLogin, actionUserLogin })(Login);
