import React, { Component } from "react";
import {
  Button,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import NavBar from "../core/nav";
import NavBarAdmin from "../core/navAdmin";

import Footer from "../core/footer";
import Profileban from "../../assets/images/profile_ban.svg";
import { Link } from "react-router-dom";
import Menuicon from "../../assets/images/menu_icon.svg";
import Profileimg from "../../assets/images/profile_img.svg";
import Usaflag from "../../assets/images/india_flag.svg";
import warningS from "../../assets/images/w_signal.svg";
import { connect } from "react-redux";
import { actionGetProfile } from "../../common/redux/actions";
import * as moment from "moment";
import { getLocalStorage } from "../../common/helpers/Utils";
import CONSTANTS from "../../common/helpers/Constants";
import Ritikaimg from "../../assets/images/Ritika.png";
import ELPViewApiService from "../../common/services/apiService";
import Crossbtn from "../../assets/images/blue_cross.svg";
import ELPRxApiService from "../../common/services/apiService";

class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proffDetail: {},
      show3: false,
      cat_child_array: [],
      professional_keyword: [],

      // For Book a Session
      professionalId: null,
      professionalName: null,
      professionalEmail: null,
      appointmentSubject: null,
      description: null,
      appointmentDate: null,
      appointmentTime: null,

      // validation Error
      validationError: false,
    };
  }

  componentDidMount() {
    // console.log(this.props.location.state.isReadMore)
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.type);
    this.getProffDetails(
      this.props.match.params.type == "admin"
        ? "superadminprofessionaluserdetail"
        : "corporateprofessionaluserdetail"
    );
  }

  getProffDetails = (type) => {
    let data = {
      userid: this.props.match.params.id,
    };

    if (this.props.location.state && this.props.location.state.isReadMore) {
      ELPViewApiService("corporateprofessionaluserdetail", {
        userid: this.props.match.params.id,
      })
        .then((result) => {
          let proffDetail = [];
          if (result && result.status === 200) {
            proffDetail =
              result && result.data && result.data.data
                ? result.data.data[0]
                : [];
          }
          this.setState(
            {
              proffDetail,
              cat_child_array: proffDetail.cat_child_array,
            },
            () => {
              console.log("ProffDetail", this.state.proffDetail);
            }
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      ELPViewApiService(type, data).then((result) => {
        console.log("result", result);
        let proffDetail = [];
        if (result && result.status === 200) {
          proffDetail =
            result && result.data && result.data.data
              ? result.data.data[0]
              : [];
        }
        this.setState(
          {
            proffDetail,
          },
          () => {
            console.log("ProffDetail", this.state.proffDetail);
          }
        );
      });
    }
  };
  validate = () => {
    let isValid = 0;
    if (!this.state.professionalEmail) {
      this.setState({
        validationErrorEmail: "Please Enter Professional Email.",
      });
      isValid += 1;
    } else {
      this.setState({ validationErrorEmail: null });
    }
    if (!this.state.appointmentSubject) {
      this.setState({
        validationErrorSubject: "Please Enter Appointment Subject.",
      });
      isValid += 1;
    } else {
      this.setState({ validationError: null });
      this.setState({ validationErrorSubject: null });
    }
    if (!this.state.description) {
      this.setState({
        validationErrorDescription: "Please Enter Appointment Description.",
      });
      isValid += 1;
    } else {
      this.setState({ validationErrorDescription: null });
    }
    if (!this.state.appointmentDate) {
      this.setState({ validationErrorDate: "Please Enter Appointment Date." });
      isValid += 1;
    } else {
      this.setState({ validationErrorDate: null });
    }
    if (!this.state.appointmentTime) {
      this.setState({ validationErrorTime: "Please Enter Appointment Time." });
      isValid += 1;
    } else {
      this.setState({ validationErrorTime: null });
    }
    if (isValid !== 0) {
      return false;
    } else {
      return true;
    }
  };

  bookSessionOpen = (obj) => {
    console.log(obj);
    this.setState({
      // professionalEmail: obj.email,
      professionalId: obj.id,
      professionalName: obj.u_name,
      show3: true,
    });
    if (!this.state.appointmentDate) {
      this.setState({ validationError: "This field is required..." });
      return false;
    } else {
      this.setState({ validationError: null });
    }
    this.setState({ validationError: null });
    return true;
  };
  postBookingData = () => {
    let isValid = this.validate();
    if (isValid) {
      ELPRxApiService("corporateappointmentschedule", {
        cs_pro_u_id: this.state.professionalId,
        cs_pro_name: this.state.professionalName,
        cs_pro_email_id: this.state.professionalEmail,
        cs_subject: this.state.appointmentSubject,
        cs_description: this.state.description,
        cs_date: this.state.appointmentDate,
        cs_time: [{ cs_time_slot: this.state.appointmentTime }],
      })
        .then((res) => {
          console.log("booking data===>", res);
          this.setState({ show3: false });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  bookSessionOpen = (obj) => {
    console.log(obj);
    this.setState({
      professionalEmail: obj.email,
      professionalId: obj.id,
      professionalName: obj.u_name,
      show3: true,
    });
  };

  bookSessionClose = () => {
    this.setState({ show3: false });
  };

  render() {
    let proffDetail = this.state.proffDetail;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          {this.props.match.params.type == "admin" ? (
            <NavBarAdmin {...this.props} />
          ) : (
            <NavBar {...this.props} />
          )}
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <div className="profile_layout p_detailone pt-4 pb-5"> 
              <Container>
                <Row>
                  <Col md={4} lg={3} className="pr-1">
                    <div className="adminsidebar">
                      <div className="inner_area">
                        <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                          Quick Links
                        </div>
                        <div className="d-flex m-3 pb-3 border-bottom">
                          <div>
                            <div className="fs14 col28 fw500">
                              {this.props.match.params.type == "admin" ? (
                                <Link to={{ pathname: `/admin` }}>
                                  Back
                                </Link>
                              ) : (
                                <Link to={{ pathname: `/professionalListing` }}>
                                  Back
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={8} lg={9} className="pl-1">
                    <div className="myprofile profiledetails">
                      <div className="detailone">
                        <Row>
                          <Col md={4}>
                            <div className="leftprofile">
                              <Image src={proffDetail.u_image} alt="" />
                            </div>
                          </Col>
                          <Col md={8}>
                            <div className="rightprofile">
                              <div className="fs24 col3 fw600 mb-1">
                                {proffDetail.u_name}
                              </div>
                              <div className="col3 fw500 mt-1 mb-2">
                                Work Experience:
                                <span className="col14 fw400 ml-2">
                                  {proffDetail.u_work_experience} Years
                                </span>
                              </div>
                              <div className="col3 fw500 mt-1 mb-2">
                                Language:
                                <span className="col14 fw400 ml-2">
                                  {proffDetail.u_lang}
                                </span>
                              </div>
                              <div className="col3 fw500 mt-1 mb-2">
                                Keywords:
                                <span className="col14 fw400 ml-2">
                                  {proffDetail.professional_keyword &&
                                    proffDetail.professional_keyword.map(
                                      (item, index) => {
                                        return (
                                          <>
                                            {item.pk_keyword}
                                            {proffDetail.professional_cat_name && (index + 1) == proffDetail.professional_cat_name.length
                                              ? ""
                                              : ""}{" "} 
                                          </>
                                        );
                                      }
                                    )}
                                </span>
                              </div>
                              <div className="col3 fw500 mt-1 mb-2">
                                Category:
                                <span className="col14 fw400 ml-2">
                                  {this.props.match.params.type == "admin"
                                    ? proffDetail.professional_cat_name &&
                                      proffDetail.professional_cat_name.map(
                                        (item, index) => {
                                          return (
                                            <>
                                              {item.pu_cat_name}
                                              {proffDetail.professional_cat_name && index + 1 == proffDetail.professional_cat_name.length
                                                ? ""
                                                : ","}{" "}
                                            </>
                                          );
                                        }
                                      ) 
                                    : this.state.cat_child_array.map(
                                        (obj, i) => {
                                          return i ===
                                            this.state.cat_child_array.length -
                                              1 ? (
                                            <span>{obj}</span>
                                          ) : (
                                            <span>{obj},</span>
                                          );
                                        }
                                      )}
                                </span>
                              </div> 
                              <div className="col3 fw500 mt-1 mb-2">
                                Services:
                                <span className="col14 fw400 ml-2">
                                  {proffDetail.u_area_service &&
                                    proffDetail.u_area_service
                                      .split(",")
                                      .map((item, index) => {
                                        return (
                                          <>
                                            {item}{" "}
                                            {index + 1 ==
                                            proffDetail.u_area_service.split(
                                              ","
                                            ).length
                                              ? ""
                                              : ","}{" "}
                                          </>
                                        );
                                      })}
                                </span>
                              </div>{" "}
                              <div className="col3 fw500 mt-1 mb-2">
                                Age: 
                                <span className="col14 fw400 ml-2">
                                  {proffDetail.u_birthdate} Years 
                                </span>
                              </div>
                              <div className="mb-2">
                                <div className="mb-4">
                                Email: 
                                      <a
                                      className="ml-2 fw400"
                                    >
                                      {proffDetail.email}
                                    </a>
                                </div> 
                                {this.props.match.params.type === "admin" ? (
                                  ""
                                ) : (
                                  <>
                                    {/* <Button
                                      variant="primary"
                                      type="submit"
                                      className="btnTyp5 mr-3"
                                    >
                                      Call
                                    </Button> */}  
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="btnTyp5"
                                        disabled={getLocalStorage("customerInfo") && getLocalStorage("customerInfo").u_verified === "0"?true:false}
                                        onClick={() => {
                                          this.bookSessionOpen(
                                            this.state.proffDetail
                                          );
                                        }}
                                      >
                                        BOOK A SESSION
                                      </Button>
                                    
                                  </>
                                )}
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="detailtwo">
                        <Col md={12}>
                          <div className="fs32 col3 text-center fw500 mb-4">
                            Education
                          </div>
                          <div
                            className="boxexone"
                            dangerouslySetInnerHTML={{
                              __html: proffDetail.u_education,
                            }}
                          />
                        </Col>
                      </div>

                      <div className="detailthree">
                        <Col md={12}>
                          <div className="fs32 col3 fw600 text-center mb-4">
                            Biography
                          </div>
                          {/* <div className="fs17 col3 fw500 mb-2">
                      Which bucket would your therapy style fit into primarily?
                    </div> */}
                          <div
                            className="fs15 col14 fw400 mb-3"
                            dangerouslySetInnerHTML={{
                              __html: proffDetail.u_bio,
                            }}
                          >
                            {/* {proffDetail.u_bio} */}
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            
            <Modal
              show={this.state.show3}
              className="CreateAccount bookSession"
            >
              <Modal.Header>
                <Button onClick={this.bookSessionClose}>
                  <Image src={Crossbtn} alt="" />
                </Button>
              </Modal.Header>

              <Modal.Body>
                <Container>
                  <div className="layout_box mt-3 mb-4">
                    <div class="col10 fs30 fw600 mb-4 pb-1">Book a Session</div>
                    <Form>
                      {/* <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs20 fw600 col14">
                          Professional Email:
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="inputTyp2"
                          onChange={(e) => {
                            this.setState({
                              professionalEmail: e.target.value,
                            });
                          }}
                        />
                        <div className="error alignLeft d-none">
                          Enter Professional Email
                        </div>
                      </Form.Group> */}
                      {this.state.validationErrorEmail ? (
                        <div>{this.state.validationErrorEmail}</div>
                      ) : null}

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs20 fw600 col14">
                          Appointment Subject
                        </Form.Label>
                        <Form.Control
                          type="text"
                          className="inputTyp2"
                          onChange={(e) => {
                            this.setState({
                              appointmentSubject: e.target.value,
                            });
                          }}
                        />
                        <div className="error alignLeft d-none">
                          Enter Appointment Subject
                        </div>
                        {this.state.validationErrorSubject ? (
                        <div className="error">{this.state.validationErrorSubject}</div>
                      ) : null}
                      </Form.Group>
                      

                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="fs20 fw600 col14">
                          Description
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="inputTyp2 cate2"
                          onChange={(e) => {
                            this.setState({ description: e.target.value });
                          }}
                        />
                        <div className="error alignLeft d-none">
                          Enter Description
                        </div>
                        {this.state.validationErrorDescription ? (
                        <div className="error">{this.state.validationErrorDescription}</div>
                      ) : null}
                      </Form.Group>
                      

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs20 fw600 col14">
                          Appointment Date
                        </Form.Label>

                        {/* <DatePicker selected={selectedDate} onChange="date => setSelectedDate(date)" /> */}
                        {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} /> */}

                        <Form.Control
                          type="date"
                          className="inputTyp2"
                          onChange={(e) => {
                            this.setState({ appointmentDate: e.target.value });
                          }}
                        />

                        <div className="error alignLeft d-none">
                          Enter Appointment Date
                        </div>
                        {this.state.validationErrorDate ? (
                        <div className="error">{this.state.validationErrorDate}</div>
                      ) : null}
                      </Form.Group>
                      

                      <Form.Group controlId="formBasicEmail">
                        <Form.Label className="fs20 fw600 col14">
                          Appointment Time{" "}
                        </Form.Label>
                        {/*<Form.Control as="select" className="selectTyp1" onChange={(e) => {*/}
                        <Form.Control
                          type="time"
                          className="selectTyp1"
                          onChange={(e) => {
                            this.setState({ appointmentTime: e.target.value });
                          }}
                        ></Form.Control>
                        <div className="error alignLeft d-none">
                          Enter Appointment Time
                        </div>
                        {this.state.validationErrorTime ? (
                        <div className="error">{this.state.validationErrorTime}</div>
                      ) : null}
                      </Form.Group>
                      

                      <Button
                        onClick={() => this.postBookingData()}
                        variant="primary"
                        className="btnTyp5 mt-4"
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Container>
              </Modal.Body>
            </Modal>
          </Container> 
        </div>
        <Footer /> 
      </div>
      
    );
  }
}
export default Myprofile; 
