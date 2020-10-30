import React, { Component } from "react";
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

import { connect } from "react-redux";

import * as qs from 'query-string';

import CONSTANTS from "../../common/helpers/Constants";
import NavBar from "../core/nav";
import Footer from "../core/footer";

import validateInput from "../../common/validations/validationResetPassword";

import { actionResetPassword } from "../../common/redux/actions";

class Resetpassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      userid: '',
      errors: {},
      password: '',
      confirmPassword: '',
      roleType: this.props.location && this.props.location.state && this.props.location.state.roleType ?
        this.props.location.state.roleType : this.props.roleType ? this.props.roleType : CONSTANTS.ROLES.LISTNER,
    };
  }

  componentDidMount() {

    const { url } = this.props.match;
    const { location } = this.props;

    if (location) {
      const parsed = qs.parse(location.search);

      let email = parsed.email.replace(/\s/g, '+');
      let userid = parseInt(parsed.userid);
      let authcode = parsed.authcode;

      this.setState({
        email,
        userid,
        authcode
      });

    }

  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentWillReceiveProps(next) {
    this.setState({
      roleType: next.location && next.location.state && next.location.state.roleType ?
        next.location.state.roleType : this.props.roleType ? this.props.roleType : CONSTANTS.ROLES.LISTNER,
    })
  }

  handleSubmitUser = () => {
    // if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
        password: this.state.password.trim(),
        userid: this.state.userid,
        authcode: this.state.authcode
      };
      this.props
        .actionResetPassword(data)
        .then(result => {
          if (result && result.data && result.data.status === "success") {
            let roleType = "1"
            setTimeout(() => {
              this.props.history.push({
                pathname: 'login',
                state: { roleType: roleType }
              });
            }, 2000);


          }
        })
        .catch(error => {
          console.log(error);
        });
    // }
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }


  render() {
    const { errors } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">
              Reset Password
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Want to Reset Your Password?</div>

            <div className="layout_box forgots mb-4">

              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  // error={errors.password ? true : false}
                  placeholder="New Password"
                  className="inputTyp2"
                />
                {/* <div className="error alignLeft">{errors.password}</div> */}
              </Form.Group>

              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  name="confirmPassword"
                  type="password"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  // error={errors.confirmPassword ? true : false}
                  placeholder="Confirm Password"
                  className="inputTyp2"
                />
                {/* <div className="error alignLeft">{errors.confirmPassword}</div> */}
              </Form.Group>

              <Button onClick={this.handleSubmitUser} className="btnTyp4 text-uppercase">
                Submit
              </Button>

            </div>

          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}


export default connect(null, { actionResetPassword })(Resetpassword);

