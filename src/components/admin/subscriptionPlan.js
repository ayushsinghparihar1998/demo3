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

      planObj: {
        pl_title: "",
        pl_price: "",
        pl_desc_details: "",
        pl_save: "",
      },

      count: 10,
      offset: 1,
      errors: { pl_title: "", pl_price: "", pl_desc_details: "", pl_save: "" },
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
        let planObj = {};
        if (result && result.status === 200) {
          planObj =
            result && result.data && result.data.data
              ? result.data.data.plan_details_list[0]
              : [];
        }

        this.setState(
          {
            planObj,
          },
          () => {
            console.log("planObj", this.state.planObj);
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

      let data = this.state.planObj;
      console.log(data);

      if (this.props.match.params.id > 0) {
        data.pl_id = this.props.match.params.id;
      }
      ELPViewApiService(
        this.props.match.params.id == 0
          ? "superadminadd_plan"
          : "superadminedit_plan",
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
    let planObj = this.state.planObj;
    planObj[name] =
      name == "cd_audio_min" || name == "cd_video_min"
        ? value.replace(/[^0-9]/g, "")
        : // : name == "cd_audio_status" || name == "cd_video_status"
          // ? value == "Active"
          //   ? "1"
          //   : "0"
          value.trim();
    this.setState(
      {
        planObj,
      },
      () => {
        console.log(this.state.planObj);
      }
    );
  };
  isValid() {
    const { errors, isValid } = validateInput(this.state.planObj);
    if (!isValid) {
      this.setState({ errors }, () => console.log(this.state.errors));
    }
    return isValid;
  }
  render() {
    const { planObj, errors } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal pt-4 pb-5">
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
                          <Link to={{ pathname: `/admin` }}>Back</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              <Col md={8} lg={9} className="pl-1"> 
                  <div className="professor_search">
                    <Row className="mb-3">
                      <Col md={8}>
                        <div className="fs22 fw600 col10"> 
                        Subscription Plan
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                          >
                            ADD plan
                          </Button>
                        </div>
                      </Col>
                    </Row> 

                  </div>

                  
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div
                                      className="col1 fw600 fs18 pb-1"
                                    >
                                      Basic
                                    </div>

                                  </div> 

                                  <div className="fs15 fw500 col14 pb-1"> 
                                      Rs. 5,900
                                  </div>
                                  <div className="fs15 col14 fw400"> 
                                     Lorem dummy content Lorem Ipsum is simply dummy text
                                     of the printing and typesetting industry. <a className="col40">Read more...</a>
                                  </div>
                                </div>

                                <div className="min-wi250"></div>

                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div
                                      className="col1 fw600 fs18 pb-1"
                                    >
                                      Standard
                                    </div>

                                  </div> 

                                  <div className="fs15 fw500 col14 pb-1">
                                      Rs. 5,900
                                  </div>
                                  <div className="fs15 col14 fw400"> 
                                     Lorem dummy content Lorem Ipsum is simply dummy text
                                     of the printing and typesetting industry. <a className="col40">Read more...</a>
                                  </div>
                                </div>

                                <div className="min-wi250"></div>

                              </div>
                            </div>
                          </div>

                        </div>

                        <div className="adminlistener p-4 mb-3"> 
                          <div className="d-flex text-left">
                            
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div
                                      className="col1 fw600 fs18 pb-1"
                                    >
                                      Premium
                                    </div>

                                  </div> 

                                  <div className="fs15 fw500 col14 pb-1">
                                      Rs. 5,900
                                  </div>
                                  <div className="fs15 col14 fw400"> 
                                     Lorem dummy content Lorem Ipsum is simply dummy text
                                     of the printing and typesetting industry. <a className="col40">Read more...</a>
                                  </div>
                                </div>

                                <div className="min-wi250"></div>

                              </div>
                            </div>
                          </div>

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
