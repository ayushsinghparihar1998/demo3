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
import validateInput from "../../common/validations/validationAddDomain";
import { post } from "axios";
import ELPRxApiService from "../../common/services/apiService";
import Editicon from "../../assets/images/edit_icon.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import blogclock from "../../assets/images/blogclock.png";
import UserChats from "../../assets/images/user_chat5.svg";
import Infos from "../../assets/images/infos.png";

import constant from "../../constant";
class ViewQA extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.superadminget_assessqueanstlist();
  };

  superadminget_assessqueanstlist = (id) => {
    let data = {
      as_test_id: this.props.match.params.id,
      count: 100,
      offset: 1,
    };

    ELPViewApiService("superadminget_assessqueanstlist", data).then(
      (result) => {
        console.log("result", result);
        let asstDetail = [];

        if (result && result.status === 200) {
          asstDetail =
            result && result.data && result.data.data
              ? result.data.data.assess_queans_listing
              : [];
        }
        this.setState(
          {
            asstDetail,
          },
          () => {
            console.log("asstDetail", this.state.asstDetail);
          }
        );
      }
    );
  };

  render() {
    const { asstDetail } = this.state;

    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout adminProfessinal addKits pt-4 pb-5">
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

              <Col md={8} lg={9} className="pl-1">
                <div className="professor_search ViewQa">
                  <div className="fs22 fw600 col10">Question Answer</div>
                  <div className="mentalOne">
                    <div className="col14 fs18 fw600">Mental Health</div>
                    <div className="position-relative">
                      <Button variant="btnTypAdd" type="button">
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add More Question
                        <span className="ml-2 b-none">
                          <Image src={Infos} className="infos" />
                        </span>
                      </Button>
                    </div>
                  </div>
                  {this.state.asstDetail &&
                    this.state.asstDetail.map((item) => {
                      return (
                        <div className="QaListings">
                          <div className="QaHeader">
                            <div className="fs18 col14 fw300">
                              Type:{" "}
                              <span className="fw500">
                                {item.as_que_type == 1
                                  ? "Relevent"
                                  : "Irelevent"}
                              </span>
                            </div>
                            <div className="d-flex ml-auto minw-90">
                              <span className="mr-3">
                                <Image src={Editicon} alt="" />
                              </span>
                              <span>
                                <Image src={Deleteicon} alt="" />
                              </span>
                            </div>
                          </div>
                          {/* "assess_queans_listing":
                        [{"as_que_id":"18","as_test_id":"11","
                        as_que_name":"Your fav. city","
                        as_que_type":"2","as_status":"1","
                        as_datetime":"2021-02-08 19:23:08",
                        "assessment_answer":[{"as_ans_id":"46","as_answer":"50","as_weightage":"",
                        "as_datetime":"2021-02-08 19:23:08"}, */}
                          <div className="QaBody">
                            <div className="col29 fw500 fs17 pb-1">
                              <strong>Question 1.</strong>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.as_que_name,
                                }}
                              ></span>
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                {item.assessment_answer.map((val) => {
                                  return (
                                    <li>
                                      <strong>1.</strong>
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: val.as_answer,
                                        }}
                                      ></span>
                                    </li>
                                  );
                                })}
                              </ul>
                              <div className="numberQa">
                                {item.assessment_answer.map((val) => {
                                  return (
                                    <div className="counts">
                                      {val.as_weightage}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default ViewQA;
