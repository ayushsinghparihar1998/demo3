import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { connect } from "react-redux";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import moment from "moment";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import validateInput from "../../common/validations/validationProfessionalSignup";
import ELPViewApiService from "../../common/services/apiService";

class ProfessionalSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      u_birthdate: "",
      u_school_code: "",
      screen_name: "",
      u_lang: "",
      u_mobile: "",
      u_location: "",

      device_token: "",
      device_type: "",
      type: "",
      u_therapy_style: "",

      u_hourly_fee: "",
      u_work_experience: "",
      u_education: "",
      u_image: "",
      professional_keyword: [],
      professional_cat_name: [],
      u_area_service: "",
      errors: {},
    };
  }

  componentDidMount() {
    const { url } = this.props.match;
    // if (url.indexOf("/organizer/") >= 0) {
    //   this.setState({
    //     roleType: CONSTANTS.ROLES.ORGANIZER,
    //   });
    // } else if (url.indexOf("/vendor/") >= 0) {
    //   this.setState({
    //     roleType: CONSTANTS.ROLES.VENDOR,
    //   });
    // }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState(
      {
        [name]:
          name == "phoneNumber" ? value.replace(/[^0-9]/g, "") : value.trim(),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }

  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });
      let data = {
        firstName: this.state.firstName ? this.state.firstName.trim() : "",
        lastName: this.state.lastName ? this.state.lastName.trim() : "",
        email: this.state.email ? this.state.email.toLowerCase().trim() : "",
        password: this.state.password ? this.state.password.trim() : "",
        organisation: this.state.organisationName
          ? this.state.organisationName.trim()
          : "",
        phone_number: this.state.phoneNumber
          ? this.state.phoneNumber.trim()
          : "",
        type: this.state.roleType,
      };

      ELPViewApiService("signup", data)
        .then((result) => {
          if (result && result.data && result.data.status === "SUCCESS") {
            setTimeout(
              function () {
                // if (this.state.roleType == CONSTANTS.ROLES.VENDOR) {
                //   this.props.history.push("/vendor/login");
                // } else {
                //   this.props.history.push("/organizer/login");
                // }
              }.bind(this),
              3000
            );
            this.setState({
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              phoneNumber: "",
              organisationName: "",
              showLoader: false,
              errors: {},
            });
          } else {
            this.setState({
              showLoader: false,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            showLoader: false,
          });
        });
    } else {
      this.setState({
        showLoader: false,
      });
    }
  };
  clear() {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      organisationName: "",
      showLoader: false,
      errors: {},
    });
  }

  handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSubmit();
    }
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="RegistrationLayout pro_signup">
          <Container>
            <div className="layout_box mt-5 mb-4">
              <div className="col3 fs40 fw600 mb-4">Professional Signup</div>
              <Form>
                <Row>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        upload Picture
                      </Form.Label>
                      <Form.File
                        id="exampleFormControlFile1"
                        className="inputTyp2"
                      />
                      <div className="error alignLeft d-none">Upload Pic</div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        isInvalid={errors.screen_name ? true : false}
                        name="screen_name"
                        value={this.state.screen_name}
                        onChange={(e) => this.handleChange(e)}
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        // name="name"
                      />
                      <div className="error alignLeft d-none">Enter Name</div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="email"
                      />
                      <div className="error alignLeft d-none">Email Address</div> 
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Phone
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="phone"
                      />
                      <div className="error alignLeft d-none">Enter Phone</div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Work Experience
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Work Experience "
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="name"
                      />
                      <div className="error alignLeft d-none">Enter Work Experience</div> 
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Age"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="age"
                      />
                      <div className="error alignLeft d-none">Enter Your Age</div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Language
                      </Form.Label>
                      <Form.Control as="select" className="selectTyp1">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Marathi</option>
                      </Form.Control>
                      <div className="error alignLeft d-none">Language</div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Keyword
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Keyword"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="booksession"
                      />
                      <div className="error alignLeft d-none">Keyboard</div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Select Category
                      </Form.Label>
                      <Row>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check
                              type="checkbox"
                              label="EAT"
                              className="checkboxTyp1"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckboxtwo">
                            <Form.Check
                              type="checkbox"
                              label="LUV"
                              className="checkboxTyp1"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckboxthree">
                            <Form.Check
                              type="checkbox"
                              label="PRAY"
                              className="checkboxTyp1"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div className="error alignLeft d-none">Select Category</div>
                    </Form.Group>
                  </Col>

                  <Col md={12}> 
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="col14 fw600 fs18">
                        Qualification
                      </Form.Label>
                      <CKEditor
                        config={{
                          height: 500,
                        }}
                        editor={ClassicEditor}
                        // data="<p>Hello from CKEditor 5!</p>"

                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          this.setState({ description: data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                       {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                       <div className="error alignLeft d-none">Enter Your Qualification</div>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    {/* <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="fs20 fw600 col14">Biography</Form.Label>  
                        <Form.Control as="textarea" rows={3} className="inputTyp2 text_bio"/> 
                      </Form.Group>  */}

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="col14 fw600 fs18">
                        Biography
                      </Form.Label>
                      <CKEditor
                        config={{
                          height: 500,
                        }}
                        editor={ClassicEditor}
                        // data="<p>Hello from CKEditor 5!</p>"

                        onReady={(editor) => {
                          // You can store the "editor" and use when it is needed.
                          console.log("Editor is ready to use!", editor); 
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          this.setState({ description: data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                       {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}  
                       <div className="error alignLeft d-none">Enter Your Biography</div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Button
                      className="btnTyp5 mt-3"
                      onClick={() => this.isValid()}
                    >
                      Signup
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}
export default ProfessionalSignup;



