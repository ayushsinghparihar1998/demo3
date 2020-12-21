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
import Checkgreen from "../../assets/images/checkgreen.svg";
import Yellowstar from "../../assets/images/stars.png";
import Ritikaimg from "../../assets/images/Ritika.png";
import Samyukthaimg from "../../assets/images/Samyuktha.png";
import Shrishtiimg from "../../assets/images/Shrishti.png";
import {
  Button,
  NavDropdown,
  Table,
  Container,
  Row,
  Col,
  Image,
  Form,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import moment from "moment";

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
import Editicon from "../../assets/images/edit_icon.svg";
// import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import ELPViewApiService from "../../common/services/apiService";

import { result, stubFalse } from "lodash";
import { getLocalStorage, range } from "../../common/helpers/Utils";

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
      paymentList: [],
      pageno: 1,
      records: 10,
      totalCount: "",

      count: 10,
      offset: 1,
      block_type: 0,
      review_type: 0,
      name: "",
      status: "",
      keyword: "",
      keywordArray: [
        { name: "Active", value: 1, flag: true },
        { name: "Inactive", value: 4, flag: true },
      ],
      catArray: [
        { name: "Eat", value: 5, flag: true },
        { name: "Luv", value: 2, flag: true },
        { name: "Pray", value: 3, flag: true },
      ],
      category: "'Pray','luv','eat'",
    };
  }
  componentDidMount() {
    // this.getListnerListing("", "listner", 1);
    this.getCustomerListing("", "user", 1);
  }

  getPager(total) {
    let startPage = this.state.startPage;
    let endPage = this.state.endPage;
    let totalPage = Math.ceil(total / this.state.records);
    console.log("totalPage", totalPage);
    let pageno = this.state.pageno;

    if (totalPage <= 5) {
      startPage = 1;
      endPage = totalPage;
    } else {
      if (pageno <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (pageno + 1 >= totalPage) {
        startPage = totalPage - 4;
        endPage = totalPage;
      } else {
        startPage = pageno - 2;
        endPage = pageno + 2;
      }
    }
    let startIndex = (pageno - 1) * this.state.records;
    let endIndex = Math.min(startIndex + this.state.records - 1, totalPage - 1);

    // create an array of pages to ng-repeat in the pager control
    let pageArray;
    if (startPage == endPage) {
      console.log("startPage, endPage", startPage, endPage);

      pageArray = [1];
    } else {
      pageArray = range(startPage, endPage);
      console.log("startPage, endPage", startPage, endPage);
    }
    this.setState({
      // records: this.state.records,
      totalPage: totalPage,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pageArray: pageArray,
    });
  }

  // change page

  onSearch() {
    this.getProffListing(
      this.state.pageno,
      this.state.count,
      this.state.name,
      this.state.status,
      this.state.keyword,
      this.state.category
    );
  }
  onChangePage(page) {
    console.log(page);
    console.log(this.state.pageno);
    this.setState({
      pageno: page,
    });
    if (page == this.state.pageno) {
    } else {
      if (this.state.pageType == "blockList") {
        console.log(page, "page");
        this.getBlockuserListing(page, this.state.count, this.state.block_type);
      } else if (this.state.pageType == "reviewList") {
        this.getReviewListing(page, this.state.count, this.state.review_type);
      } else if (this.state.pageType == "ratingList") {
        this.getRatinguserListing(
          page,
          this.state.count,
          this.state.review_type
        );
      } else if (this.state.pageType == "paymentList") {
        this.getPaymentListHandler(page, this.state.count);
      } else if (this.state.pageType == "proffList") {
        this.getProffListing(
          page,
          this.state.count,
          this.state.name,
          this.state.status,
          this.state.keyword,
          this.state.category
        );
      } else {
      }
    }
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
    let userStatus = status == "1" ? 0 : 1;
    let chkUserProfile = this.state.activeProfile;
    let data = { userid: uid, u_status: userStatus };
    this.props.actionAdminChangeUserStatus(data).then((result) => {
      if (result && result.status === 200) {
        if (chkUserProfile === "user") {
          this.getCustomerListing(e, "user", pageNumber);
          // } else if (chkUserProfile === "professional") {
          //   this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        } else {
          this.getProffListing(
            this.state.pageno,
            this.state.count,
            this.state.name,
            this.state.status,
            this.state.keyword,
            this.state.category
          );
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
          // } else if (chkUserProfile === "professional") {
          //   this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        } else {
          this.getProffListing(
            this.state.pageno,
            this.state.count,
            this.state.name,
            this.state.status,
            this.state.keyword,
            this.state.category
          );
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

  handleOpenConformation = () => {
    this.setState({
      deleteConformationModal: true,
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
          // } else if (chkUserProfile === "professional") {
          //   this.getProfessionalListing(e, "professional", pageNumber);
        } else if (chkUserProfile === "listner") {
          this.getListnerListing(e, "listner", pageNumber);
        } else {
          this.getProffListing();
        }
      }
    });
  };

  handleSearch = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  };
  handleCheckSearch = (e, type) => {
    let { name, value, checked } = e.target;
    console.log(name, value, checked);
    let keywordArray = this.state.keywordArray;
    let catArray = this.state.catArray;
    if (type == "cat") {
      var index = catArray.findIndex((el) => el.value == value);
      catArray[index].flag = checked;
    } else {
      var index = keywordArray.findIndex((el) => el.value == value);
      keywordArray[index].flag = checked;
    }
    this.setState(
      {
        keywordArray,
        catArray,
      },
      () => {
        console.log(this.state.keywordArray);
        console.log(this.state.catArray);
      }
    );
  };
  searchSubmit = () => {
    console.log("this.state.name", this.state.name);
    console.log("this.state.keyword", this.state.keyword);
    console.log("this.state.status", this.state.status);
    console.log("this.state.category", this.state.category);
    let catval = [];
    this.state.catArray.map((cat) => {
      if (cat.flag == true) {
        catval.push("'" + cat.name + "'");
      }
    });
    let statusval = 0;
    this.state.keywordArray.map((cat) => {
      if (cat.flag == true) {
        statusval = statusval + cat.value;
      }
    });
    console.log("this.state.category", catval.join(","));
    console.log("this.state.category", statusval);
    this.setState({
      status: statusval > 4 ? "" : statusval,
      category: catval.join(","),
    });
    this.getProffListing(
      this.state.offset,
      this.state.count,
      this.state.name,
      statusval > 4 ? "" : statusval,
      this.state.keyword,
      catval.join(",")
    );
  };
  getProffListing = (offset, count, name, status, keyword, category) => {
    console.log(
      "count, offset, name, status, keyword, category",
      count,
      offset,
      name,
      status,
      keyword,
      category
    );
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }
    let data = {
      count: count,
      offset: offset,
      name: name,
      status: status,
      keyword: keyword,
      category: category,
    };
    console.log(data);

    ELPViewApiService("superadminprofessionallisting", data).then((result) => {
      console.log("result", result);
      let proffList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        proffList =
          result && result.data && result.data.data
            ? result.data.data.listing
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "proffList",
          proffList,
          totalRecordCount,
          count,
          offset,
          name,
          status,
          keyword,
          category,
          activeProfile: "professional",
        },
        () => {
          this.getPager(this.state.totalRecordCount);
          console.log("ProffList", this.state.proffList);
        }
      );
    });
  };
  getBlockuserListing = (offset, count, block_type) => {
    // 0:Processing,1:Accept,2:Reject
    // offset - page no
    // count - perpage item
    console.log(count, offset, block_type);
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }

    let data = {
      count: count,
      offset: offset,
      block_type: block_type,
    };
    console.log(data);
    if (block_type == 0) {
      this.setState({
        key: "request",
      });
    }
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
      this.setState(
        {
          pageType: "blockList",
          blockList,
          totalRecordCount,
          count,
          offset,
          block_type,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    });
  };
  getReviewListing = (offset, count, review_type) => {
    let data = {
      count: count,
      offset: offset,
      review_type: review_type,
    };
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }
    if (review_type == 0) {
      this.setState({
        key: "request",
      });
    }
    ELPViewApiService("getReviewListing", data).then((result) => {
      console.log("result", result);
      let reviewList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        reviewList =
          result && result.data && result.data.data
            ? result.data.data.review_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "reviewList",
          reviewList,
          totalRecordCount,
          count: count,
          offset: offset,
          review_type: review_type,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    });
  };
  getRatinguserListing = (offset, count, review_type) => {
    // 0:Processing,1:Accept,2:Reject
    // offset - page no
    // count - perpage item
    console.log(count, offset, review_type);
    let data = {
      count: count,
      offset: offset,
      rating_type: review_type,
    };
    console.log(data);
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }
    if (review_type == 0) {
      this.setState({
        key: "request",
      });
    }
    ELPViewApiService("getRatingdetails", data).then((result) => {
      console.log("result", result);
      let ratingList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        ratingList =
          result && result.data && result.data.data
            ? result.data.data.rating_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "ratingList",
          ratingList,
          totalRecordCount,
          count,
          offset,
          review_type,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
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
        this.getReviewListing(
          this.state.offset,
          this.state.count,
          this.state.review_type
        );
      }
    });
  };
  changeStatusRating = (ur_id, ur_status) => {
    let data = {
      ur_id,
      ur_status,
    };
    ELPViewApiService("changestatusrating", data).then((result) => {
      console.log("result", result);

      if (result && result.status === 200) {
        this.getRatinguserListing(
          this.state.offset,

          this.state.count,
          this.state.review_type
        );
      }
    });
  };
  blockUserStatus = (userid, status) => {
    let data = {
      br_id: userid,
      br_status: status,
    };
    ELPViewApiService("blockUserStatusSuperAdmin", data).then((result) => {
      console.log("result", result);

      if (result && result.status === 200) {
        this.getBlockuserListing(
          this.state.offset,

          this.state.count,
          this.state.block_type
        );
      }
    });
  };
  onChangeTab(key, type) {
    if (key === "request") {
      type == "block"
        ? this.getBlockuserListing(1, 10, 0)
        : type == "rating"
        ? this.getRatinguserListing(1, 10, 0)
        : this.getReviewListing(1, 10, 0);
      this.setState({
        key: "request",
      });
    } else if (key === "reject") {
      type == "block"
        ? this.getBlockuserListing(1, 10, 2)
        : type == "rating"
        ? this.getRatinguserListing(1, 10, 2)
        : this.getReviewListing(1, 10, 2);
      this.setState({
        key: "reject",
      });
    } else {
      this.setState({
        key: "completed",
      });
      type == "block"
        ? this.getBlockuserListing(1, 10, 1)
        : type == "rating"
        ? this.getRatinguserListing(1, 10, 1)
        : this.getReviewListing(1, 10, 1);
    }
  }

  getPaymentListHandler = async (offset, count) => {
    try {
      let result = await ELPViewApiService("getAdminPaymentDetail", {
        count: count,
        offset: offset,
      });
      console.log(result);
      let paymentList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        paymentList =
          result && result.data && result.data.data
            ? result.data.data.payment_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "paymentList",
          paymentList,
          totalRecordCount,
          count: count,
          offset: offset,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  getRatingName = (ratingCount) => {
    let text = null;
    if (ratingCount == 1) {
      text = "Very Bad!";
    } else if (ratingCount == 2) {
      text = "Bad!";
    } else if (ratingCount == 3) {
      text = "Good!";
    } else if (ratingCount == 4) {
      text = "Very Good!";
    } else if (ratingCount == 5) {
      text = "Excellent!";
    }
    return text;
  };

  changepath = (path) => {
    this.props.history.push(path);
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
    let ratingActveClass =
      this.state.pageType == "ratingList"
        ? "position-relative active"
        : "position-relative";
    let paymentActveClass =
      this.state.pageType == "paymentList"
        ? "position-relative active"
        : "position-relative";
    let proffActveClass =
      this.state.pageType == "proffList"
        ? "position-relative active"
        : "position-relative";
    let profileListing = this.state.profileListing;
    let profileName = this.state.userProfileName;
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
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={proffActveClass}
                        onClick={(e) => {
                          this.getProffListing(
                            1,
                            10,
                            "",
                            "",
                            "",
                            "'Pray','Luv','Eat'"
                          );
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
                          this.getBlockuserListing(1, 10, 0);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />
                          REPORT REQUESTS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={reviewActveClass}
                        onClick={(e) => {
                          this.getReviewListing(1, 10, 0);
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
                        className={paymentActveClass}
                        onClick={(e) => {
                          this.getPaymentListHandler(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          PAYMENT LIST
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={ratingActveClass}
                        onClick={(e) => {
                          this.getRatinguserListing(1, 10, 0);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          RATING REQUESTS
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
                                  <div className="col3 fw500 fs18 pb-1">
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
                                      checked={
                                        item.u_status == "1" ? true : false
                                      }
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
                      <Tabs
                        defaultActiveKey="request"
                        activeKey={this.state.key}
                        onSelect={(key) => this.onChangeTab(key, "block")}
                      >
                        <Tab eventKey="request" title="Requested">
                          <div className="requests">
                            {this.state.blockList &&
                              this.state.blockList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.br_comment}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>

                                      <div className="mt-3">
                                        <Button
                                          className="btnTyp9 approve mr-4"
                                          onClick={() =>
                                            this.blockUserStatus(item.br_id, 1)
                                          }
                                        >
                                          APPROVE
                                        </Button>
                                        <Button
                                          className="btnTyp9 reject"
                                          onClick={() =>
                                            this.blockUserStatus(item.br_id, 2)
                                          }
                                        >
                                          REJECT
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="completed" title="COMPLETED">
                          <div className="requests">
                            {this.state.blockList &&
                              this.state.blockList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.br_comment}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="reject" title="REJECTED">
                          <div className="requests">
                            {this.state.blockList &&
                              this.state.blockList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.br_comment}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Col>
              ) : this.state.pageType == "reviewList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs
                        activeKey={this.state.key}
                        defaultActiveKey="request"
                        onSelect={(key) => this.onChangeTab(key, "review")}
                      >
                        <Tab eventKey="request" title="Requested">
                          <div className="requests">
                            {this.state.reviewList &&
                              this.state.reviewList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {/* {console.log(item)} */}
                                            {moment(item.rv_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.rv_text}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>

                                      <div className="mt-3">
                                        <Button
                                          className="btnTyp9 approve mr-4"
                                          onClick={() =>
                                            this.changeStatusReview(
                                              item.rv_id,
                                              1
                                            )
                                          }
                                        >
                                          APPROVE
                                        </Button>
                                        <Button
                                          className="btnTyp9 reject"
                                          onClick={() =>
                                            this.changeStatusReview(
                                              item.rv_id,
                                              2
                                            )
                                          }
                                        >
                                          REJECT
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="completed" title="COMPLETED">
                          <div className="requests">
                            {this.state.reviewList &&
                              this.state.reviewList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.rv_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.rv_text}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="reject" title="REJECTED">
                          <div className="requests">
                            {this.state.reviewList &&
                              this.state.reviewList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.rv_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="col28 fs14 fw400 pt-1">
                                        {item.rv_text}{" "}
                                        {/* <span className="col40 fw500 pointer">
                                          Read more...
                                        </span> */}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Col>
              ) : this.state.pageType == "paymentList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="table_paymentlayout">
                    <Table bordered>
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.paymentList.map((elem) => {
                          return (
                            <tr>
                              <td>{elem.pr_email || "-"}</td>
                              <td>{elem.pr_txamount || "-"}</td>
                              <td>
                                <Button className="btnTyp9 reject color1">
                                  {elem.pr_status.split("_")[1] || "-"}
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              ) : this.state.pageType == "proffList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search">
                    <Row className="mb-5">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          Professional listing
                        </div>
                        <div className="fs16 col14 fw300">
                          Lorem Ipsum is simply dummy and typesetting industry.
                        </div>
                      </Col>
                      <Col md={4}>  
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath("/professionalSignup")
                            }
                          >
                            create professional
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <div className="fs16 col1 mb-4">Search Professional</div>
                    <Form className="p_form">
                      <Row>
                        <Col md="6">
                          <Form.Group controlId="formBasicTexts" className="mb-4"> 
                            <Form.Control
                              type="text"
                              placeholder="Search name"
                              className="inputTyp2 inputpProcess"
                              name="name"
                              value={this.state.name}
                              onChange={(e) => this.handleSearch(e)}
                            />
                          </Form.Group>
                        </Col>
                        <Col md="6">
                          <Form.Group controlId="formBasickeyword" className="mb-4">
                            <Form.Control
                              type="text"
                              placeholder="Search keyword"
                              className="inputTyp2 inputpProcess"
                              name="keyword"
                              value={this.state.keyword}
                              onChange={(e) => this.handleSearch(e)}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <Form.Group
                            controlId="formBasicCheckbox2"
                            className="row mb-4 statusCat"
                          >
                            <span className="fs16 fw500 col10 pl-3 pt-1 pr-2">Status</span> 
                            {this.state.keywordArray.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className="checkone checkboxTyp1 "
                                  label={item.name}
                                  id={item.value}
                                  name={item.name}
                                  value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(e, "keyword")
                                  }
                                  handleCheck={item.flag}
                                  value={item.value}
                                  checked={item.flag == true}
                                  // onChange={(e) => this.handleCheck(e)}
                                />
                              );
                            })}

                            {/* 4 : inactive
1 : active
"" : all */}
                          </Form.Group>
                        </Col>

                        <Col md="6">  
                          <Form.Group
                            controlId="formBasicCheckbox4"
                            className="row mb-4 statusCat"
                          >
                            <span className="fs16 fw500 col10 pl-3 pt-1 pr-2">Category</span>
                            {this.state.catArray.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className="checkone checkboxTyp1 "
                                  label={item.name}
                                  id={item.value}
                                  name={item.name}
                                  value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(e, "cat")
                                  }
                                  handleCheck={item.flag}
                                  value={item.value}
                                  checked={item.flag == true}
                                  // onChange={(e) => this.handleCheck(e)}
                                />
                              );
                            })} 

                          </Form.Group>
                        </Col>

                        <Col md="4" className="mt-2">                 
                          <Button
                            variant="primary process_btn"
                            type="button"
                            onClick={() => this.searchSubmit()}
                          >
                            search
                          </Button>
                        </Col>

                      </Row>

                      <div className="checkCategory">
                        <Form.Group
                          controlId="formBasicCheckbox1"
                          className="row"
                        >
                          {/*         <Form.Check
                            type="checkbox"
                            className="checkone"
                            label="Eat"
                            name="Eat"
                            // handleCheck={this.state.Eat}
                            onChange={(e) => this.handleCheck(e)}
                          />
                          <Form.Check
                            type="checkbox"
                            className="checktwo"
                            label="Luv"
                            name="Luv"
                            // handleCheck={this.state.Luv}
                            onChange={(e) => this.handleCheck(e)}
                          />
                          <Form.Check
                            type="checkbox"
                            className="checkthree active"
                            label="Pray"
                            name="Pray"
                            // handleCheck={this.state.Pray}
                            onChange={(e) => this.handleCheck(e)}
                          /> */}
                        </Form.Group>
                      </div>
                    </Form>{" "}
                  </div>
                  {this.state.proffList &&
                    this.state.proffList.map((item, index) => {
                      // return(
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image src={Requestuser} alt="" className="r50" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                      {item.u_name}
                                    </div>

                                    <div className="d-flex ml-auto">
                                      <span className="pr-3 fs14 col47 fw400">
                                        {item.u_status == "1" ? "Active" : "Inactive"}
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
                                          checked={
                                            item.u_status == "1" ? true : false
                                          }
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Editicon}
                                          alt=""
                                          onClick={() =>
                                            this.props.history.push(
                                              `/professionalModify/${item.id}`
                                            )
                                          }
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

                                    {/* <div className="d-flex ml-auto">
                                      <span className="pr-3 fs14 col47 fw400">
                                        {item.u_status == 1
                                          ? "Active"
                                          : "Inactive"}
                                      </span>
                                      <span className="pr-3 disabled">
                                        <Form.Check
                                          type="switch"
                                          id="custom-switch5"
                                          label=""
                                          checked={
                                            item.u_status == 0 ? false : true
                                          }
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Editicon}
                                          alt=""
                                          onClick={() =>
                                            this.props.history.push(
                                              `/professionalModify/${item.id}`
                                            )
                                          }
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon}
                                          alt=""
                                          onClick={() =>
                                            this.handleOpenConformation()
                                          }
                                        />
                                      </span>
                                    </div>*/}
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Age:</strong> {item.u_age}
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Work Experince:</strong>{" "}
                                    {item.u_work_experience}
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Languages:</strong> {item.u_lang}
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1 e_detai">
                                    <strong className="m_w25">
                                      Education:{" "}
                                    </strong>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.u_education,
                                      }}
                                    ></span>
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1 e_detai">
                                    <strong>Biogropy: </strong>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.u_bio,
                                      }}
                                    ></span>
                                    <span>
                                      <a
                                        className="col10"
                                        onClick={() =>
                                          this.changepath(
                                            "/professionalDetails/admin/" +
                                              item.id
                                          )
                                        }
                                      >
                                        {"  "}Read more...
                                      </a>
                                    </span>
                                  </div>

                                  <div className="eat_category">
                                    {item.cat_child_array &&
                                      item.cat_child_array.map((val) => {
                                        return (
                                          <span
                                            className={
                                              val == "Eat"
                                                ? "eatcat"
                                                : val == "Luv"
                                                ? "luvcat"
                                                : "praycat"
                                            }
                                          >
                                            {val}
                                          </span>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );

                      // );
                    })}
                </Col>
              ) : (
                <Col md={8} lg={9} className="pl-1">
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs
                        activeKey={this.state.key}
                        defaultActiveKey="request"
                        onSelect={(key) => this.onChangeTab(key, "rating")}
                      >
                        <Tab eventKey="request" title="Requested">
                          <div className="requests">
                            {this.state.ratingList &&
                              this.state.ratingList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2 w-100">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="mb-4">
                                        <span className="mr-4">
                                          {[
                                            ...Array(
                                              item.ur_rating
                                                ? +item.ur_rating
                                                : 4
                                            ),
                                          ].map((e, i) => (
                                            <Image
                                              src={Yellowstar}
                                              alt=""
                                              className="mr-1"
                                            />
                                          ))}
                                        </span>
                                        <span
                                          className="fs18 fw600"
                                          style={{
                                            color:
                                              item.ur_rating < 3
                                                ? "red"
                                                : "green",
                                          }}
                                        >
                                          {this.getRatingName(item.ur_rating)}{" "}
                                          {/* <Image src={Checkgreen} alt="" /> */}
                                        </span>
                                      </div>
                                      <div className="mt-3">
                                        <Button
                                          className="btnTyp9 approve mr-4"
                                          onClick={() =>
                                            this.changeStatusRating(
                                              item.ur_id,
                                              1
                                            )
                                          }
                                        >
                                          APPROVE
                                        </Button>
                                        <Button
                                          className="btnTyp9 reject"
                                          onClick={() =>
                                            this.changeStatusRating(
                                              item.ur_id,
                                              2
                                            )
                                          }
                                        >
                                          REJECT
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}{" "}
                          </div>
                        </Tab>
                        <Tab eventKey="completed" title="COMPLETED">
                          <div className="requests">
                            {this.state.ratingList &&
                              this.state.ratingList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2 w-100">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="mb-4">
                                        <span className="mr-4">
                                          {[
                                            ...Array(
                                              item.ur_rating
                                                ? +item.ur_rating
                                                : 4
                                            ),
                                          ].map((e, i) => (
                                            <Image
                                              src={Yellowstar}
                                              alt=""
                                              className="mr-1"
                                            />
                                          ))}
                                        </span>
                                        <span className="col82 fs18 fw600">
                                          Good!{" "}
                                          <Image src={Checkgreen} alt="" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>

                        <Tab eventKey="reject" title="REJECTED">
                          <div className="requests">
                            {this.state.ratingList &&
                              this.state.ratingList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.u_image ? item.u_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2 w-100">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.fromname}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {moment(item.br_datetime).format(
                                              "dddd MMM Do YYYY HH:mm"
                                            )}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-3">
                                          Review for - {item.toname}
                                        </div>
                                      </div>

                                      <div className="mb-4">
                                        <span className="mr-4">
                                          {[
                                            ...Array(
                                              item.ur_rating
                                                ? +item.ur_rating
                                                : 4
                                            ),
                                          ].map((e, i) => (
                                            <Image
                                              src={Yellowstar}
                                              alt=""
                                              className="mr-1"
                                            />
                                          ))}
                                        </span>
                                        <span className="col82 fs18 fw600">
                                          Good!{" "}
                                          <Image src={Checkgreen} alt="" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}{" "}
                          </div>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Col>
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
          {this.state.pageType == "userlist" &&
          totalRecord &&
          totalRecord > customPagination.paginationPageSize ? (
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
          ) : this.state.totalPage > 0 ? (
            <div className="paginationWrapper">
              <nav aria-label="Page navigation">
                <ul class="pagination pg-blue deliva-pagination justify-content-end">
                  <li class="page-item">
                    <button
                      class="page-link rotate-180 control-btn"
                      aria-label="Previous"
                      onClick={() => this.onChangePage(this.state.pageno - 1)}
                      disabled={
                        this.state.pageno == 1 || this.state.totalPage == 0
                      }
                    >
                      <span className="icon-prev"></span>
                      <span
                        //className="prevNext"
                        className={`sr-only ${
                          this.state.pageno == 1 || this.state.totalPage == 0
                            ? ""
                            : "active"
                        }`}
                      >
                        Previous
                      </span>
                    </button>
                  </li>

                  {this.state.totalPage > 0 &&
                    this.state.pageArray.map((page, ind) => {
                      return (
                        <li class="page-item">
                          <a
                            className={`page-link ${
                              this.state.pageno == page ? "active" : ""
                            }`}
                            onClick={() => this.onChangePage(page)}
                          >
                            {page}
                          </a>
                        </li>
                      );
                    })}

                  <li class="page-item">
                    <button
                      class="page-link control-btn"
                      aria-label="Next"
                      onClick={() => this.onChangePage(this.state.pageno + 1)}
                      disabled={
                        this.state.pageno == this.state.totalPage ||
                        this.state.totalPage == 0
                      }
                    >
                      <span className="icon-next"></span>
                      <span
                        className={`sr-only ${
                          this.state.pageno == this.state.totalPage ||
                          this.state.totalPage == 0
                            ? ""
                            : "active"
                        }`}
                      >
                        Next
                      </span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <span></span>
            // <div className="recordfound">No Record Found</div>
          )}
          {/* {this.state.totalRecordCount == 0 ? (
          ) : (
            ""
          )} */}
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
