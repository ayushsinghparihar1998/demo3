import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
  Image,
} from "react-bootstrap";
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
import { post } from "axios";
import constant from "../../constant";
import UploadDetail from "../../assets/images/upload_detail.svg"; 

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
      u_bio: "",
      u_area_service: "",

      professional_keyword: [],
      professional_cat_name: [],
      eat: false,
      luv: false,
      pray: false,
      errors: {},
      proffCat: [],
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
    this.getProffCat();
  }
  getProffCat = () => {
    let proffCat = this.state.proffCat;
    ELPViewApiService("superadmingetprofessioanalcategory", {}).then(
      (result) => {
        if (result && result.status === 200) {
          proffCat =
            result && result.data && result.data.data
              ? result.data.data.domain_list
              : [];
        }
        this.setState(
          {
            proffCat,
          },
          () => {
            console.log("ProffCat", this.state.proffCat);
          }
        );
      }
    );
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    // var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    var regcomma = /^(?!,)/i;
    var rg = /^.*[^,]$/i;
    var rg2 = /^(?!.*([.,-])\1)[a-zA-Z0-9\s.,-]+$/;
    console.log("stat", regcomma.test(value));
    console.log("end", rg.test(value));
    console.log("multiple", rg2.test(value));
    this.setState(
      {
        [name]:
          name == "u_mobile" ||
          name == "u_birthdate" ||
          name == "u_work_experience"
            ? value.replace(/[^0-9]/g, "")
            : name == "u_lang" || name == "professional_keyword"
            ? value.replace(/[^a-zA-Z,]/g, "")
            : name == "screen_name"
            ? value
            : name == "u_area_service"
            ? value.replace(/[^a-zA-Z0-9,]/g, "")
            : value.trim(),
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleCheck = (event) => {
    const { name, value, id } = event.target;

    let professional_cat_name = this.state.professional_cat_name;
    let obj = {
      pu_cat_name: name,
      pu_cat_id: id,
    };
    var isInArray =
      professional_cat_name.find(function (el) {
        return el.pu_cat_id == id;
      }) !== undefined;
    var index = professional_cat_name.findIndex((el) => el.pu_cat_id == id);

    console.log(isInArray, index);
    if (index > -1) {
      professional_cat_name.splice(index, 1);
    } else {
      professional_cat_name.push(obj);
    }
    this.setState(
      {
        professional_cat_name,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleKeyWord = (e) => {
    let val = e.target.value;
    let arr = val.split(",");
    let ar = [];

    this.setState(
      {
        professional_keyword: arr,
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
  handleUploadPicture = async (event, name) => {
    const fileObject = event.target.files[0];
    console.log();
    if (fileObject) {
      this.setState({
        isUploading: true,
      });
      const formData = new FormData();
      formData.set("u_image", fileObject);
      console.log("formDataformData", formData);

      const url = constant.SERVER_URL + "elp/uploadimage";
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await post(url, formData, config);
      console.log(name, "resultresultresult", response);

      this.setState({
        isUploading: false,
        u_image: response.data.data.filepath,
        filename: fileObject.name,
      });
    }
  };

  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });
      let ar = [];
      this.state.professional_keyword.map((item) => {
        let obj = {
          pk_keyword: item,
        };
        ar.push(obj);
      });
      let data = {
        // screen_name: this.state.screen_name
        //   ? this.state.screen_name.trim()
        //   : "",
        u_birthdate: this.state.u_birthdate,
        screen_name: this.state.screen_name,
        u_lang: this.state.u_lang,
        u_mobile: this.state.u_mobile,

        u_location: "",
        device_token: "",
        device_type: "",
        type: "",
        u_therapy_style: "",
        u_hourly_fee: "",
        u_school_code: "",

        u_work_experience: this.state.u_work_experience,
        u_education: this.state.u_education,
        u_image: this.state.u_image,
        u_bio: this.state.u_bio,
        u_area_service: this.state.u_area_service,

        email: this.state.email ? this.state.email.toLowerCase().trim() : "",
        password: this.state.password ? this.state.password.trim() : "",
        u_lang: this.state.u_lang ? this.state.u_lang.trim() : "",
        u_mobile: this.state.u_mobile ? this.state.u_mobile.trim() : "",

        professional_keyword: ar,
        professional_cat_name: this.state.professional_cat_name,
      };
      console.log(data);

      ELPViewApiService("superadminregisterprofessional", data)
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            this.props.history.push("/adminlistener");
            this.clear();
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
      u_bio: "",
      u_area_service: "",

      professional_keyword: [],
      professional_cat_name: [],
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
    const { errors, proffCat } = this.state;

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
                        Add Profile Image
                      </Form.Label>
                      <div className="mt-1 mb-3 imgSetProfile">
                        <Image src={this.state.u_image} className="" />
                      </div>
                      <Form.File
                        id="exampleFormControlFile1"
                        className="inputTyp2"
                        onChange={(e) =>
                          this.handleUploadPicture(e, "backgroud_img")
                        }
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_image ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_image}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        // isInvalid={errors.screen_name ? true : false}
                        name="screen_name"
                        value={this.state.screen_name}
                        onChange={(e) => this.handleChange(e)}
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        maxLength={100}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.screen_name ? "error " : "d-none "
                        }`}
                      >
                        {errors.screen_name}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Email Address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={100}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.email ? "error " : "d-none "
                        }`}
                      >
                        {errors.email}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Password
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        className="inputTyp2"
                        id="outlined-password"
                        variant="outlined"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={40}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.password ? "error " : "d-none "
                        }`}
                      >
                        {errors.password}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Phone
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="u_mobile"
                        value={this.state.u_mobile}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={10}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_mobile ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_mobile}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Work Experience
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Work Experience "
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="u_work_experience"
                        value={this.state.u_work_experience}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={3}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_work_experience ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_work_experience}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">Age</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Age"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="u_birthdate"
                        value={this.state.u_birthdate}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={3}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_birthdate ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_birthdate}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Language
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Language"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="u_lang"
                        value={this.state.u_lang}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={100}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_lang ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_lang}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
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
                        name="professional_keyword"
                        value={this.state.professional_keyword}
                        onChange={(e) => this.handleKeyWord(e)}
                        maxLength={255}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.professional_keyword ? "error " : "d-none "
                        }`}
                      >
                        {errors.professional_keyword}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Service
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Area for services"
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="u_area_service"
                        value={this.state.u_area_service}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={255}
                      />
                      <div
                        className={`alignLeft  ${
                          errors.u_area_service ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_area_service}
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                        Select Category
                      </Form.Label>
                      <Row>
                        {proffCat &&
                          proffCat.map((cat) => {
                            return (
                              <Col md={4}>
                                <Form.Group controlId="formBasicCheckbox">
                                  <Form.Check
                                    type="checkbox"
                                    label={cat.pc_name}
                                    className="checkboxTyp1"
                                    name={cat.pc_name}
                                    id={cat.pc_id}
                                    // handleCheck={this.state.eat}
                                    // checked = {}
                                    onChange={(e) => this.handleCheck(e)}
                                  />
                                </Form.Group>
                              </Col>
                            );
                          })}
                      </Row>
                      <div
                        className={`alignLeft  ${
                          errors.professional_cat_name ? "error " : "d-none "
                        }`}
                      >
                        {errors.professional_cat_name}
                      </div>
                    </Form.Group>
                  </Col>

                  {/* 
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
                              label="Eat"
                              className="checkboxTyp1"
                              name="Eat"
                              handleCheck={this.state.eat}
                              onChange={(e) => this.handleCheck(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckboxtwo">
                            <Form.Check
                              type="checkbox"
                              label="Luv"
                              className="checkboxTyp1"
                              name="Luv"
                              handleCheck={this.state.luv}
                              onChange={(e) => this.handleCheck(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={4}>
                          <Form.Group controlId="formBasicCheckboxthree">
                            <Form.Check
                              type="checkbox"
                              label="Pray"
                              className="checkboxTyp1"
                              name="Pray"
                              handleCheck={this.state.pray}
                              onChange={(e) => this.handleCheck(e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div
                        className={`alignLeft  ${
                          errors.professional_cat_name ? "error " : "d-none "
                        }`}
                      >
                        {errors.professional_cat_name}
                      </div>
                    </Form.Group>
                  </Col>
 */}
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
                          this.setState({ u_education: data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                      {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                      <div
                        className={`alignLeft  ${
                          errors.u_education ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_education}
                      </div>
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
                          this.setState({ u_bio: data });
                        }}
                        onBlur={(event, editor) => {
                          console.log("Blur.", editor);
                        }}
                        onFocus={(event, editor) => {
                          console.log("Focus.", editor);
                        }}
                      />
                      {/* <Form.Control onChange={(e) => this.setState({ description: e.target.value })} as="textarea" className="inputTyp2 cate2" rows="3" /> */}
                      <div
                        className={`alignLeft  ${
                          errors.u_bio ? "error " : "d-none "
                        }`}
                      >
                        {errors.u_bio}
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Button
                      className="btnTyp5 mt-3"
                      onClick={() => this.handleSubmit()}
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
