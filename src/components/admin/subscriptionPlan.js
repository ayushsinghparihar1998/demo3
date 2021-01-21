import React, { Component } from "react";
import { connect } from "react-redux";

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
} from "react-bootstrap";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import { Link } from "react-router-dom";
import ELPViewApiService from "../../common/services/apiService";
import validateInput from "../../common/validations/validationPlanAdd";

class subscriptionPlan extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      domainObj: {
        cd_domain_name: "",
        cd_audio_min: "",
        cd_video_min: "",
        cd_audio_status: "",
        cd_video_status: "",
      },

      count: 10,
      offset: 1,
      errors: {},
    };
  }
  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    if (this.props.match.params.id > 0) {
      this.getPlanDetails();
    }
  };
  getPlanDetails = () => {
    let data = {
      cd_id: this.props.match.params.id,
    };

    ELPViewApiService("superadmingetcorporatedomaindetailsbyid", data).then(
      (result) => {
        console.log("result", result);
        let domainObj = {};
        if (result && result.status === 200) {
          domainObj =
            result && result.data && result.data.data
              ? result.data.data.domain_details_list[0]
              : [];
        }
        domainObj.cd_audio_min = "" + domainObj.cd_audio_min / 60;
        domainObj.cd_video_min = "" + domainObj.cd_video_min / 60;
        this.setState(
          {
            domainObj,
          },
          () => {
            console.log("domainObj", this.state.domainObj);
          }
        );
      }
    );
  };
  handleSubmit = () => {
    if (this.isValid()) {
      this.setState({
        showLoader: true,
      });

      let domainObj = this.state.domainObj;
      let data = {
        cd_domain_name: domainObj.cd_domain_name,
        cd_audio_min: domainObj.cd_audio_min * 60,
        cd_video_min: domainObj.cd_video_min * 60,
        cd_audio_status: domainObj.cd_audio_status,
        cd_video_status: domainObj.cd_video_status,
      };
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.cd_id = this.props.match.params.id;
        data.cd_domain_name = "";
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminaddcorporatedomain"
          : "superadmineditcorporatedomain",
        data
      )
        .then((result) => {
          if (result && result.data && result.data.status === "success") {
            // this.props.history.push("/admin");
            setTimeout(() => {
              this.props.history.push("/admin");
            }, 1000);
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
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let domainObj = this.state.domainObj;
    domainObj[name] =
      name == "cd_audio_min" || name == "cd_video_min"
        ? value.replace(/[^0-9]/g, "")
        : // : name == "cd_audio_status" || name == "cd_video_status"
          // ? value == "Active"
          //   ? "1"
          //   : "0"
          value.trim();
    this.setState(
      {
        domainObj,
      },
      () => {
        console.log(this.state.domainObj);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.domainObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }
  render() { 
    return ( 
      <div className="page__wrapper innerpage"> 
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal pt-4 pb-5">
          <Container>
            <Row>
              <Col md={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Quick Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div>
                        <div className="fs14 col28 fw500">
                          <Link to={{ pathname: `/admin` }}>Back</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1"> 
                <div className="corporateMember subscriptionplan">  
                  <div className="fs28 col10 mb-4">
                        Subscription Plan
                  </div>
                  <Form>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                          Plan Name
                      </Form.Label>

                      <Form.Control 
                        type="email"
                        placeholder=""
                        className="inputTyp2"
                        id="outlined-email"
                        variant="outlined"
                        name="cd_domain_name"
                        
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_domain_name} */}
                      </div>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14">
                         Plan Amount
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined" 
                      />
                      <div className="col27 fs14 fw400 mt-2 error">
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group> 

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14"> 
                           Plan Description
                      </Form.Label>
                      <Form.Control as="textarea" rows={3} className="inputTyp2 cate2" /> 
                      <div className="col27 fs14 fw400 mt-2 error">  
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label className="fs20 fw600 col14"> 
                           Plan Offer(%)
                      </Form.Label>
                      <Form.Control
                        type="text"
                        className="inputTyp2"
                        placeholder=""
                        id="outlined-email"
                        variant="outlined" 
                      />
                      <div className="col27 fs14 fw400 mt-2 error">  
                        {/* {errors.cd_audio_min} */}
                      </div>
                    </Form.Group> 
                     
                    <Button
                      variant="primary btnTyp5 mt-4"
                      type="button"
                      onClick={() => this.handleSubmit()}
                    >
                      submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default subscriptionPlan;  
