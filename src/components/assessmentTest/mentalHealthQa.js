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
  Modal,
} from "react-bootstrap";
import Alerts from "../../assets/images/alerts.png";
import CrossTwo from "../../assets/images/crosstwo.png";
import NavBar from "../core/nav";
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
import BlogProcessFive from "../../assets/images/blog4.png";
import VideoIcon from "../../assets/images/videoIcon.png";
import Slider from "react-rangeslider";

import constant from "../../constant";
class MentalhealthQa extends Component {
  constructor() {
    super();
    this.state = {
      setShow: false,
      show: false,
      show3: false,
      start: 0,
      end: 4,
      asstQaList: [],
      ar_no_attend_que: 0,
      assess_submit: [],
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount = () => {
    console.log("mental health");
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.getassessqueans_list();
  };

  pageHandle = (key) => {
    let start = this.state.start;
    let end = this.state.end;
    if (key == "next") {
      start = start + 5;
      end = end + 5;
    }
    if (key == "prev") {
      start = start - 5;
      end = end - 5;
    }
    this.setState({
      start,
      end,
    });
  };
  getassessqueans_list = () => {
    let data = {
      count: 100,
      offset: 1,
      as_test_id: this.props.match.params.id,
    };

    ELPViewApiService("getassessqueans_list", data).then((result) => {
      console.log("result", result);
      let asstQaList = [];

      if (result && result.status === 200) {
        asstQaList =
          result && result.data && result.data.data
            ? result.data.data.assess_queans_listing
            : [];
      }
      asstQaList.map((item) => {
        if (item.assessment_answer) {
          item.assessment_answer.map((val) => {
            val.flag = false;
            return val;
          });
        }

        return item;
      });
      this.setState(
        {
          asstQaList,
        },
        () => {
          console.log("asstQaList", this.state.asstQaList);
          console.log(
            this.state.end,
            this.state.asstQaList.length,
            this.state.end >= this.state.asstQaList.length
          );
        }
      );
    });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleChange = (ind, i, checked, ans, que) => {
    console.log("checked", checked);
    console.log(ind, i, ans, que);
    let asstQaList = this.state.asstQaList;
    console.log(asstQaList[ind]);
    asstQaList[ind].assessment_answer.map((item, index) => {
      console.log(item);
      if (index == i) {
        item.flag = checked;
      } else {
        item.flag = false;
      }
      return item;
    });
    let obj = {
      que_id: asstQaList[ind].as_que_id,
      ans_id: asstQaList[ind].assessment_answer[i].as_ans_id,
    };
    let arindx;
    let assess_submit = this.state.assess_submit;
    arindx = assess_submit.findIndex(
      (obj) => obj.que_id == asstQaList[ind].as_que_id
    );
    console.log("arindx", arindx);
    if (arindx < 0) {
      assess_submit.push(obj);
    } else {
      console.log(assess_submit[arindx]);
      assess_submit[arindx].ans_id = ans;
    }
    let ar_no_attend_que = 0;
    asstQaList.map((item) => {
      item.assessment_answer.map((val) => {
        if (val.flag == true) {
          ar_no_attend_que++;
        }
      });
    });
    console.log(ar_no_attend_que);

    this.setState(
      {
        asstQaList,
        ar_no_attend_que,
        assess_submit,
      },
      () => {
        console.log("assess_submit", this.state.assess_submit);
      }
    );
  };
  handleSubmit = () => {
    let data = {
      as_test_id: this.props.match.params.id,
      ar_no_attend_que: this.state.ar_no_attend_que,
      ar_skip_que: this.state.asstQaList.length - this.state.ar_no_attend_que,
      assess_submit: this.state.assess_submit,
    };
    console.log(data);
    this.setState({ show: false });
    // submitassess_test

    ELPViewApiService("submitassess_test", data).then((result) => {
      console.log("result", result);

      if (result && result.data.status === "success") {
        this.props.history.push(
          "/viewAssessmentTest/" + result.data.data.ar_id + "/member"
        );
      }
    });
  };
  render() {
    const { asstQaList } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <Col md={12}>
                <div className="professor_search mentalHealths ViewQa">
                  <div className="fs22 fw600 col8 mb-4 text-center text-uppercase">
                    mental health
                  </div>
                  <div className="QaListings">
                    <div className="QaHeader justify-content-center">
                      <div className="fs18 col14 fw500 text-center">
                        Maximum Marks: 30
                      </div>
                    </div>
                    <div className="QaBody">
                      <div className="CreateAssessment">
                        <Form.Group className="mb-4">
                          <div className="slider">
                            <div className="value mb-3">
                              Question {asstQaList.length}/
                              <small>{this.state.ar_no_attend_que}</small>
                            </div>
                            <Slider
                              min={0}
                              max={asstQaList.length}
                              value={this.state.ar_no_attend_que}
                            />
                          </div>
                        </Form.Group>
                      </div>
                      {asstQaList &&
                        asstQaList.map((item, index) => {
                          return index >= this.state.start &&
                            index <= this.state.end ? (
                            <div className="QuestionList">
                              <div className="col8 fw500 qaList fs18 pb-1">
                                <strong>Q {index + 1}.</strong>{" "}
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: item.as_que_name,
                                  }}
                                  className="d-inline-block ml-1"
                                ></span>
                              </div>
                              {/* as_datetime: "2021-02-23 15:39:49"
as_que_id: "55"
as_que_name: "<p>abcer</p>"
as_que_type: "1"
as_status: "1"
as_test_id: "33"
assessment_answer: (3) [{…}, {…}, {…}] */}
                              <div className="answerDetail">
                                <ul>
                                  {item.assessment_answer &&
                                    item.assessment_answer.map((val, i) => {
                                      return (
                                        <li>
                                          {/* as_ans_id: "125"
assessment_answer: "<p>1</p>"
as_datetime: "2021-02-23 15:39:49"
as_weightage: "1" */}
                                          <span className="ansOne">
                                            <Form.Group controlId="formBasicCheckbox">
                                              <Form.Check
                                                type="radio"
                                                id={
                                                  val.as_ans_id + item.as_que_id
                                                }
                                                // name="as_que_type"
                                                // label={i + 1}
                                                className="radioboxTyp1"
                                                checked={val.flag == true}
                                                onChange={(e) =>
                                                  this.handleChange(
                                                    index,
                                                    i,
                                                    e.target.checked,
                                                    val.as_ans_id,
                                                    item.as_que_id
                                                  )
                                                }
                                              />
                                            </Form.Group>
                                          </span>
                                          <span
                                            dangerouslySetInnerHTML={{
                                              __html: val.as_answer,
                                            }}
                                            // className="d-inline-block ml-1"
                                          ></span>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            </div>
                          ) : null;
                        })}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button
                      type="button"
                      // className="btnTyp5 talkBtntwo"
                      className={`btnTyp5 talkBtntwo  ${
                        this.state.start == 0 ? "disable" : ""
                      }`}
                      onClick={() => this.pageHandle("prev")}
                    >
                      PREVIOUS
                    </Button>
                  </div>

                  <div className="mt-4 text-right">
                    {this.state.end <= asstQaList.length ? (
                      <Button
                        type="button"
                        className="btnTyp5 talkBtntwo"
                        onClick={() => this.pageHandle("next")}
                      >
                        SAVE & NEXT
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="btnTyp5 talkBtntwo"
                        onClick={this.handleShow}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />

        {/* modal start */}
        {/* <Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button> */}

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="CreateAccount alertShow"
        >
          <Modal.Header>
            <Button type="button" onClick={this.handleClose} class="close">
              <Image src={CrossTwo} alt="alert" className="alertCross" />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-4">
              <Image src={Alerts} alt="alert" className="" />
            </div>
            <div className="fw600 fs28 mb-3">Alert!</div>
            <div className="col14 fs20 fw500 mb-4">
              Your entries are final and if you submit the test, your report
              will be generated and you can’t change them.
            </div>
            <Button
              type="button"
              className="btnTyp5"
              onClick={() => this.handleSubmit()}
            >
              OKAY
            </Button>
          </Modal.Body>
        </Modal>
        {/* modal end */}
      </div>
    );
  }
}

export default MentalhealthQa;
