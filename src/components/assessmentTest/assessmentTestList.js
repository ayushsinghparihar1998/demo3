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
} from "react-bootstrap";
import NavBar from "../core/nav";
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
import Subscribes from "../../assets/images/subscribes.svg";
import BlogProcessOne from "../../assets/images/p_blogs.svg";
import BlogProcessTwo from "../../assets/images/p_blogs2.svg";
import BlogProcessThree from "../../assets/images/p_blogs3.svg";
import BlogProcessFour from "../../assets/images/p_blogs4.svg";
import BlogProcessFive from "../../assets/images/blog4.png";
import BlogProcessSix from "../../assets/images/blog5.svg";
import BlogProcessSeven from "../../assets/images/blog6.png";
import BlogProcessNine from "../../assets/images/blogs9.png";
import VideoIcon from "../../assets/images/videoIcon.png";

import blogclock from "../../assets/images/blogclock.png";
import { connect } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { Popover } from "antd";
import ELPRxApiService from "../../common/services/apiService";
import moment from "moment";

class AssessmentTestListTwo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      asstList: [],
      tabVal: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      tabVal: this.props.match.params.name,
    });
    console.log(this.props);
    if (this.props.match.params.name == "EAT") {
      this.getassessmentlist_bycategory("'Eat'", this.props.match.params.name);
    } else if (this.props.match.params.name == "LUV") {
      this.getassessmentlist_bycategory("'Luv'", this.props.match.params.name);
    } else if (this.props.match.params.name == "PRAY") {
      this.getassessmentlist_bycategory("'Pray'", this.props.match.params.name);
    } else {
      this.getassessmentlist_bycategory(
        "'Holistic'",
        this.props.match.params.name
      );
    }
  };

  getassessmentlist_bycategory = (val, tab) => {
    this.setState({
      tabVal: tab,
      asstList: [],
    });
    ELPRxApiService("getassessmentlist_bycategory", {
      offset: 1,
      count: 200,
      assess_category: val,
    })
      .then((result) => {
        console.log("result", result);
        let asstList = [];

        if (result && result.status === 200) {
          console.log("asstDetail", result.data.data);
          console.log("asstDetail", result.data.data.assessment_listing);

          asstList =
            result && result.data && result.data.data
              ? result.data.data.assessment_listing
              : [];
        }

        this.setState(
          {
            asstList,
          },
          () => {
            console.log("asstDetail", this.state.asstList);
          }
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { asstList } = this.state;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4">
          <Container>
            <div className="processBlog assessBlog pb-5 w-100">
              <div className="text-center fs28 fw500 col64 mb-2">
                ASSESSMENT TESTS
              </div>
              <div className="blogMain ListsUI">
                <Tabs
                  onSelect={(k) =>
                    k === "EAT"
                      ? this.getassessmentlist_bycategory("'Eat'", k)
                      : k === "LUV"
                      ? this.getassessmentlist_bycategory("'Luv'", k)
                      : k === "PRAY"
                      ? this.getassessmentlist_bycategory("'Pray'", k)
                      : k === "HOLISTIC"
                      ? this.getassessmentlist_bycategory("'Holistic'", k)
                      : ""
                  }
                  activeKey={this.state.tabVal}
                  id="uncontrolled-tab-example"
                >
                  <Tab value="EAT" eventKey="EAT" title="EAT">
                    <div className="featuredTab">
                      <Row>
                        {asstList &&
                          asstList.map((item) => {
                            return (
                              <Col md={4} sm={6}>
                                <div className="blogOneMain bg-Color1">
                                  <Button
                                    type="button"
                                    className="blogBtns btnColor1"
                                  >
                                    {item.as_type == 2 ? "FREE" : "PAID"}
                                  </Button>
                                  <div className="fs20 fw500 col64 text-uppercase mt-2">
                                    {item.as_title}
                                  </div>
                                  <div className="fw400 fs16 mb-2">
                                    {item.total_que_count} Questions
                                  </div>
                                  <div className="fs16 col64 mb-2">
                                    <small>RS.</small>
                                    {item.as_test_price}/-
                                  </div>
                                  <Button
                                    type="button"
                                    className="PlanBtns PlanColor1"
                                  >
                                    start now
                                  </Button>
                                </div>
                              </Col>
                            );
                          })}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="LUV" title="LUV">
                    <div className="featuredTab">
                      <Row>
                        {asstList &&
                          asstList.map((item) => {
                            return (
                              <Col md={4} sm={6}>
                                <div className="blogOneMain bg-Color1">
                                  <Button
                                    type="button"
                                    className="blogBtns btnColor1"
                                  >
                                    {item.as_type == 2 ? "FREE" : "PAID"}
                                  </Button>
                                  <div className="fs20 fw500 col64 text-uppercase mt-2">
                                    {item.as_title}
                                  </div>
                                  <div className="fw400 fs16 mb-2">
                                    {item.total_que_count} Questions
                                  </div>
                                  <div className="fs16 col64 mb-2">
                                    <small>RS.</small>
                                    {item.as_test_price}/-
                                  </div>
                                  <Button
                                    type="button"
                                    className="PlanBtns PlanColor1"
                                  >
                                    start now
                                  </Button>
                                </div>
                              </Col>
                            );
                          })}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="PRAY" title="PRAY">
                    <div className="featuredTab">
                      <Row>
                        {asstList &&
                          asstList.map((item) => {
                            return (
                              <Col md={4} sm={6}>
                                <div className="blogOneMain bg-Color1">
                                  <Button
                                    type="button"
                                    className="blogBtns btnColor1"
                                  >
                                    {item.as_type == 2 ? "FREE" : "PAID"}
                                  </Button>
                                  <div className="fs20 fw500 col64 text-uppercase mt-2">
                                    {item.as_title}
                                  </div>
                                  <div className="fw400 fs16 mb-2">
                                    {item.total_que_count} Questions
                                  </div>
                                  <div className="fs16 col64 mb-2">
                                    <small>RS.</small>
                                    {item.as_test_price}/-
                                  </div>
                                  <Button
                                    type="button"
                                    className="PlanBtns PlanColor1"
                                  >
                                    start now
                                  </Button>
                                </div>
                              </Col>
                            );
                          })}
                      </Row>
                    </div>
                  </Tab>

                  <Tab eventKey="HOLISTIC" title="HOLISTIC">
                    <div className="featuredTab">
                      <Row>
                        {asstList &&
                          asstList.map((item) => {
                            return (
                              <Col md={4} sm={6}>
                                <div className="blogOneMain bg-Color1">
                                  <Button
                                    type="button"
                                    className="blogBtns btnColor1"
                                  >
                                    {item.as_type == 2 ? "FREE" : "PAID"}
                                  </Button>
                                  <div className="fs20 fw500 col64 text-uppercase mt-2">
                                    {item.as_title}
                                  </div>
                                  <div className="fw400 fs16 mb-2">
                                    {item.total_que_count} Questions
                                  </div>
                                  <div className="fs16 col64 mb-2">
                                    <small>RS.</small>
                                    {item.as_test_price}/-
                                  </div>
                                  <Button
                                    type="button"
                                    className="PlanBtns PlanColor1"
                                  >
                                    start now
                                  </Button>
                                </div>
                              </Col>
                            );
                          })}
                      </Row>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}
export default AssessmentTestListTwo;
