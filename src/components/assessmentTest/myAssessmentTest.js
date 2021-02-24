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
  Table,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import Visibilitys from "../../assets/images/visibilitys.png";
import ArrowDownload from "../../assets/images/arrow_download.png";
import ELPViewApiService from "../../common/services/apiService";
import moment from "moment";

class MyAssessmentTest extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      asstDetail: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props.match.params.id);
    console.log(this.props);
    this.getuserassessment_resultlist();
  };

  getuserassessment_resultlist = () => {
    let data = {
      count: 100,
      offset: 1,
    };

    ELPViewApiService("getuserassessment_resultlist", data).then((result) => {
      console.log("result", result);
      let asstDetail = [];

      if (result && result.data.status === "success") {
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
    });
  };

  render() {
    const { asstDetail } = this.state;

    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout myAssesstestMain pt-4 pb-5">
          <Container>
            <div className="chatsearch w-100">
              <div className="myAssesstest">
                <div className="col8 fw600 fs28 mt-4 mb-5 text-center">
                  MY ASSESSMENT TESTs
                </div>
                <Row>
                  <Col lg={12}>
                    <div className="mainTables">
                      <Table bordered size="lg">
                        <thead>
                          {/* ar_datetime: "2021-02-19 12:41:38"
ar_no_que: "2"
ar_score: "15"
as_title: "march test"
assessment_category: Array(2)
0:
as_cat_id: "1"
as_test_cat_name: "Eat"
__proto__: Object
1: {as_cat_id: "2", as_test_cat_name: "Luv"}
length: 2
__proto__: Array(0)
u_name: "Super Admin" */}
                          <tr>
                            <th>Date</th>
                            <th>Test Name</th>
                            <th>Category</th>
                            <th>Scores</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {asstDetail &&
                            asstDetail.map((item, index) => {
                              return (
                                <tr>
                                  {/* <td>28 Jan, 2021</td> */}

                                  <td>
                                    {moment(item.ar_datetime).format(
                                      " Do MMM YYYY"
                                    )}
                                  </td>
                                  <td>{item.as_title}</td>
                                  <td>
                                    {item.assessment_category.map((val) => {
                                      return (
                                        <span
                                          className={
                                            val.as_test_cat_name == "Eat"
                                              ? "eat"
                                              : val.as_test_cat_name == "Luv"
                                              ? "luv"
                                              : val.as_test_cat_name == "Pray"
                                              ? "pray"
                                              : "holistic" 
                                          }
                                        >
                                          {val.as_test_cat_name}
                                        </span>
                                      );
                                    })}
                                  </td>
                                  <td>{item.ar_score}</td>
                                  <td>
                                    <span>
                                      <Image
                                        src={Visibilitys}
                                        className="pointer"
                                          onClick = {() => this.props.history.push("/viewAssessmentTest/"+item.ar_id+'/member')}
                                      />
                                    </span>
                                    <span className="pl-3">
                                      <Image
                                        src={ArrowDownload}
                                        className="pointer"
                                      />
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
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

export default MyAssessmentTest;
