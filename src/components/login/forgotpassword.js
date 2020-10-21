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
import NavBar from "../core/nav";
import Footer from "../core/footer";

import { actionForGotPassword } from "../../common/redux/actions";
import * as qs from 'query-string';
import CONSTANTS from "../../common/helpers/Constants";
import validateInput from "../../common/validations/validationForgotPassword";

class Forgotpassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: {},
      password: "",
      roleType: this.props.location && this.props.location.state && this.props.location.state.roleType ?
        this.props.location.state.roleType : this.props.roleType ? this.props.roleType : CONSTANTS.ROLES.LISTNER,
    };
  }
  componentDidMount() {
    console.log(this.props.location)
    // alert("ASd")
    const { url } = this.props.match;
    const { location } = this.props;
    if (location) {
      const parsed = qs.parse(location.search);
      let role = this.props.location.state.roleType.replace(/\s/g, '+');
      this.setState({
        roleType: role
      });
    }
  }

  componentWillReceiveProps(next) {
    this.setState({
      roleType: next.location && next.location.state && next.location.state.roleType ?
        next.location.state.roleType : this.props.roleType ? this.props.roleType : CONSTANTS.ROLES.LISTNER,
    })
  }

  handleSubmitUser = () => {
    if (this.isValid()) {
      let data = {
        email: this.state.email.toLowerCase().trim(),
      };
      this.props
        .actionForGotPassword(data)
        .then(result => {
          if (result && result.data && result.data.status === "success") {
            // setTimeout(() => {
              this.props.history.push({
                pathname: 'login',
                state: { roleType: parseInt(this.state.roleType) }
              });
            // }, 1000);

          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };


  render() {

    const { email, password } = this.state;
    const { errors } = this.state;

    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="Loginlayout">
          <Container>
            <div className="col10 fs40 fw600 pt-4 mb-2">
              Forgot Password
            </div>
            <div className="col14 fs25 fw300 mb-4 pb-2">Enter Your email address</div>

            <div className="layout_box forgots mb-4">
              <Form.Group className="mb-4 pb-2">
                <Form.Control
                  type="email"
                  placeholder="Email Id"
                  error={errors.email ? true : false}
                  className="inputTyp2"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <div className="error alignLeft">{errors.email}</div>
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

export default connect(null, { actionForGotPassword })(Forgotpassword);