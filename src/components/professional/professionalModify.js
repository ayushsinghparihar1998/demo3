import React, { Component } from "react";
import { Button, Container, Row, Col, Form, Modal } from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import { connect } from "react-redux";
import { actionChangePassword } from "../../common/redux/actions";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import moment from "moment";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import validateInput from "../../common/validations/validationProfessionalSignup";
import ELPViewApiService from "../../common/services/apiService";
import { post } from "axios";
import constant from "../../constant";
import Item from "antd/lib/list/Item";

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
      proffDetail: {},
    };
  }

  componentDidMount() {
    const { url } = this.props.match;
    //
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
        this.setState({
          proffCat,
        });
        this.getProffDetails("superadminprofessionaluserdetail");
      }
    );
  };

  getProffDetails = (type) => {
    let data = {
      userid: this.props.match.params.id,
    };

    ELPViewApiService(type, data).then((result) => {
      console.log("result", result);
      let proffDetail = [];
      let proffCat = this.state.proffCat;
      if (result && result.status === 200) {
        proffDetail =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }
      let keyw = "";
      proffDetail.professional_keyword.map((item) => {
        keyw = keyw + item.pk_keyword + ",";
      });
      let cats = [];
      proffDetail.professional_cat_name.map((item) => {
        cats.push(item.pu_cat_id);
      });
      console.log("cats", cats);
      proffCat.map((item) => {
        if (cats.includes(item.pc_id)) {
          item.flag = true;
        } else {
          item.flag = false;
        }
        return item;
      });
      keyw = keyw.trim(",");
      proffDetail.professional_keyword = keyw;
      this.setState(
        {
          proffDetail,
          proffCat,
        },
        () => {
          console.log("ProffDetail", this.state.proffDetail);
          console.log("proffCat", this.state.proffCat);
        }
      );
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    let proffDetail = this.state.proffDetail;
    console.log(name, value);
    proffDetail[name] =
      name == "u_mobile" || name == "u_birthdate" || name == "u_work_experience"
        ? value.replace(/[^0-9]/g, "")
        : name == "u_lang" || name == "professional_keyword"
        ? value.replace(/[^a-zA-Z,]/g, "")
        : name == "u_lang"
        ? value.replace(/[^a-zA-Z ]/g, "")
        : value.trim();
    this.setState(
      {
        proffDetail,
      },
      () => {
        console.log(this.state.proffDetail);
      }
    );
  };

  handleCheck = (event) => {
    const { name, checked, value, id } = event.target;

    console.log("value , checked", value, checked);
    let proffCat = this.state.proffCat;
    var index = proffCat.findIndex((el) => el.pc_id == id);
    proffCat[index].flag = checked;

    this.setState(
      {
        proffCat,
      },
      () => {
        console.log(this.state.proffCat);
      }
    );
  };

  handleKeyWord = (e) => {
    let val = e.target.value;
    let arr = val.split(",");
    let proffDetail = this.state.proffDetail;
    proffDetail.professional_keyword = arr;

    this.setState(
      {
        proffDetail,
      },
      () => {
        console.log(this.state.proffDetail);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.proffDetail);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }
  handleUploadPicture = async (event, name) => {
    const fileObject = event.target.files[0];
    let proffDetail = this.state.proffDetail;
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
      proffDetail.u_image = response.data.data.filepath;

      this.setState({
        isUploading: false,
        proffDetail,
        filename: fileObject.name,
      });
    }
  };

  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });
      let proffDetail = this.state.proffDetail;
      let ar = [];
      proffDetail.professional_keyword.split(",").map((item) => {
        let obj = {
          pk_keyword: item,
        };
        ar.push(obj);
      });
      let data = {
        // screen_name: this.state.screen_name
        //   ? this.state.screen_name.trim()
        //   : "",
        u_birthdate: proffDetail.u_birthdate,
        screen_name: proffDetail.screen_name,
        u_lang: proffDetail.u_lang,
        u_mobile: proffDetail.u_mobile,

        u_location: "",
        device_token: "",
        device_type: "",
        type: "",
        u_therapy_style: "",
        u_hourly_fee: "",
        u_school_code: "",

        u_work_experience: proffDetail.u_work_experience,
        u_education: proffDetail.u_education,
        u_image: proffDetail.u_image,
        u_bio: proffDetail.u_bio,
        u_area_service: proffDetail.u_area_service,

        email: proffDetail.email ? proffDetail.email.toLowerCase().trim() : "",
        password: proffDetail.password ? proffDetail.password.trim() : "",
        u_lang: proffDetail.u_lang ? proffDetail.u_lang.trim() : "",
        u_mobile: proffDetail.u_mobile ? proffDetail.u_mobile.trim() : "",

        professional_keyword: ar,
        professional_cat_name: this.state.proffCat.map((item) => {
          if (item.flag == true) {
            return item;
          }
          return null;
        }),
      };
      console.log(data);

      ELPViewApiService("superadminregisterprofessional", data)
        .then((result) => {
          if (result && result.data && result.data.status === "SUCCESS") {
            this.props.history.push("/professionalSignup");
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
    let proffDetail = this.state.proffDetail;
    proffDetail = {
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
    };
    this.setState({
      proffDetail,
      showLoader: false,
      errors: {},
    });
  }
  handlePasswordChange = (event) => {
    const { name, value } = event.target;
    if (event.target.value.length > 8) {
      var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      var test = reg.test(value.trim());
    }
    this.setState({ [name]: value.trim() });
  };

  handleResetPassword = () => {
    let proffDetail = this.state.proffDetail;
    let data = {
      password: this.state.userPassword,
      user_id: proffDetail.id ? proffDetail.id : "",
    };
    ELPViewApiService("superadminchangepassword", data).then((result) => {
      console.log("actionChangePassword", result);
    });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSubmit();
    }
  };

  render() {
    const { errors, proffDetail, proffCat } = this.state;

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
                        value={proffDetail.screen_name}
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
                        value={proffDetail.email}
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
                        New Password
                      </Form.Label>
                      {/* <Form.Control
                        type="text"
                        placeholder="Password"
                        className="inputTyp2"
                        id="outlined-password"
                        variant="outlined"
                        name="password"
                        value={proffDetail.password}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={40}
                      /> */}
                      <div className="motivate_pwd">   
                          <Form.Control
                            type="password"
                            name="userPassword"
                            onChange={this.handlePasswordChange}
                            value={this.state.userPassword}
                            minLength="8"
                            maxLength="15"
                            inputProps={{ maxLength: 15 }}
                            className="inputTyp2"
                          />
                          <Button
                            className="btnTyp11 ml-3"
                            onClick={this.handleResetPassword}
                          >
                            Change Password
                          </Button>
                      </div>
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
                        value={proffDetail.u_mobile}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={11}
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
                        value={proffDetail.u_work_experience}
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
                        value={proffDetail.u_birthdate}
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
                        value={proffDetail.u_lang}
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
                        value={proffDetail.professional_keyword}
                        onChange={(e) => this.handleKeyWord(e)}
                        maxLength={200}
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
                        value={proffDetail.u_area_service}
                        onChange={(e) => this.handleChange(e)}
                        maxLength={100}
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
                                    handleCheck={cat.flag}
                                    value={cat.flag}
                                    checked={cat.flag == true}
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
                          let proffDetail = this.state.proffDetail;
                          proffDetail.u_education = data;
                          this.setState({ proffDetail });
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
                          let proffDetail = this.state.proffDetail;
                          proffDetail.u_bio = data;
                          this.setState({ proffDetail });
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
export default connect(null, {
  actionChangePassword,
})(ProfessionalSignup);
