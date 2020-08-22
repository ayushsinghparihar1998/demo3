import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator';
import { actionProfessionalLogin } from '../../common/redux/actions';
import { encrypt, decrypt, setLocalStorage } from '../../common/helpers/Utils';
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      className: 'msgcolor',
      messages: {
        email: 'Enter a valid email'
      }
    });
  }

  componentDidUpdate() {
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    let data = {
      email: this.state.email.toLowerCase().trim(),
      password: this.state.password.trim()
      // password: encrypt(this.state.password.trim())
    };
    console.log("qweqweqweqw", data)
    this.props
      .actionProfessionalLogin(data)
      .then(result => {
        if (result && result.data && result.data.status === "success") {
          setLocalStorage('userInfoProff', result.data.data);
          this.props.history.push({ pathname: '/userdashboard' });

        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">Professional Login</div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Don’t have an account? <strong className="fw500">Become a Member</strong></div>
            <div className="layout_box mb-4">
              <Form>
                <Form.Group className="mb-4 pb-2">
                  <Form.Control type="email" placeholder="Email address" className="inputTyp2"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange} />
                  {this.validator.message(
                    'email',
                    this.state.email,
                    'required|email'
                  )}
                </Form.Group>

                <Form.Group className="mb-4 pb-2">
                  <Form.Control name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    placeholder="Password" className="inputTyp2" />
                  {this.validator.message(
                    'password',
                    this.state.password,
                    'required'
                  )}
                </Form.Group>
                <Button className="btnTyp4 mb-4" onClick={this.handleSubmit}>
                  LOGIN
              </Button>
                <div className="pt-2 fs18 fw300 col14">Forgot your password?
                        <span className="fw500 pointer pl-1">Reset it Here</span></div>
              </Form>
            </div>

            <div className="fs18 fw300 pb-5 col14">Interested in becoming a Listener?
                <span className="fw500 pointer pl-1">Reset it Here</span></div>
          </Container>
        </div>

        <Footer />
      </div>)

  }
}

export default connect(
  null,
  { actionProfessionalLogin }
)(Login);