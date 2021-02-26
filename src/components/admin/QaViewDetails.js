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
import EditNew from "../../assets/images/editViews.png";

import constant from "../../constant";
class QaViewDetails extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.superadminassessmenttest_listdetail();
  };

  superadminassessmenttest_listdetail = (id) => {
    let data = {
      as_id: this.props.match.params.id,
    };

    ELPViewApiService("superadminassessmenttest_listdetail", data).then(
      (result) => {
        console.log("result", result);
        let asstDetail = [];

        if (result && result.status === 200) {
          asstDetail =
            result && result.data && result.data.data
              ? result.data.data[0]
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
                <div className="professor_search mentalViewDetail">
                  <Row className="mb-1">
                    <Col md={8}>
                      <div className="fs22 fw600 col10">
                        {asstDetail && asstDetail.as_title}
                      </div>
                      <div className="fw300 fs16 col14">
                        {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                      </div>
                    </Col>
                    <Col md={4}>
                      <div className="text-right pro_cbtn">
                        <Button
                          type="button"
                          className="btnType22"
                          onClick={() =>
                            this.props.history.push(
                              "/createAssessmentTest/" + asstDetail.as_id
                            )
                          }
                        >
                          <Image src={EditNew} className="mr-2" /> Edit Details
                        </Button>
                      </div>
                    </Col>
                  </Row>

                  <div className="mentalLayout">
                    <Row>
                      <Col md={2}>
                        <div className="mentalList">
                          <div className="col11 fw400 fs13 mb-2">Test Type</div>
                          <div className="col11 fw500 fs14">
                            {asstDetail && asstDetail.as_type == 2
                              ? "FREE"
                              : "PAID"}
                          </div>
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="mentalList">
                          <div className="col11 fw400 fs13 mb-2">Category</div>
                          <div className="col11 fw500 fs14">
                            {asstDetail &&
                              asstDetail.assessment_category.map((item, i) => {
                                return i <
                                  asstDetail.assessment_category.length - 1
                                  ? item.as_test_cat_name + ","
                                  : item.as_test_cat_name + "";
                              })}
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        <div className="mentalList">
                          <div className="col11 fw400 fs12 mb-2">
                            No. of Questions
                          </div>
                          <div className="col11 fw500 fs14">
                            {asstDetail && asstDetail.total_que_count}
                          </div>
                        </div>
                      </Col>
                      <Col md={2}>
                        {asstDetail && asstDetail.as_test_price ? (
                          <div className="mentalList">
                            <div className="col11 fw400 fs13 mb-2">
                              Total Price
                            </div>
                            <div className="col11 fw500 fs14">
                              {asstDetail && asstDetail.as_test_price}/-
                            </div>
                          </div>
                        ) : (
                          <div className="mentalList">
                            <div className="col11 fw400 fs13 mb-2">
                              Total Price
                            </div>
                            <div className="col11 fw500 fs14">
                              NA
                            </div>
                          </div>
                        )}
                      </Col>
                      <Col md={2}>
                        <div className="mentalList">
                          <div className="col11 fw400 fs13 mb-2">
                            Total Marks
                          </div>
                          <div className="col11 fw500 fs14">
                            {asstDetail && asstDetail.as_total_marks}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="position-relative">
                    {asstDetail &&
                      asstDetail.assessment_suggestion.map((val) => {
                        return (
                          <div className="mentalListingTwo">
                            <div className="col11 fs15 fw400 mb-1">
                              Suggestion{" "}
                              <span className="col29">
                                (Range: {val.as_min_range}-{val.as_max_range})
                              </span>
                            </div>
                            <div
                              className="col14 fw500 fs17"
                              dangerouslySetInnerHTML={{
                                __html: val.as_suggestion,
                              }}
                            ></div>
                          </div>
                        );
                        //                         // as_datetime: "2021-02-22 15:49:37"
                        // as_id: "53"
                        // as_max_range: "13"
                        // as_min_range: "0"
                        // as_status: "1"
                        // as_suggestion: "<p>abc</p>"
                        // as_test_id: "22"
                      })}
                    <div className="text-center mt-5">
                      <Button
                        type="submit"
                        className="btnTyp7 br40"
                        onClick={() =>
                          this.props.history.push(
                            "/viewQa/" + this.props.match.params.id
                          )
                        }
                      >
                        View Question & Answers
                      </Button>
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

export default QaViewDetails;
