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
  Table,
} from "react-bootstrap";
import NavBar from "../core/nav";
import Footer from "../core/footer";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Editicon from "../../assets/images/edit_icon.svg";
import ELPViewApiService from "../../common/services/apiService";

class CorpMemberListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: "",
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      count: 10,
      offset: 1,
    };
  }
  // getDomainListing = (offset, count) => {
  //   console.log("count, offset", count, offset);
  //   if (offset == 1) {
  //     this.setState({
  //       pageno: 1,
  //     });
  //   }
  //   let data = {
  //     count: count,
  //     offset: offset,
  //   };
  //   console.log(data);

  //   ELPViewApiService("superadminprofessionallisting", data).then((result) => {
  //     console.log("result", result);
  //     let proffList = [];
  //     let totalRecordCount = 0;
  //     if (result && result.status === 200) {
  //       proffList =
  //         result && result.data && result.data.data
  //           ? result.data.data.listing
  //           : [];
  //       totalRecordCount =
  //         result && result.data && result.data.data
  //           ? result.data.data.totalRecordCount
  //           : 0;
  //     }
  //     this.setState(
  //       {
  //         proffList,
  //         count,
  //         offset,
  //       },
  //       () => {
  //         this.getPager(this.state.totalRecordCount);
  //         console.log("ProffList", this.state.proffList);
  //       }
  //     );
  //   });
  // };
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
                      Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col28 fw500"> USER LISTING</div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col28 fw500">
                          {" "}
                          PROFESSIONAL LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="">
                        <div className="fs14 col23 fw500">
                          {" "}
                          LISTENER LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500"> LISTENER Q&A</div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500"> CATEGORY</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={9} className="pl-1">
                <div className="corporateMember d_detail">
                  <div className="domainSave">
                    <div>
                      <div className="fs22 col10 mb-1">Domain listing</div>
                      <div className="fs15 fw400 col14 mb-4">
                        Lorem Ipsum is simply dummy and typesetting industry.
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button
                        variant="primary"
                        type="submit"
                        className="btnTyp5"
                      >
                        Save
                      </Button>
                    </div>
                    <div></div>
                  </div>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th>Domain</th>
                        <th>No. of Employees</th>
                        <th>Total Audio/Video (hrs)</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>adobe.com</td>
                        <td>50</td>
                        <td>12 hrs</td>
                        <td>
                          <span className="pr-3 fs14 col47 fw400">
                            {/* {item.u_status == 1 ? "Active" : "Inactive"} */}
                            active
                          </span>
                          <span className="pr-3 disabled">
                            <Form.Check
                              type="switch"
                              id="custom-switch5"
                              label=""
                              //   checked={item.u_status == 0 ? false : true}
                            />
                          </span>
                          <span>
                            <Image
                              src={Editicon}
                              alt=""
                              onClick={() =>
                                this.props.history.push(
                                  //   `/adddomain/${item.id}`
                                  `/adddomain`
                                )
                              }
                            />
                          </span>
                          <span>
                            <Image
                              src={Deleteicon}
                              alt=""
                              //   onClick={() => this.handleOpenConformation()}
                            />
                          </span>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
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

export default CorpMemberListing;
