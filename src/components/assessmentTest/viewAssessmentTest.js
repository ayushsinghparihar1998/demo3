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
// import NavBar from "../core/nav";
import Nav from "../core/navAdmin";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Requestuserthree from "../../assets/images/pro_img3.svg";
import Aflag from "../../assets/images/australia_flag.svg";
import Iflag from "../../assets/images/india_flag.svg";
import Messagefour from "../../assets/images/msg4.svg";
import Melida from "../../assets/images/melida.svg";
import Searches from "../../assets/images/searches.svg";
import Starblank from "../../assets/images/starempty.svg";
import Starfill from "../../assets/images/starfill.svg";
import Scores from "../../assets/images/scores.png";
import Subscribes from "../../assets/images/subscribes.svg";
import Searchbtn from "../../assets/images/search_btn.png";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Popover } from "antd";
import ELPViewApiService from "../../common/services/apiService";
import Crossbtn from "../../assets/images/blue_cross.svg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 45;

class ViewAssessmentTest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      asstDetail: [],
      workData: "",
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.type);
    console.log(this.props);
    this.getAssessuser_testListbyid();
    this.exportassessmentresult_pdf();
  };

  getAssessuser_testListbyid = () => {
    let data = {
      ar_id: +this.props.match.params.id,
    };

    let api =
      this.props.match.params.type == "member"
        ? "getAssessuser_testListbyid"
        : "superadminget_assessusertestlistbyid";
    ELPViewApiService(api, data).then((result) => {
      console.log("result", result);
      let asstDetail = [];

      if (result && result.data.status === "success") {
        asstDetail =
          result && result.data && result.data.data ? result.data.data[0] : [];
      }
      this.setState(
        {
          asstDetail,
        },
        () => {
          console.log("asstDetail", this.state.asstDetail);
        }
      );
    });
  };

  exportassessmentresult_pdf = () => {
    let data = {
      ar_id: +this.props.match.params.id,
    };

    let api = "exportassessmentresult_pdf";

    ELPViewApiService(api, data).then((result) => {
      console.log("result", result);
      this.setState({
        workData: result.data.data,
      });
    });
  };

  render() {
    const { asstDetail } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          {this.props.match.params.type == "member" ? (
            <NavBar {...this.props} />
          ) : (
            <Nav {...this.props} />
          )}
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <div className="chatsearch w-100">
              <div className="search-listing">
                <Row>
                  <Col lg={9} md={10} className="m-auto">
                    <div className="scoreDetails">
                      <div className="scoreImg">
                        <div className="scoreCounts">
                          <CircularProgressbar
                            value={
                              asstDetail && asstDetail.ar_score
                                ? asstDetail && asstDetail.ar_score
                                : 100
                            }
                            text={`${
                              asstDetail && asstDetail.ar_score
                                ? asstDetail && asstDetail.ar_score
                                : 100
                            }`}
                          />
                        </div>{" "}
                      </div>
                      <div className="fs22 fw400 col14">Scores</div>
                      <div className="fw400 col14 fs28 mt-3">
                        {asstDetail && asstDetail.as_title}
                      </div>
                      {/* <div className="fw400 col14 fs28 mt-3 disorders">
                        {asstDetail && asstDetail.as_title}
                      </div> */}
                      <div className="scoreBorders">
                        <div>
                          <div className="fs16 fw400 col14 mb-3">
                            No. of Questions
                          </div>
                          {/* ar_datetime: "2021-02-23 20:56:14"
ar_id: "13"
ar_no_attend_que: "3"
ar_no_que: "7"
ar_score: "8"
ar_skip_que: "4"
ar_status: "1"
ar_suggesstion: "There is no suggesstion for this test marks"
ar_test_id: "33"
ar_u_id: "549" */}
                          <div className="fs18 fw500 col14">
                            {asstDetail && asstDetail.ar_no_que}
                          </div>
                        </div>
                        <div>
                          <div className="fs16 fw400 col14 mb-3">Answered</div>
                          <div className="fs18 fw500 col14">
                            {asstDetail && asstDetail.ar_no_attend_que}
                          </div>
                        </div>
                        <div>
                          <div className="fs16 fw400 col14 mb-3">
                            Not Answered
                          </div>
                          <div className="fs18 fw500 col14">
                            {asstDetail && asstDetail.ar_skip_que}
                          </div>
                        </div>
                      </div>
                      <div className="scoreSuggetion">
                        <div className="fs18 col8 fw500 mb-2">SUGGESTION</div>
                        <div
                          className="col8 fs15 fw300"
                          dangerouslySetInnerHTML={{
                            __html: asstDetail && asstDetail.ar_suggesstion,
                          }}
                        >
                          {/* {asstDetail && asstDetail.ar_suggesstion} */}
                        </div>
                      </div>
                    </div>

                    <div className="createPdf mt-5">
                      <a
                        href={this.state.workData}
                        target="_blank"
                        rel="btnTyp5"
                      >
                        generate pdf
                      </a>
                      {/* <Button
                        className="btnTyp5"
                        onClick={() => this.exportassessmentresult_pdf()}
                      >
                        generate pdf
                      </Button> */}
                      
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ViewAssessmentTest;
