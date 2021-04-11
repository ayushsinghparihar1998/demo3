import React, { Component } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
  Image,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import ELPViewApiService from "../../common/services/apiService";
import Validator from "validator";

class SubscribeHere extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: "",
    };
  }
  handleSubmit = () => {
    let errors = this.state.errors;
    let email = this.state.email;
    errors =
      email.length == 0
        ? "Please enter a valid email Id"
        : !Validator.isEmail(email)
        ? "Please enter a valid email"
        : "";
    console.log("errors", errors.length);
    console.log("errors", errors);
    this.setState(
      {
        errors,
      },
      () => {
        if (this.state.errors.length == 0) {
          let data = {
            email: this.state.email,
          };
          console.log(data);

          ELPViewApiService("usersubscriber", data)
            .then((result) => {
              this.setState({
                errors: "",
                email: "",
              });
            })
            .catch((errors) => {
              console.log(errors);
            });
        } else {
        }
      }
    );
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    // let email = this.state.email;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state.email);
      }
    );
  };
  render() {
    return (
      <div className="subscribe_here2">   
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <div className="subscribe_left">
                <div>
                  <div className="fs30 col8 fw600 w-100"> 
                    Download our FREE guide now!
                  </div>
                  <div className="col14 fs20 fw300 w-100">  
                    Looking to implement corporate wellness in your
                    organization? 
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} lg={6}> 
              <div className="subscribe_form">
                <Form>
                  <Form.Group className="fgroups" controlId="formBasicEmail"> 
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      className="inputTyp1 fs20"
                      name="email"
                      onChange={(e) => this.handleChange(e)}
                      value={this.state.email}
                      maxLength={100}
                    />
                    
                    <Button
                      //   variant="primary"
                      onClick={this.handleSubmit}
                      type="button"
                      className="btnTyp2 mt-3"
                      //   disabled={this.state.errors.length == 0}
                    >
                      DOWNLOAD NOW 
                    </Button>
                    <div className="col27 fs14 fw400 mt-2 error">
                      {this.state.errors}
                    </div>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default SubscribeHere;
