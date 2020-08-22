import React, { Component } from 'react';
import { Grid, Form, Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator';
import { actionLogin } from '../../common/redux/actions';
import { encrypt, decrypt, setLocalStorage } from '../../common/helpers/Utils';
import { Button, NavDropdown, Carousel, Container, Row, Col, Image, Form } from "react-bootstrap";
import NavBar from './nav';
import Footer from '../jsx/footer';

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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    let data = {
      email: this.state.email.toLowerCase().trim(),
      // password: encrypt(this.state.password.trim())
      password: this.state.password.trim()
    };

    this.props
      .actionLogin(data)
      .then(result => {
        if (result && result.data && result.data.status === 'Success') {
          this.props.history.push({ pathname: '/userDashboard' });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">Listener Login</div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Don’t have an account? <strong className="fw500">Become a Member</strong></div>
            <div className="layout_box mb-4">
              <Form>
                <Form.Group className="mb-4 pb-2">
                  <Form.Control type="email" placeholder="Email address" className="inputTyp2" />
                </Form.Group>

                <Form.Group className="mb-4 pb-2">
                  <Form.Control type="password" placeholder="Password" className="inputTyp2" />
                </Form.Group>
                <Button type="submit" className="btnTyp4 mb-4">
                  LOGIN
                    </Button>
                <div className="pt-2 fs18 fw300 col14">Forgot your password?
                        <a className="fw500">Reset it Here</a></div>
              </Form>
            </div>

            <div className="fs18 fw300 pb-5 col14">Interested in becoming a Listener?
                <a className="fw500">Reset it Here</a></div>
          </Container>
        </div>

        <Footer />
      </div>)

  }
}
export default Login; 