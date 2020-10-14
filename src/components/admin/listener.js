import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {
  actionGetListnerListing,
  actionGetCustomerListing,
  actionGetProfessionalListing,
  actionadminUserDelete,
  actionAdminChangeUserStatus,
  actionAdminUserDeleteReason,
} from "../../common/redux/actions";
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
import Pagination from "react-js-pagination";
import customPagination from "../../common/helpers/paginationConstants";
import NavBar from "../core/navAdmin";
import Footer from "../core/footer";
import Requestuser from "../../assets/images/pro_img.svg";
import Deleteusers from "../../assets/images/delete_users.svg";
import Menuicon from "../../assets/images/menu_icon.svg";
import Menuiconblue from "../../assets/images/menu_icon_blue.svg";
import Deleteicon from "../../assets/images/delete_icon.svg";
import Blueicons from "../../assets/images/blue_cross.svg";
// import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import ELPViewApiService from "../../common/services/apiService";

import { result, stubFalse } from "lodash";

class Adminlistener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProfile: "listner",
      profileListing: [],
      deleteConformationModal: false,
      profileId: "",
      pageNumber: customPagination.paginationPageNumber,
      totalRecord: 0,
      userProfileName: "",
      reasonForDelete: "",
      pageType: "",
    };
  }
  componentDidMount() {
    this.getListnerListing("", "listner", 1);
  }

  handlePageChange = (newPageNumber) => {
    let chkUserProfile = this.state.activeProfile;
    this.setState({ pageNumber: newPageNumber }, () => {
      if (chkUserProfile === "user") {
        this.getCustomerListing("", "user", newPageNumber);
      } else if (chkUserProfile === "professional") {
        this.getProfessionalListing("", "professional", newPageNumber);
      } else if (chkUserProfile === "listner") {
        this.getListnerListing("", "listner", newPageNumber);
      }
    });
  };

  /** I am calling seprate API for all user bcz of will be change some feature in future according to server side */

  getListnerListing = (e, activaClass, pageNumber) => {
    let chkUserProfile = this.state.activeProfile;
    this.setState({
      activeProfile: activaClass,
      pageNumber: pageNumber,
      pageType: "userlist",
    });
    let profileListing = [];
    let data = {
      count: customPagination.paginationPageSize,
      offset: pageNumber,
    };
    this.props.actionGetListnerListing(data).then((result) => {
      if (result && result.status === 200) {
        profileListing =
          result && result.data && result.data.data
            ? result.data.data.listing
            : [];
        let totalRecord =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
        this.setState({
          profileListing: profileListing,
          totalRecord: totalRecord,
        });
      }
    });
  };
  getProfessionalListing = (e, activaClass, pageNumber) => {
    let chkUserProfile = this.state.activeProfile;
    this.setState({
      activeProfile: activaClass,
      pageNumber: pageNumber,
      pageType: "userlist",
    });
    let profileListing = [];
    let data = {
      count: customPagination.paginationPageSize,
      offset: pageNumber,
    };
    this.props.actionGetProfessionalListing(data).then((result) => {
      if (result && result.status === 200) {
        profileListing =
          result && result.data && result.data.data
            ? result.data.data.listing
            : [];
        let totalRecord =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
        this.setState({
          profileListing: profileListing,
          totalRecord: totalRecord,
        });
      }
    });
  };
  getCustomerListing = (e, activaClass, pageNumber) => {
    this.setState({
      activeProfile: activaClass,
      pageNumber: pageNumber,
      pageType: "userlist",
    });
    let profileListing = [];
    let data = {
      count: customPagination.paginationPageSize,
      offset: pageNumber,
    };
    this.props.actionGetCustomerListing(data).then((result) => {
      if (result && result.status === 200) {
        profileListing =
          result && result.data && result.data.data
            ? result.data.data.listing
            : [];
        let totalRecord =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
        this.setState({
          profileListing: profileListing,
          totalRecord: totalRecord,
        });
      }
    });
  };

  adminChangeUserStatus = (e, uid, status) => {
    let pageNumber = this.state.pageNumber;
    let userStatus = status ? 0 : 1;
    let chkUserProfile = this.state.activeProfile;
    let data = { userid: uid, u_status: userStatus };
    this.props.actionAdminChangeUserStatus(data).then((result) => {
      if (result && result.status === 200) {
        if (chkUserProfile === "user") {
          this.getCustomerListing(e, "user", pageNumber);
        } else if (chkUserProfile === "professional") {
          this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        }
      }
    });
  };

  adminUserDelete = (e, uid, status) => {
    let pageNumber = this.state.pageNumber;
    let chkUserProfile = this.state.activeProfile;
    let data = { userid: uid, u_status: status };
    this.props.actionadminUserDelete(data).then((result) => {
      this.setState({ deleteConformationModal: false });
      if (result && result.status === 200) {
        if (chkUserProfile === "user") {
          this.getCustomerListing(e, "user", pageNumber);
        } else if (chkUserProfile === "professional") {
          this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        }
      }
    });
  };

  userProfile = (e, uid) => {
    this.props.history.push({
      pathname: "/myprofile",
      state: { userId: uid },
    });
  };

  adminUserDeleteConfirm = (e, uid, name) => {
    this.setState({
      deleteConformationModal: true,
      profileId: uid,
      userProfileName: name,
    });
  };

  handleCloseConformation = () => {
    this.setState({
      deleteConformationModal: false,
      profileId: "",
    });
  };

  handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    this.setState({
      reasonForDelete: value,
    });
  }

  adminUserDeleteReason = (e, uid, status) => {
    let pageNumber = this.state.pageNumber;
    let reason = this.state.reasonForDelete;
    let chkUserProfile = this.state.activeProfile;
    let data = { userid: uid, ui_status: status, ui_comment: reason };
    this.props.actionAdminUserDeleteReason(data).then((result) => {
      this.setState({ deleteConformationModal: false });
      if (result && result.status === 200) {
        if (chkUserProfile === "user") {
          this.getCustomerListing(e, "user", pageNumber);
        } else if (chkUserProfile === "professional") {
          this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        }
      }
    });
  };

  getBlockuserListing = (e, count, offset) => {
    let data = {
      count: count,
      offset: offset,
      block_type: 2,
    };
    ELPViewApiService("getBlockuserListing", data).then((result) => {
      console.log("result", result);
      let blockList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        blockList =
          result && result.data && result.data.data
            ? result.data.data.block_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState({
        pageType: "blockList",
        blockList,
        totalRecordCount,
      });
    });
  };

  getReviewListing = (e, count, offset) => {
    this.setState({
      pageType: "reviewList",
    });
    let data = {
      count: count,
      offset: offset,
      review_type: 2,
    };
    ELPViewApiService("getReviewListing", data).then((result) => {
      console.log("result", result);
      let reviewList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        reviewList =
          result && result.data && result.data.data
            ? result.data.data.block_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState({
        pageType: "reviewList",
        reviewList,
        totalRecordCount,
      });
    });
  };
  
  changeStatusReview = (rv_id, rv_status) => {
    let data = {
      rv_id,
      rv_status,
    };
    ELPViewApiService("changeStatusReview", data).then((result) => {
      console.log("result", result);

      if (result && result.status === 200) {
        this.getReviewListing();
      }
    });
  };
  blockUserStatus = (userid, status) => {
    let data = {
      userid,
      status,
    };
    ELPViewApiService("blockUserStatus", data).then((result) => {
      console.log("result", result);

      if (result && result.status === 200) {
        this.getReviewListing();
      }
    });
  };

  render() {
    let totalRecord = this.state.totalRecord;
    let userActveClass =
      this.state.pageType == "userlist" && this.state.activeProfile == "user"
        ? "position-relative active"
        : "position-relative";
    let professnalActveClass =
      this.state.pageType == "userlist" &&
      this.state.activeProfile == "professional"
        ? "position-relative active"
        : "position-relative";
    let listnerActveClass =
      this.state.pageType == "userlist" && this.state.activeProfile == "listner"
        ? "position-relative active"
        : "position-relative";
    let blockActveClass =
      this.state.pageType == "blockList"
        ? "position-relative active"
        : "position-relative";
    let reviewActveClass =
      this.state.pageType == "reviewList"
        ? "position-relative active"
        : "position-relative";
    let profileListing = this.state.profileListing;
    let profileName = this.state.userProfileName;
    return (
      <div className="page__wrapper innerpage">
        <div className="main_baner">
          <NavBar {...this.props} />
        </div>
        <div className="profile_layout pt-4 pb-5">
          <Container>
            <Row>
              <Col md={4} lg={3} className="pr-1">
                <div className="adminsidebar">
                  <div className="inner_area">
                    <div className="chat-bg fs600 fs17 col18 pl-3 pointer">
                      Links
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={userActveClass}
                        onClick={(e) => {
                          this.getCustomerListing(e, "user", 1);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> USER
                          LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom" onCl>
                      <div
                        className={professnalActveClass}
                        onClick={(e) => {
                          this.getProfessionalListing(e, "professional", 1);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          PROFESSIONAL LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={listnerActveClass}
                        onClick={(e) => {
                          this.getListnerListing(e, "listner", 1);
                        }}
                      >
                        <div className="fs14 col23 fw500">
                          <Image src={Menuiconblue} alt="" className="mr-1" />{" "}
                          LISTENER LISTING
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={blockActveClass}
                        onClick={(e) => {
                          this.getBlockuserListing(e);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          REVIEW REQUESTS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={reviewActveClass}
                        onClick={(e) => {
                          this.getReviewListing(e);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> BLOCK
                          REQUESTS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          LISTENER Q&A
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {this.state.pageType == "userlist" ? (
                <Col md={8} lg={9} className="pl-1">
                  {profileListing &&
                    profileListing.length > 0 &&
                    profileListing.map((item, index) => {
                      let categryLen = item.uc_cat_name
                        ? item.uc_cat_name.length
                        : 0;
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={item.u_image ? item.u_image : Requestuser}
                                alt=""
                                className="r50"
                              />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div
                                  onClick={(e) => {
                                    this.userProfile(e, item.id);
                                  }}
                                >
                                  <div className="col1 fw500 fs18 pb-1">
                                    {item.u_name ? item.u_name : ""}
                                  </div>
                                  <div className="col40 fs15 fw400 pb-1">
                                    Category:{" "}
                                    {item.uc_cat_name &&
                                      item.uc_cat_name.map((cat, idx) => {
                                        return (
                                          <span>
                                            {" "}
                                            {categryLen - 1 > idx
                                              ? cat + ", "
                                              : cat}
                                          </span>
                                        );
                                      })}
                                  </div>
                                  <div className="fs14 fw400 col54 pb-1">
                                    {item.email ? item.email : ""}
                                  </div>
                                </div>
                                <div className="mt-auto mb-auto d-flex">
                                  <span className="pr-3 fs14 col47 fw400">
                                    {item.u_status ? "Active" : "Inactive"}
                                  </span>
                                  <span className="pr-3 disabled">
                                    <Form.Check
                                      type="switch"
                                      id={"custom-switch" + index}
                                      name={"status" + index}
                                      label=""
                                      onClick={(e) => {
                                        this.adminChangeUserStatus(
                                          e,
                                          item.id,
                                          item.u_status
                                        );
                                      }}
                                      checked={item.u_status ? true : false}
                                    />
                                  </span>
                                  <span
                                    onClick={(e) => {
                                      this.adminUserDeleteConfirm(
                                        e,
                                        item.id,
                                        item.u_name
                                      );
                                    }}
                                  >
                                    <Image src={Deleteicon} alt="" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Col>
              ) : this.state.pageType == "blockList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs defaultActiveKey="request">
                        <Tab eventKey="request" title="Requested">
                          <div className="requests">
                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Mic Hegrid
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>

                                <div className="mt-3">
                                  <Button className="btnTyp9 approve mr-4">
                                    APPROVE
                                  </Button>
                                  <Button className="btnTyp9 reject">
                                    REJECT
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Venesa Josef
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>

                                <div className="mt-3">
                                  <Button className="btnTyp9 approve mr-4">
                                    APPROVE
                                  </Button>
                                  <Button className="btnTyp9 reject">
                                    REJECT
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Miranda jackson
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>

                                <div className="mt-3">
                                  <Button className="btnTyp9 approve mr-4">
                                    APPROVE
                                  </Button>
                                  <Button className="btnTyp9 reject">
                                    REJECT
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Naina William
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>

                                <div className="mt-3">
                                  <Button className="btnTyp9 approve mr-4">
                                    APPROVE
                                  </Button>
                                  <Button className="btnTyp9 reject">
                                    REJECT
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-5">
                              <Button className="btnTyp9 shows">
                                show more
                              </Button>
                            </div>
                          </div>
                        </Tab>
                        <Tab eventKey="completed" title="COMPLETED">
                          <div className="requests">
                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Mic Hegrid
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Venesa Josef
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Miranda jackson
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Naina William
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-5">
                              <Button className="btnTyp9 shows">
                                show more
                              </Button>
                            </div>
                          </div>
                        </Tab>

                        <Tab eventKey="reject" title="REJECTED">
                          <div className="requests">
                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Mic Hegrid
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Venesa Josef
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestuser}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      John Wade-Hampton
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Miranda jackson
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="d-flex pt-4 pb-4 text-left border-grays">
                              <div className="mr-4">
                                <Image
                                  src={Requestusertwo}
                                  alt=""
                                  className="r50"
                                />
                              </div>
                              <div className="pl-2">
                                <div className="d-flex justify-content-between">
                                  <div>
                                    <div className="col1 fw500 fs18 pb-1">
                                      William Jack
                                    </div>
                                    <div className="fs14 fw400 col54 pb-1">
                                      Thu Apr 30, 2020 1.12 pm
                                    </div>
                                  </div>
                                  <div className="col81 fs15 fs400 pr-3">
                                    Review for - Naina William
                                  </div>
                                </div>

                                <div className="col28 fs14 fw400 pt-1">
                                  I enjoy working with individuals of all
                                  capacities as I view the role of therapist as
                                  one in which you help the client learn to cope
                                  with the pressures of daily life.{" "}
                                  <span className="col40 fw500 pointer">
                                    Read more...
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="text-center mt-5">
                              <Button className="btnTyp9 shows">
                                show more
                              </Button>
                            </div>
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Col>
              ) : (
                ""
              )}
            </Row>
          </Container>

          <Modal
            show={this.state.deleteConformationModal}
            onHide={this.handleCloseConformation}
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
                  onClick={this.handleCloseConformation}
                />
                <div className="text-center fs24 mt-4 col64 mb-4">
                  Are you sure want to delete <br /> {profileName}?{" "}
                </div>

                <div className="text-center mb-5">
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={(event) =>
                      this.adminUserDelete(event, this.state.profileId, 2)
                    }
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-default text-uppercase sm-btn"
                    onClick={this.handleCloseConformation}
                  >
                    No
                  </button>
                </div>
                <div className="fs18 fw500 col10 pointer write_txt mb-4">
                  WRITE A REASON
                </div>

                <Form.Group
                  controlId="exampleForm.ControlTextarea1"
                  className="mb-4"
                >
                  <Form.Control
                    as="textarea"
                    className="textTypes1"
                    name="reason"
                    onChange={(event) => {
                      this.handleChange(event);
                    }}
                  />
                </Form.Group>

                <button
                  className="btn btn-success bt-submit text-uppercase"
                  onClick={(event) =>
                    this.adminUserDeleteReason(event, this.state.profileId, 2)
                  }
                >
                  SUBMIT & DELETE
                </button>
              </div>
            </Modal.Body>
          </Modal>
          {totalRecord && totalRecord > customPagination.paginationPageSize ? (
            <div className="paginationWrapper">
              <Pagination
                activePage={this.state.pageNumber}
                itemsCountPerPage={customPagination.itemsCountPerPage}
                totalItemsCount={totalRecord}
                pageRangeDisplayed={customPagination.pageRangeDisplayed}
                onChange={this.handlePageChange.bind(this)}
                firstPageText={"<<"}
                lastPageText={">>"}
                prevPageText={"<"}
                nextPageText={">"}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(null, {
  actionGetListnerListing,
  actionGetCustomerListing,
  actionGetProfessionalListing,
  actionadminUserDelete,
  actionAdminChangeUserStatus,
  actionAdminUserDeleteReason,
})(Adminlistener);
