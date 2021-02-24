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
import { Modal } from "react-bootstrap";
import Deleteusers from "../../assets/images/delete_users.svg";
import Blueicons from "../../assets/images/blue_cross.svg";
import constant from "../../constant";
class ViewQA extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      deleteObjConformationModal: false,
      deletename: "",
      as_que_id: "",
    };
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

  deleteQue = () => {
    let data = {
      as_que_id: this.state.as_que_id,
      as_status: 3,
    };
    let apiData = "superadmindelete_assessqueansstatus";

    ELPViewApiService(apiData, data).then((result) => {
      this.setState({ deleteObjConformationModal: false });
      if (result && result.status === 200) {
        setTimeout(() => {
          this.superadminget_assessqueanstlist();
        }, 100);
      }
    });
  };

  handleConformation = (flag, ind, id) => {
    this.setState({
      deleteObjConformationModal: flag,
      deletename: "Question " + ind,
      as_que_id: id,
    });
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
                          <Link
                            to={{
                              pathname:
                                "/qaViewDetails/" + this.props.match.params.id,
                            }}
                          >
                            Back
                          </Link>
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
                      <Button
                        variant="btnTypAdd"
                        type="button"
                        onClick={() =>
                          this.props.history.push(
                            "/editQa/" + this.props.match.params.id + "/" + 0
                          )
                        }
                      >
                        <span>
                          <i className="fa fa-plus"></i>
                        </span>{" "}
                        Add More Question
                        <span className="ml-2 b-none">
                          {/* <Image src={Infos} className="infos" /> */}
                        </span>
                      </Button>
                    </div>
                  </div>
                  {this.state.asstDetail &&
                    this.state.asstDetail.map((item, index) => {
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
                              <span
                                className="mr-3 pointer"
                                onClick={() =>
                                  this.props.history.push(
                                    "/editQa/" +
                                      this.props.match.params.id +
                                      "/" +
                                      item.as_que_id
                                  )
                                }
                              >
                                <Image src={Editicon} alt="" />
                              </span>
                              <span
                                className="pointer"
                                onClick={() =>
                                  this.handleConformation(
                                    true,
                                    index + 1,
                                    item.as_que_id
                                  )
                                }
                              >
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
                              <strong>Question {index + 1}.</strong>
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: item.as_que_name,
                                }}
                                className="d-inline-block ml-1"
                              ></span>
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                {item.assessment_answer.map((val, ii) => {
                                  return (
                                    <li>
                                      <strong>{ii + 1} .</strong>
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: val.as_answer,
                                        }}
                                        className="d-inline-block ml-1"
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
          <Modal
            show={this.state.deleteObjConformationModal}
            onHide={() => this.handleConformation(false)}
            className="custom-popUp confirmation-box delete_modal"
            bsSize="small"
          >
            <Modal.Body>
              <div className="delete_user mt-4">
                <Image src={Deleteusers} alt="" />
                <Image
                  src={Blueicons}
                  alt=""
                  className="close pointer"
                  onClick={() => this.handleConformation(false)}
                />
                <div className="text-center fs24 mt-4 col64 mb-4">
                  Are you sure want to delete <br /> {this.state.deletename}?{" "}
                </div>

                <div className="text-center mb-5">
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={() => this.deleteQue()}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-default text-uppercase sm-btn"
                    onClick={() => this.handleConformation(false)}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewQA;
