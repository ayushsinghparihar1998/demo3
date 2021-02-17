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
import DatePicker from "react-datepicker";
import Validator from "validator";
import Deleteicon from "../../assets/images/delete_icon.svg";
import blogclock from "../../assets/images/blogclock.png";
import BlogProcessFive from "../../assets/images/blog4.png";
import Editicon from "../../assets/images/edit_icon.svg";
import Suser from "../../assets/images/s_images.png";
import UserChats from "../../assets/images/user_chat5.svg";
import "react-datepicker/dist/react-datepicker.css";
// import moment from "moment";
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
import Blueicons from "../../assets/images/blue_cross.svg";
// import Requestuser from "../../assets/images/pro_img.svg";
import Requestusertwo from "../../assets/images/pro_img2.svg";
import ELPViewApiService from "../../common/services/apiService";

import { result, stubFalse } from "lodash";
import {
  getLocalStorage,
  range,
  setLocalStorage,
} from "../../common/helpers/Utils";

class Adminlistener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProfile: "listner",
      profileListing: [],
      deleteConformationModal: false,
      deleteObjConformationModal: false,
      deleteAllConformationModal: false,
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
      deleteModalType: "admin",

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
      errors: {},
      memberObj: {
        email: "",
        password: "",
      },
      blogCategory: [],
      pressBlogCategory: [],
      planList: [],
      plan_type: 1,
    };
  }
  componentDidMount() {
    this.getBlogCat("blogCategory", "getblogcategory");
    this.getBlogCat("pressBlogCategory", "getpressblogcategory");
    console.log("get", getLocalStorage("tabToOpen"));

    if (getLocalStorage("tabToOpen") && getLocalStorage("tabToOpen") == "user")
      this.getCustomerListing("", "user", 1);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "listner"
    )
      // this.getCustomerListing("", "listner", 1);
      this.getListnerListing("", "listner", 1);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "getProffListing"
    )
      this.getProffListing(1, 10, "", "", "", "'Pray','Luv','Eat'");
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "getDomainListing"
    )
      this.getDomainListing(1, 10);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "getblogListHandler"
    )
      this.getblogListHandler(1, 10);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "getpressblogListHandler"
    )
      this.getpressblogListHandler(1, 10);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "superadminget_planlist"
    )
      this.superadminget_planlist(1, 10, 1);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "superadminkits_list"
    )
      this.superadminkits_list(1, 10);
    else if (
      getLocalStorage("tabToOpen") &&
      getLocalStorage("tabToOpen") == "superadminvlogs_list"
    )
      this.superadminvlogs_list(1, 10, 1);
    else {
      this.getCustomerListing("", "user", 1);
    }
  }
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
  getDomainListing = (offset, count) => {
    console.log("count, offset", count, offset);
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }
    let data = {
      count: count,
      offset: offset,
    };
    console.log(data);

    ELPViewApiService("superadmingetcorporatedomain", data).then((result) => {
      console.log("result", result);
      let domainList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        domainList =
          result && result.data && result.data.data
            ? result.data.data.domain_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          domainList,
          totalRecordCount,
          pageType: "domainList",
          count,
          offset,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
          console.log("domainList", this.state.domainList);
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

  getSessionListing = (offset, count, cs_status) => {
    let data = {
      count: count,
      offset: offset,
      cs_status: cs_status,
    };
    if (offset == 1) {
      this.setState({
        pageno: 1,
      });
    }
    if (cs_status == 0) {
      this.setState({
        key: "request",
      });
    }
    ELPViewApiService("superadmingetcorporateappointmentlist", data).then(
      (result) => {
        console.log("result", result);
        let sessionList = [];
        let totalRecordCount = 0;
        if (result && result.status === 200) {
          sessionList =
            result && result.data && result.data.data
              ? result.data.data.appointment_list
              : [];
          totalRecordCount =
            result && result.data && result.data.data
              ? result.data.data.totalRecordCount
              : 0;
        }
        this.setState(
          {
            pageType: "sessionList",
            sessionList,
            totalRecordCount,
            count: count,
            offset: offset,
            // review_type: review_type,
          },
          () => {
            this.getPager(this.state.totalRecordCount);
            // console.log(new Date(this.state.sessionList[0].cs_date));
          }
        );
      }
    );
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
  getblogListHandler = async (offset, count) => {
    try {
      let catval = [];
      this.state.blogCategory.map((cat) => {
        if (cat.bc_status == "1") {
          catval.push("'" + cat.bc_name + "'");
        }
      });
      console.log("catVal catVal");
      let result = await ELPViewApiService("superadmin_getblog", {
        count: count,
        offset: offset,
        category: catval.join(","),
      });
      console.log(result);
      let blogList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        blogList =
          result && result.data && result.data.data
            ? result.data.data.blog_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "blogList",
          blogList,
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
  getpressblogListHandler = async (offset, count) => {
    try {
      let catval = [];
      this.state.pressBlogCategory.map((cat) => {
        if (cat.pbc_status == "1") {
          catval.push("'" + cat.pbc_name + "'");
        }
      });
      let result = await ELPViewApiService("superadmin_get_press_blog", {
        count: count,
        offset: offset,
        category: catval.join(","),
      });
      console.log(result);
      let pressblogList = [];
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        pressblogList =
          result && result.data && result.data.data
            ? result.data.data.press_blog_list
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "pressblogList",
          pressblogList,
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

  superadminget_planlist = async (offset, count, type) => {
    try {
      let planList = [];
      let result = await ELPViewApiService("superadminget_planlist", {
        count: count,
        offset: offset,
        plan_type: type,
      });
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        planList =
          result && result.data && result.data.data
            ? result.data.data.plan_listing
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "planList",
          planList,
          totalRecordCount,
          count: count,
          offset: offset,
          deleteObjType: "",
          plan_type: type,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  superadminkits_list = async (offset, count) => {
    try {
      let kitList = [];
      let result = await ELPViewApiService("superadminkits_list", {
        count: count,
        offset: offset,
      });
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        kitList =
          result && result.data && result.data.data
            ? result.data.data.kits_listing
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "kitList",
          kitList,
          totalRecordCount,
          count: count,
          offset: offset,
          deleteObjType: "",
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  superadminvlogs_list = async (offset, count, vl_type) => {
    try {
      let vlogsList = [];
      let result = await ELPViewApiService("superadminvlogs_list", {
        count: count,
        offset: offset,
        vl_type,
      });
      let totalRecordCount = 0;
      if (result && result.status === 200) {
        vlogsList =
          result && result.data && result.data.data
            ? result.data.data.vlogs_listing
            : [];
        totalRecordCount =
          result && result.data && result.data.data
            ? result.data.data.totalRecordCount
            : 0;
      }
      this.setState(
        {
          pageType: "vlogsList",
          vlogsList,
          totalRecordCount,
          count: count,
          offset: offset,
          deleteObjType: "",
          vl_type,
        },
        () => {
          this.getPager(this.state.totalRecordCount);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  getBlogCat = (name, api) => {
    let objBlog = [];
    console.log(name, api);
    // getpressblogcategory
    ELPViewApiService(api, {}).then((result) => {
      console.log(result.data.data);
      if (result && result.status === 200) {
        objBlog =
          result && result.data && result.data.data ? result.data.data : [];
      }
      this.setState(
        {
          [name]: objBlog,
        },
        () => {
          console.log(name, this.state[name]);
        }
      );
    });
  };
  changepath = (path, backresult) => {
    console.log(path);
    setLocalStorage("tabToOpen", backresult);
    this.props.history.push(path);
  };
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
      } else if (this.state.pageType == "blogList") {
        this.getBlockuserListing(page, this.state.count);
      } else if (this.state.pageType == "pressblogList") {
        this.getpressblogListHandler(page, this.state.count);
      } else if (this.state.pageType == "domainList") {
        this.getDomainListing(page, this.state.count);
      } else if (this.state.pageType == "planList") {
        this.superadminget_planlist(
          page,
          this.state.count,
          this.state.plan_type
        );
      } else if (this.state.pageType == "kitList") {
        this.superadminkits_list(page, this.state.count);
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
  userProfile = (e, uid, type) => {
    this.props.history.push({
      pathname: "/myprofile",
      state: { userId: uid },
    });
    console.log(type);
    setLocalStorage("tabToOpen", type);
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
  handleCloseAllConformation = () => {
    this.setState({
      deleteObjConformationModal: false,
    });
  };
  handleOpenAllConformation = (title, id, type) => {
    this.setState({
      deleteObjConformationModal: true,
      deleteObj: title,
      deleteObjId: id,
      deleteObjType: type,
    });
  };

  handleOpenConformation = (type, obj) => {
    this.setState({
      deleteModalType: type ? type : "admin",
      deleteUser: obj ? obj.cd_domain_name : "",
      deleteId: obj ? obj.cd_id : "",
      deleteConformationModal: true,
    });
  };
  handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value,
    });
  }
  handleChangeCorpMember(e) {
    const name = e.target.name;
    let value = e.target.value;
    let memberObj = this.state.memberObj;
    memberObj[name] = value.trim();
    this.setState({
      memberObj,
    });
  }
  handleSubmitCorpMember() {
    let memberObj = this.state.memberObj;
    let errors = this.state.errors;
    var reg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    // var test = reg.test(value.trim());
    errors.email =
      memberObj.email.length == 0
        ? "Please enter email id."
        : !Validator.isEmail(memberObj.email)
        ? "Please enter a valid email id."
        : "";
    errors.password =
      memberObj.password.length == 0
        ? "Please enter password."
        : !reg.test(memberObj.password.trim())
        ? "Please enter a valid password."
        : "";

    this.setState({
      errors,
    });
    if (errors.email.length == 0 && errors.password.length == 0) {
      console.log("submit");
      ELPViewApiService("superadmincorporatecustomerregister", memberObj)
        .then((result) => {
          // setLocalStorage("tabToOpen", "getDomainListing");

          if (result && result.data && result.data.status === "success") {
            let memberObj = {
              email: "",
              password: "",
            };
            this.setState({
              memberObj,
            });
            this.getDomainListing(this.state.pageno, this.state.count);
          } else {
            this.setState({
              showLoader: false,
            });
          }
        })
        .catch((error) => {
          console.log(error);
          this.setState({
            showLoader: false,
          });
        });
    }
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
  handleCheckSearch = (e, type, status) => {
    let { name, value, checked } = e.target;
    console.log(name, value, checked);
    let keywordArray = this.state.keywordArray;
    let blogCategory = this.state.blogCategory;
    let pressBlogCategory = this.state.pressBlogCategory;
    let catArray = this.state.catArray;
    if (type == "cat") {
      var index = catArray.findIndex((el) => el.value == value);
      catArray[index].flag = checked;
    } else if (type == "keyword") {
      var index = keywordArray.findIndex((el) => el.value == value);
      keywordArray[index].flag = checked;
    } else if (type == "blogCategory") {
      var index = blogCategory.findIndex((el) => el.bc_id == value);
      blogCategory[index].bc_status = status;
    } else {
      var index = pressBlogCategory.findIndex((el) => el.pbc_id == value);
      console.log("index", index);
      console.log("value", value);
      pressBlogCategory[index].pbc_status = status;
    }
    this.setState(
      {
        keywordArray,
        catArray,
        pressBlogCategory,
        blogCategory,
      },
      () => {
        console.log(this.state.keywordArray);
        console.log(this.state.catArray);
        console.log(this.state.pressBlogCategory);
        console.log(this.state.blogCategory);
        if (type == "blogCategory") {
          this.getblogListHandler(1, 10);
        } else if (type == "pressBlogCategory") {
          this.getpressblogListHandler(1, 10);
        }
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

  handleDate = (date) => {
    console.log("date", date);
    this.setState({
      date,
    });
    console.log(this.state.date);
  };

  modifyDomainContent = (item, id, api, status) => {
    let data = { cd_id: id ? id : item.cd_id, cd_status: status };
    ELPViewApiService(api, data).then((result) => {
      this.setState({ deleteConformationModal: false });
      if (result && result.status === 200) {
        this.getDomainListing(this.state.pageno, this.state.count);
      }
    });
  };

  modifyAllContent = (type, id, api, status) => {
    let data =
      type == "PLAN" || this.state.deleteObjType == "PLAN"
        ? {
            pl_id: id ? id : +this.state.deleteObjId,
            pl_status: status,
          }
        : type == "KIT" || this.state.deleteObjType == "KIT"
        ? {
            kt_id: id ? id : +this.state.deleteObjId,
            kt_status: status,
          }
        : type == "VLOGS" || this.state.deleteObjType == "VLOGS"
        ? {
            vl_id: id ? id : +this.state.deleteObjId,
            vl_status: status,
          }
        : "";

    let apiData =
      type == ""
        ? this.state.deleteObjType == "PLAN"
          ? "superadmindelete_planstatus"
          : this.state.deleteObjType == "KIT"
          ? "superadmindelete_kitsstatus"
          : this.state.deleteObjType == "VLOGS"
          ? "superadmindelete_vlogsstatus"
          : ""
        : api;
    ELPViewApiService(apiData, data).then((result) => {
      this.setState({ deleteObjConformationModal: false });
      if (result && result.status === 200) {
        setTimeout(() => {
          if (this.state.deleteObjType == "PLAN" || this.state.deleteObjType == "PLAN") {
            this.superadminget_planlist(
              this.state.pageno,
              this.state.count,
              this.state.plan_type
            );
          } else if (this.state.deleteObjType == "KIT" || this.state.deleteObjType == "KITS") {
            this.superadminkits_list(this.state.pageno, this.state.count);
          } else if (this.state.deleteObjType == "VLOGS" || this.state.deleteObjType == "VLOGS") {
            this.superadminvlogs_list(
              this.state.pageno,
              this.state.count,
              this.state.vl_type
            );
          }
        }, 100);
      }
    });
  };

  changeStatusBlog = (id, type) => {
    let databl = {
      bl_id: id,
      bl_status: "2",
    };
    let datapbl = {
      pbl_id: id,
      pbl_status: "2",
    };
    ELPViewApiService(
      type,
      type == "superadmin_change_press_blogstatus" ? datapbl : databl
    ).then((result) => {
      console.log("result", result);

      if (result && result.status === 200) {
        type == "superadmin_change_press_blogstatus"
          ? this.getpressblogListHandler(this.state.offset, this.state.count)
          : this.getblogListHandler(this.state.offset, this.state.count);
      }
    });
  };
  changeStatusSession = (cs_id, cs_status) => {
    let data = {
      cs_id: +cs_id,
      cs_status,
    };
    ELPViewApiService("superadminCorporateappointmentchangestatus", data).then(
      (result) => {
        console.log("result", result);

        if (result && result.status === 200) {
          this.getSessionListing(this.state.offset, this.state.count, 1);
        }
      }
    );
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
        : type == "session"
        ? this.getSessionListing(1, 10, 1)
        : this.getReviewListing(1, 10, 0);
      this.setState({
        key: "request",
      });
    } else if (key === "reject") {
      type == "block"
        ? this.getBlockuserListing(1, 10, 2)
        : type == "rating"
        ? this.getRatinguserListing(1, 10, 2)
        : type == "session"
        ? this.getSessionListing(1, 10, 3)
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
        : type == "session"
        ? this.getSessionListing(1, 10, 2)
        : this.getReviewListing(1, 10, 1);
    }
  }

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

  render() {
    const { errors, totalRecord, memberObj } = this.state;
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
    let sessionActveClass =
      this.state.pageType == "sessionList"
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
    let domainActveClass =
      this.state.pageType == "domainList"
        ? "position-relative active"
        : "position-relative";
    let addMemberActveClass =
      this.state.pageType == "addMember"
        ? "position-relative active"
        : "position-relative";
    let pressBlogActveClass =
      this.state.pageType == "pressblogList"
        ? "position-relative active"
        : "position-relative";
    let blogActveClass =
      this.state.pageType == "blogList"
        ? "position-relative active"
        : "position-relative";
    let planActveClass =
      this.state.pageType == "planList"
        ? "position-relative active"
        : "position-relative";
    let kitActveClass =
      this.state.pageType == "kitList"
        ? "position-relative active"
        : "position-relative";
    let qaActveClass =
      this.state.pageType == "qaList"
        ? "position-relative active"
        : "position-relative";
    let vlogsActveClass =
      this.state.pageType == "vlogsList"
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
                          <Image src={Menuicon} alt="" className="mr-1" /> USERS
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
                          PROFESSIONALS
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
                          LISTENERS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={domainActveClass}
                        onClick={(e) => {
                          this.getDomainListing(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />
                          DOMAIN LIST
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={addMemberActveClass}
                        onClick={(e) => {
                          this.setState({ pageType: "addMember" });
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />
                          ADD CORPORATE MEMBER
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
                        className={sessionActveClass}
                        onClick={(e) => {
                          this.getSessionListing(1, 10, 0);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          SESSION REQUESTS
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
                        className={pressBlogActveClass}
                        onClick={(e) => {
                          this.getpressblogListHandler(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />
                          PRESS BLOGS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={blogActveClass}
                        onClick={(e) => {
                          this.getblogListHandler(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> BLOGS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={planActveClass}
                        onClick={(e) => {
                          this.superadminget_planlist(1, 10, 1);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> SUBSCRIPTION PLAN 
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={kitActveClass}
                        onClick={(e) => {
                          this.superadminkits_list(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> ELNP
                          KITS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={vlogsActveClass}
                        onClick={(e) => {
                          this.superadminvlogs_list(1, 10, 1);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> ELNP
                          VLOGS
                        </div>
                      </div>
                    </div>
                    <div className="d-flex m-3 pb-3 border-bottom">
                      <div
                        className={qaActveClass}
                        onClick={(e) => {
                          this.superadminkits_list(1, 10);
                        }}
                      >
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" /> ELNP
                          QA
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
                        <div
                          onClick={() =>
                            this.changepath("/subscriptionDocument", "")
                          }
                          className="fs14 col28 fw500"
                        >
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          UPLOAD ELNP DOCUMENT
                        </div>
                      </div>
                    </div>
                    {/* <div className="d-flex m-3 pb-3 border-bottom">
                      <div className="position-relative">
                        <div className="fs14 col28 fw500">
                          <Image src={Menuicon} alt="" className="mr-1" />{" "}
                          LISTENER Q&A
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </Col>

              {this.state.pageType == "userlist" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">
                      List of{" "}
                      {this.state.activeProfile == "listner"
                        ? "Listeners"
                        : "Users"}
                    </div>
                  </div>
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
                                    this.userProfile(
                                      e,
                                      item.id,
                                      this.state.activeProfile
                                    );
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
                                    {item.u_status == "1"
                                      ? "Deactivate"
                                      : "Activate"}
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
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Report Requests</div>
                  </div>
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
              ) : this.state.pageType == "planList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search">
                    <Row className="mb-3">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          Subscription Plan
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                "/addSubscription/0",
                                "superadminget_planlist"
                              )
                            }
                          >
                            ADD plan
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Form className="p_form mb-4">
                      <Form.Group
                        as={Row}
                        className="justify-content-center customsRadio"
                      >
                        <Form.Check
                          type="radio"
                          id="plan_type1"
                          value={1}
                          name="plan_type"
                          onChange={() => this.superadminget_planlist(1, 10, 1)}
                          label="Daily"
                          className={`mr-5  ${
                            this.state.plan_type == 2 ? "" : "active"
                          }`}
                          checked={+this.state.plan_type == 1}
                        />

                        <Form.Check
                          type="radio"
                          id="plan_type2"
                          value={2}
                          name="plan_type"
                          onChange={() => this.superadminget_planlist(1, 10, 2)}
                          label="By Condition"
                          className={`mr-5  ${
                            this.state.plan_type == 1 ? "" : "active"
                          }`}
                          checked={+this.state.plan_type == 2}
                        />
                      </Form.Group>
                    </Form>
                  </div>

                  {/* pl_datetime: "2021-01-20 15:29:03"
pl_desc_details: "Silver plan to buy"
pl_discount_price: "2400"
pl_id: "4"
pl_price: "3000"
pl_save: "20"
pl_status: "1"
pl_title: "Platinum Plan new" */}
                  {this.state.planList &&
                    this.state.planList.map((item, index) => {
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1 cursor_d">
                                      {item.pl_title}
                                    </div>
                                  </div>

                                  <div className="fs15 fw500 col14 pb-1">
                                    <span className="priceone pr-1">
                                      Amount: Rs.
                                      <strong className="fw700">
                                        {item.pl_price}
                                      </strong>
                                    </span>{" "}
                                    |{/* Rs. {item.pl_discount_price} */}
                                    <span className="pricetwo pl-2">
                                      Offer:
                                      <strong className="fw700 pl-1">
                                        {item.pl_save}%
                                      </strong>
                                    </span>
                                  </div>
                                  <div className="fs15 col14 fw400">
                                    {item.pl_desc_details}{" "}
                                    {/* <a className="col40">Read more...</a> */}
                                  </div>
                                </div>

                                <div className="min-wi250">
                                  <div className="d-flex ml-auto justify-content-end">
                                    <span className="pr-3 fs14 col47 fw400">
                                      {item.pl_status == "2"
                                        ? "Deactivate"
                                        : "Activate"}
                                    </span>
                                    <span className="pr-3 disabled">
                                      <Form.Check
                                        type="switch"
                                        id={"custom-switch" + index}
                                        name={"status" + index}
                                        label=""
                                        onClick={(e) => {
                                          this.modifyAllContent(
                                            "PLAN",
                                            item.pl_id,
                                            "superadminchange_planstatus",
                                            item.pl_status == "1" ? "2" : "1"
                                          );
                                        }}
                                        checked={item.pl_status == "1"}
                                      />
                                    </span>
                                    <span>
                                      <Image
                                        onClick={() =>
                                          this.changepath(
                                            "/addSubscription/" + item.pl_id,
                                            "superadminget_planlist"
                                          )
                                        }
                                        src={Editicon}
                                        alt=""
                                      />
                                    </span>
                                    <span>
                                      <Image
                                        onClick={(e) => {
                                          this.handleOpenAllConformation(
                                            item.pl_title,
                                            item.pl_id,
                                            "PLAN"
                                          );
                                        }}
                                        src={Deleteicon}
                                        alt=""
                                      />
                                    </span>
                                  </div>
                                  <div className="eat_category">
                                    {item.plan_category.map((val) => {
                                      return (
                                        <span
                                          className={
                                            val.puc_cat_name == "Eat"
                                              ? "eatcat"
                                              : val.puc_cat_name == "Luv"
                                              ? "luvcat"
                                              : "praycat"
                                          }
                                        >
                                          {val.puc_cat_name}
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
                    })}
                </Col>
              ) : this.state.pageType == "reviewList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Review Requests</div>
                  </div>
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
              ) : this.state.pageType == "sessionList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Session Requests</div>
                  </div>
                  <div className="myprofile reviewrequest">
                    <div className="text-center user_tab">
                      <Tabs
                        activeKey={this.state.key}
                        defaultActiveKey="request"
                        onSelect={(key) => this.onChangeTab(key, "session")}
                      >
                        {/* 
                        cs_corporate_email_id: "niharika.gupta@adobe.com"
cs_corporate_name: "niharika.gupta"
cs_corporate_u_id: "489"
cs_date: "0000-00-00"
cs_description: "test"
cs_id: "23"
cs_pro_email_id: "qwerty@yopmail.com"
cs_pro_name: "testprofessional"
cs_pro_u_id: "492"
cs_status: "Processing"
cs_subject: "test"
cs_time: "00:00:02" */}
                        <Tab eventKey="request" title="REQUESTED">
                          <div className="requests">
                            {this.state.sessionList &&
                              this.state.sessionList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.cs_image ? item.cs_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.cs_corporate_name}
                                          </div>
                                          <div className="col28 fs14 fw400 pb-1">
                                            {item.cs_subject} {"-"}{" "}
                                            {item.cs_description}
                                          </div>
                                          {/* <div className="col28 fs14 fw400 pt-1">
                                            
                                          </div> */}
                                          <div className="fs14 fw400 col54 pb-1">
                                            {/* {console.log(item)} */}
                                            {moment(
                                              new Date(item.cs_date)
                                            ).format("dddd MMM Do YYYY")}{" "}
                                            {/* {}  */}
                                            {item.cs_time}
                                          </div>
                                        </div>
                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                          <div className="text-right">
                                            Session with
                                          </div>
                                          <div className="pt-2 just_aligns text-right">
                                            <Image
                                              src={
                                                item.cs_pro_image
                                                  ? item.cs_pro_image
                                                  : Suser
                                              }
                                              className="mw35s r50"
                                            />
                                            <span className="pl-2 col1 fw500 fs13">
                                              {item.cs_pro_name}
                                            </span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="mt-3">
                                        <Button
                                          className="btnTyp9 approve mr-4"
                                          onClick={() =>
                                            this.changeStatusSession(
                                              item.cs_id,
                                              2
                                            )
                                          }
                                        >
                                          CONFIRM
                                        </Button>
                                        <Button
                                          className="btnTyp9 reject"
                                          onClick={() =>
                                            this.changeStatusSession(
                                              item.cs_id,
                                              3
                                            )
                                          }
                                        >
                                          CANCEL
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="completed" title="CONFIRMED">
                          <div className="requests">
                            {this.state.sessionList &&
                              this.state.sessionList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.cs_image ? item.cs_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.cs_corporate_name}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {item.cs_subject} {"-"}{" "}
                                            {item.cs_description}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {/* {console.log(item)} */}
                                            {/* {moment(item.cs_date).format(
                                              "dddd MMM Do YYYY"
                                            )}{" "} */}
                                            {item.cs_date} {item.cs_time}
                                          </div>
                                        </div>
                                        {/* <div className="col81 fs15 fs400 pr-3">
                                          Session with - {item.cs_pro_name}
                                        </div> */}
                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                          <div className="text-right">
                                            Session with
                                          </div>
                                          <div className="pt-2 just_aligns text-right">
                                            <Image
                                              src={
                                                item.cs_pro_image
                                                  ? item.cs_pro_image
                                                  : Suser
                                              }
                                              className="mw35s r50"
                                            />
                                            <span className="pl-2 col1 fw500 fs13">
                                              {item.cs_pro_name}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </Tab>
                        <Tab eventKey="reject" title="CANCELED">
                          <div className="requests">
                            {this.state.sessionList &&
                              this.state.sessionList.map((item) => {
                                return (
                                  <div className="d-flex pt-4 pb-4 text-left border-grays">
                                    <div className="mr-4">
                                      <Image
                                        src={item.cs_image ? item.cs_image : ""}
                                        alt=""
                                        className="r50"
                                      />
                                    </div>
                                    <div className="pl-2">
                                      <div className="d-flex justify-content-between">
                                        <div>
                                          <div className="col3 fw500 fs18 pb-1">
                                            {item.cs_corporate_name}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {item.cs_subject} {"-"}{" "}
                                            {item.cs_description}
                                          </div>
                                          <div className="fs14 fw400 col54 pb-1">
                                            {/* {console.log(item)} */}
                                            {/* {moment(item.cs_date).format(
                                              "dddd MMM Do YYYY"
                                            )}{" "} */}
                                            {item.cs_date} {item.cs_time}
                                          </div>
                                        </div>
                                        {/* <div className="col81 fs15 fs400 pr-3">
                                          Session with - {item.cs_pro_name}
                                        </div> */}
                                        <div className="col81 fs15 fs400 pr-2 pl-2 min-190s">
                                          <div className="text-right">
                                            Session with
                                          </div>
                                          <div className="pt-2 just_aligns text-right">
                                            <Image
                                              src={
                                                item.cs_pro_image
                                                  ? item.cs_pro_image
                                                  : Suser
                                              }
                                              className="mw35s r50"
                                            />
                                            <span className="pl-2 col1 fw500 fs13">
                                              {item.cs_pro_name}
                                            </span>
                                          </div>
                                        </div>
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
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">List of Payments</div>
                  </div>
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
                    <Row className="mb-3">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          List of Professionals
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                "/professionalSignup",
                                "getProffListing"
                              )
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
                          <Form.Group
                            controlId="formBasicTexts"
                            className="mb-4"
                          >
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
                          <Form.Group
                            controlId="formBasickeyword"
                            className="mb-4"
                          >
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
                        <Col md="12" lg="6">
                          <Form.Group
                            controlId="formBasicCheckbox2"
                            className="row mb-4 statusCat"
                          >
                            <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
                              Status
                            </span>
                            {this.state.keywordArray.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className="checkone checkboxTyp1 "
                                  label={item.name}
                                  id={item.value}
                                  name={item.name}
                                  // value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(e, "keyword", "")
                                  }
                                  // handleCheck={item.flag}
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

                        <Col md="12" lg="6">
                          <Form.Group
                            controlId="formBasicCheckbox4"
                            className="row mb-4 statusCat"
                          >
                            <span className="fs16 fw500 col10 pl-3 pt-1 pr-3">
                              Category
                            </span>
                            {this.state.catArray &&
                              this.state.catArray.map((item) => {
                                return (
                                  <Form.Check
                                    type="checkbox"
                                    className="checkone checkboxTyp1 "
                                    label={item.name}
                                    id={item.value}
                                    name={item.name}
                                    // value={item.flag}
                                    // checked={item.flag}
                                    onChange={(e) =>
                                      this.handleCheckSearch(e, "cat", "")
                                    }
                                    // handleCheck={item.flag}
                                    value={item.value}
                                    checked={item.flag == true}
                                    // onChange={(e) => this.handleCheck(e)}
                                  />
                                );
                              })}
                          </Form.Group>
                        </Col>

                        <Col md="12" lg="6">
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
                        ></Form.Group>
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
                              <Image
                                src={item.u_image ? item.u_image : Requestuser}
                                alt=""
                                className="r50"
                              />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div
                                      className="col1 fw600 fs18 pb-1"
                                      onClick={() =>
                                        this.changepath(
                                          "/professionalDetails/admin/" +
                                            item.id,
                                          "getProffListing"
                                        )
                                      }
                                    >
                                      {item.u_name}
                                    </div>

                                    <div className="d-flex ml-auto">
                                      <span className="pr-3 fs14 col47 fw400">
                                        {item.u_status == "1"
                                          ? "Deactivate"
                                          : "Activate"}
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
                                            this.changepath(
                                              `/professionalModify/${item.id}`,
                                              "getProffListing"
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
                                    <strong>Age:</strong> {item.u_birthdate}{" "}
                                    Years
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Work Experience:</strong>{" "}
                                    {item.u_work_experience} Years
                                  </div>

                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Email:</strong> {item.email}
                                  </div>
                                  <div className="fs14 fw400 col14 pb-1">
                                    <strong>Keywords:</strong>{" "}
                                    {item.keyword_child_array.join(",")}
                                  </div>

                                  {/* <div className="fs14 fw400 col14 pb-1 e_detai">
                                    <strong className="m_w25">
                                      Education:{" "}
                                    </strong>
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.u_education,
                                      }}
                                    ></span>
                                  </div>
 */}
                                  {/* <div className="fs14 fw400 col14 pb-1 e_detai">
                                    <strong>Biography : </strong>
                                    <span className="bio_content"  
                                      dangerouslySetInnerHTML={{
                                        __html: item.u_bio,
                                      }}
                                    ></span>
                                    <span className="mx-100w">
                                      <a
                                        className="col10"
                                        onClick={() =>
                                          this.changepath(
                                            "/professionalDetails/admin/" +
                                              item.id,
                                            "getProffListing"
                                          )
                                        }
                                      >
                                        {"  "}Read more...
                                      </a>
                                    </span>
                                  </div>
 */}
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
              ) : this.state.pageType == "domainList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="corporateMember adminlistener d_detail">
                    <div className="domainSave mb-4 pb-2">
                      <div>
                        <div className="fs22 col10 mb-1">List of Domains</div>
                        {/* <div className="fs15 fw400 col14 mb-4">  
                          Lorem Ipsum is simply dummy and typesetting industry.
                        </div> */}
                      </div>
                      <div className="ml-auto">
                        <Button
                          variant="primary"
                          type="button"
                          className="btnTyp5"
                          onClick={() =>
                            this.changepath(`/adddomain/0`, "getDomainListing")
                          }
                        >
                          Add Domain
                        </Button>
                      </div>
                    </div>
                    <Table bordered className="domainTable">
                      <thead>
                        <tr>
                          <th>Domain</th>
                          <th>No. of Employees</th>
                          <th>Total Audio(minutes)</th>
                          <th>Total Video(minutes)</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.domainList &&
                          this.state.domainList.map((item, index) => {
                            return (
                              <tr>
                                <td
                                  onClick={() =>
                                    this.changepath(
                                      `/domainDetails/${item.cd_domain_name}/${item.cd_id}`,
                                      "getDomainListing"
                                    )
                                  }
                                >
                                  {item.cd_domain_name}
                                </td>
                                <td>{item.member_count}</td>
                                <td>{item.cd_audio_min / 60}</td>
                                <td>{item.cd_video_min / 60}</td>
                                <td className="blogTables">
                                  <div>
                                    <span className="disabled text-center">
                                      <Form.Check
                                        type="switch"
                                        id={"custom-switch" + index}
                                        name={"status" + index}
                                        label=""
                                        onClick={(e) => {
                                          this.modifyDomainContent(
                                            item,
                                            this.state.deleteId,
                                            "superadminchangestatusCorporatedomain",
                                            item.cd_status == "1" ? "0" : "1"
                                          );
                                        }}
                                        checked={item.cd_status == "1"}
                                      />
                                    </span>
                                    <span className="pr-2 fs13 col47 fw500">
                                      {item.cd_status == 1
                                        ? "Deactivate"
                                        : "Activate"}
                                    </span>
                                  </div>

                                  <div>
                                    <span className="mr-2">
                                      <Image
                                        src={Editicon}
                                        alt=""
                                        onClick={() =>
                                          this.changepath(
                                            `/adddomain/${item.cd_id}`,
                                            "getDomainListing"
                                          )
                                        }
                                      />
                                    </span>
                                    {/* <span>
                                        <Image
                                          src={Deleteicon}
                                          alt=""
                                          onClick={() =>
                                            this.handleOpenConformation(
                                              "other",
                                              item
                                            )
                                          }
                                        />
                                      </span>{" "} */}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </Table>
                  </div>
                </Col>
              ) : this.state.pageType == "addMember" ? (
                <Col md={8} className="pl-1">
                  <div className="corporateMember adminlistener">
                    <div className="fs28 col10 mb-4">
                      Become a Corporate Member
                    </div>
                    <Form>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Email/ Domain address
                        </Form.Label>
                        {/* <div className="col27 fs14 fw400 mb-2">
                          An email will be sent to verify your account. We won’t
                          share your email address with anyone.
                        </div> */}
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="inputTyp2"
                          id="outlined-email"
                          variant="outlined"
                          name="email"
                          isInvalid={errors.email}
                          value={memberObj.email}
                          onChange={(e) => this.handleChangeCorpMember(e)}
                          maxLength={100}
                        />

                        <div className="col27 fs14 fw400 mt-2 error">
                          {errors.email}
                        </div>
                      </Form.Group>
                      <Form.Group>
                        <Form.Label className="fs20 fw600 col14">
                          Create a Password
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          className="inputTyp2"
                          id="outlined-password"
                          variant="outlined"
                          name="password"
                          value={memberObj.password}
                          onChange={(e) => this.handleChangeCorpMember(e)}
                          maxLength={40}
                        />{" "}
                        <div className="col27 fs14 fw400 mt-2 error">
                          {errors.password}{" "}
                        </div>
                      </Form.Group>
                      {/* <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label className="fs20 fw600 col14">
                          Birthday
                        </Form.Label>
                        <div className="col27 fs14 fw400 mb-2">
                          Applicants must be at least 18 years old or 15 years
                          old with parental consent.
                        </div>
                        <Row>
                          <Col md={4}>
                            <DatePicker
                              placeholderText="Click to select a date"
                              selected={memberObj.date}
                              value={memberObj.date}
                              onChange={(event) => this.handleDate(event)}
                              maxDate={new Date()}
                              className="form-control inputTyp2"
                            />
                          </Col>
                        </Row>
                        <div className="col27 fs14 fw400 mt-2">
                          Please make sure you enter the correct date. You will
                          be unable to change this later.
                        </div>
                      </Form.Group> */}
                      <Button
                        variant="primary btnTyp5 mt-4"
                        type="button"
                        onClick={() => this.handleSubmitCorpMember()}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                </Col>
              ) : this.state.pageType == "pressblogList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search listBlogs">
                    <Row className="mb-1">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">
                          List of Press Blogs
                        </div>
                        <div className="fw300 fs16 col14">
                          {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                `/professinalBlogPress/0`,
                                "getpressblogListHandler"
                              )
                            }
                          >
                            create press blog
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Form className="p_form mb-4">
                      <div className="checkCategory">
                        <Form.Group
                          controlId="formBasicCheckbox1"
                          className="row"
                        >
                          {this.state.pressBlogCategory &&
                            this.state.pressBlogCategory.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className={`checkthree ${
                                    item.pbc_status == "1" ? "active" : ""
                                  }`}
                                  label={item.pbc_name}
                                  id={item.pbc_id}
                                  name={item.pbc_name}
                                  // value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(
                                      e,
                                      "pressBlogCategory",
                                      item.pbc_status == "1" ? "0" : "1"
                                    )
                                  }
                                  // handleCheck={item.flag}
                                  value={item.pbc_id}
                                  checked={item.pbc_status == "1"}
                                  // onChange={(e) => this.handleCheck(e)}
                                />
                              );
                            })}
                        </Form.Group>
                      </div>
                    </Form>
                  </div>
                  {this.state.pressblogList &&
                    this.state.pressblogList.map((item) => {
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={item.pbl_image ? item.pbl_image : ""}
                                alt=""
                              />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                      {/* 
                    pbl_desc: "Take a look at our buddy above. Cute kid. Of course, the mask is prominent"
  pbl_id: "9"
  pbl_image: "https://eatluvnpray.org/elp/blogimage/1/b5fecac905142648b9cb000d9aac223fa1c41cdd.jpg"
  pbl_status: "Active"
  pbl_title: "Press blog"
  pbl_written_by: "ife" */}
                                      {item.pbl_title}
                                    </div>
                                    <div className="d-flex ml-auto">
                                      <span className="mr-3">
                                        <Image
                                          src={Editicon}
                                          alt=""
                                          onClick={() =>
                                            this.changepath(
                                              `/professinalBlogPress/${item.pbl_id}`,
                                              "getpressblogListHandler"
                                            )
                                          }
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon}
                                          alt=""
                                          onClick={() =>
                                            this.changeStatusBlog(
                                              item.pbl_id,
                                              "superadmin_change_press_blogstatus"
                                            )
                                          }
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="mb-1">
                                    <span className="fs16 fw400 col14">
                                      Written by{" "}
                                      <span className="col8">
                                        {item.pbl_written_by}
                                      </span>{" "}
                                    </span>
                                    <span className="ml-3">
                                      <Image
                                        src={blogclock}
                                        className="wSet-20 mr-2"
                                      />
                                      {moment(item.pbl_time).format(
                                        "dddd MMM Do YYYY HH:mm"
                                      )}
                                    </span>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600">
                                      Description:{" "}
                                    </strong>
                                    <span
                                      className="fs14"
                                      dangerouslySetInnerHTML={{
                                        __html: item.pbl_desc,
                                      }}
                                    ></span>
                                  </div>

                                  <div className="eat_category">
                                    {item.press_blog_category &&
                                      item.press_blog_category.map((val) => {
                                        return (
                                          <span className="eatcat">
                                            {val.pbc_cat_name}
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
                    })}
                </Col>
              ) : this.state.pageType == "blogList" ? (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search">
                    <Row className="mb">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">List of Blogs</div>
                        <div className="fw300 fs16 col14">
                          {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            type="button"
                            className="btnTyp5"
                            onClick={() =>
                              this.changepath(
                                `/professinalBlogCreate/0`,
                                "getblogListHandler"
                              )
                            }
                          >
                            Create Blog
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Form className="p_form mb-4">
                      <div className="checkCategory">
                        <Form.Group
                          controlId="formBasicCheckbox1"
                          className="row"
                        >
                          {/* <Form.Check
                            type="checkbox"
                            className="checkone checkSet"
                            label="Eat"
                          />
                          <Form.Check
                            type="checkbox"
                            className="checktwo"
                            label="Luv"
                          />
                          <Form.Check
                            type="checkbox"
                            className="checkthree active"
                            label="Pray"
                          /> */}
                          {this.state.blogCategory &&
                            this.state.blogCategory.map((item) => {
                              return (
                                <Form.Check
                                  type="checkbox"
                                  className="checkthree active"
                                  className={`checkthree ${
                                    item.bc_status == "1" ? "active" : ""
                                  }`}
                                  label={item.bc_name}
                                  id={item.bc_id}
                                  name={item.bc_name}
                                  // value={item.flag}
                                  // checked={item.flag}
                                  onChange={(e) =>
                                    this.handleCheckSearch(
                                      e,
                                      "blogCategory",
                                      item.bc_status == "1" ? "0" : "1"
                                    )
                                  }
                                  // handleCheck={item.flag}
                                  value={item.bc_id}
                                  checked={item.bc_status == "1"}
                                  // onChange={(e) => this.handleCheck(e)}
                                />
                              );
                            })}
                        </Form.Group>
                      </div>
                    </Form>
                  </div>
                  {this.state.blogList &&
                    this.state.blogList.map((item) => {
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image
                                src={item.bl_image ? item.bl_image : ""}
                                alt=""
                              />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                      {item.bl_title}
                                    </div>
                                    <div className="d-flex ml-auto">
                                      <span className="mr-3">
                                        <Image
                                          src={Editicon}
                                          alt=""
                                          onClick={() =>
                                            this.changepath(
                                              `/professinalBlogCreate/${item.bl_id}`,
                                              "getblogListHandler"
                                            )
                                          }
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          src={Deleteicon}
                                          alt=""
                                          onClick={() =>
                                            this.changeStatusBlog(
                                              item.bl_id,
                                              "superadmin_changeblogstatus"
                                            )
                                          }
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="mb-1">
                                    <span className="fs16 fw400 col14">
                                      Written by{" "}
                                      <span className="col8">
                                        {item.bl_written_by}
                                      </span>{" "}
                                    </span>
                                    <span className="ml-3">
                                      <Image
                                        src={blogclock}
                                        className="wSet-20 mr-2"
                                      />
                                      {moment(item.bl_time).format(
                                        "dddd MMM Do YYYY HH:mm"
                                      )}
                                    </span>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600">
                                      Description:{" "}
                                    </strong>
                                    <span
                                      className="fs14"
                                      dangerouslySetInnerHTML={{
                                        __html: item.bl_desc,
                                      }}
                                    ></span>
                                  </div>

                                  <div className="eat_category">
                                    {item.blog_category.map((val) => {
                                      return (
                                        <span
                                          className={
                                            val.buc_cat_name == "Eat"
                                              ? "eatcat"
                                              : val.buc_cat_name == "Luv"
                                              ? "luvcat"
                                              : "praycat"
                                          }
                                        >
                                          {val.buc_cat_name}
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
                    })}
                </Col>
              ) : this.state.pageType == "kitList" ? (
                <Col md={8} lg={9} className="pl-1 kitListing">
                  <div className="professor_search">
                    <Row className="mb">
                      <Col md={8}>
                        <div className="fs22 fw600 col10">ELNP Kits</div>
                        <div className="fw300 fs16 col14">
                          {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="text-right pro_cbtn">
                          <Button
                            onClick={() =>
                              this.changepath(
                                "/addKits/" + 0,
                                "superadminkits_list"
                              )
                            }
                            type="button"
                            className="btnTyp5"
                          >
                            ADD KIT
                          </Button>
                        </div>
                      </Col>
                    </Row>
                    <Form className="p_form">
                      <div className="checkCategory">
                        <Form.Group
                          controlId="formBasicCheckbox1"
                          className="row"
                        ></Form.Group>
                      </div>
                    </Form>
                  </div>
                  {this.state.kitList &&
                    this.state.kitList.map((item, index) => {
                      return (
                        <div className="adminlistener p-4 mb-3">
                          <div className="d-flex text-left">
                            <div className="mr-2 pt-1">
                              <Image src={item.kt_image_url} alt="" />
                            </div>
                            <div className="pl-2 w-100">
                              <div className="d-flex justify-content-between">
                                <div className="w-100">
                                  <div className="d-flex">
                                    <div className="col1 fw600 fs18 pb-1">
                                      {item.kt_name}
                                    </div>
                                    <div className="min-w200s d-flex ml-auto">
                                      <span className="pr-3 fs14 col47 fw400">
                                        {item.kt_status == "2"
                                          ? "Deactivate"
                                          : "Activate"}
                                      </span>
                                      <span className="pr-3 disabled">
                                        <Form.Check
                                          type="switch"
                                          id={"custom-switch" + index}
                                          name={"status" + index}
                                          label=""
                                          onClick={(e) => {
                                            this.modifyAllContent(
                                              "KIT",
                                              item.kt_id,
                                              "superadminchange_kitsstatus",
                                              item.kt_status == "1" ? "2" : "1"
                                            );
                                          }}
                                          checked={item.kt_status == "1"}
                                        />
                                      </span>
                                      <span className="mr-3">
                                        <Image
                                          onClick={() =>
                                            this.changepath(
                                              "/addKits/" + item.kt_id,
                                              "superadminkits_list"
                                            )
                                          }
                                          src={Editicon}
                                          alt=""
                                        />
                                      </span>
                                      <span>
                                        <Image
                                          onClick={(e) => {
                                            this.handleOpenAllConformation(
                                              item.kt_name,
                                              item.kt_id,
                                              "KIT"
                                            );
                                          }}
                                          src={Deleteicon}
                                          alt=""
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  {/* kt_datetime: "2021-02-05 16:13:51"
kt_desc: "latest new"
kt_id: "4"
kt_image_url: "https://www.youtube.com/watch?v=WD6cccpzGLk"
kt_name: "latest new"
kt_price: "2000"
kt_status: "1" */}

                                  <div className="fs16 fw400 col14 pb-1 e_detai">
                                    <strong className="fw600 fs15">
                                      Description:
                                    </strong>{" "}
                                    <span className="fs15">
                                      {item.kt_desc}
                                      {/* <a>Read more...</a> */}
                                    </span>
                                  </div>

                                  <div className="fs16 fw400 col14 pb-1">
                                    <Row>
                                      {item.kits_services.map((val, ind) => {
                                        return (
                                          <>
                                            <Col
                                              md="4"
                                              className="borderRight pr-2"
                                            >
                                              <div className="d-flex justify-content-between">
                                                <div>
                                                  <span className="fw400 fs14 col29 col14">
                                                    {ind + 1}) {val.ks_services}{" "}
                                                  </span>{" "}
                                                </div>
                                                <div>
                                                  <span className="fs13">
                                                    {val.ks_services}
                                                  </span>{" "}
                                                  <br />
                                                  <span className="fs13">
                                                    Price:{" "}
                                                    <del>
                                                      Rs.{val.ks_actual_price}
                                                    </del>
                                                    <strong className="fw500 col29 pl-1">
                                                      Rs.
                                                      {
                                                        val.ks_discounted_price
                                                      }{" "}
                                                    </strong>
                                                  </span>
                                                </div>
                                              </div>
                                            </Col>
                                          </>
                                        );
                                      })}
                                    </Row>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </Col>
              ) : this.state.pageType == "qaList" ? (
                <>
                  <Col md={8} lg={9} className="pl-1">
                    <div className="professor_search ViewQa">
                      <div className="fs22 fw600 col10">Question Answer</div>
                      <div className="QaListings">
                        <div className="d-flex">
                          <div className="position-relative">
                            <div className="col29 fw500 fs17 pb-1">
                              <strong>Question 1.</strong> Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit?
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                <li>
                                  <strong>1.</strong> iste natus error sit
                                  voluptatem accusantium.
                                </li>
                                <li>
                                  <strong>2.</strong> Excepteur sint occaecat
                                  cupidatat non proident.
                                </li>
                                <li>
                                  <strong>3.</strong> Duis aute irure dolor in
                                  reprehenderit
                                </li>
                              </ul>
                            </div>
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
                      </div>

                      <div className="QaListings">
                        <div className="d-flex">
                          <div className="position-relative">
                            <div className="col29 fw500 fs17 pb-1">
                              <strong>Question 2.</strong> Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit?
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                <li>
                                  <strong>1.</strong> iste natus error sit
                                  voluptatem accusantium.
                                </li>
                                <li>
                                  <strong>2.</strong> Excepteur sint occaecat
                                  cupidatat non proident.
                                </li>
                                <li>
                                  <strong>3.</strong> Duis aute irure dolor in
                                  reprehenderit
                                </li>
                              </ul>
                            </div>
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
                      </div>

                      <div className="QaListings">
                        <div className="d-flex">
                          <div className="position-relative">
                            <div className="col29 fw500 fs17 pb-1">
                              <strong>Question 3.</strong> Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit?
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                <li>
                                  <strong>1.</strong> iste natus error sit
                                  voluptatem accusantium.
                                </li>
                                <li>
                                  <strong>2.</strong> Excepteur sint occaecat
                                  cupidatat non proident.
                                </li>
                                <li>
                                  <strong>3.</strong> Duis aute irure dolor in
                                  reprehenderit
                                </li>
                              </ul>
                            </div>
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
                      </div>

                      <div className="QaListings">
                        <div className="d-flex">
                          <div className="position-relative">
                            <div className="col29 fw500 fs17 pb-1">
                              <strong>Question 4.</strong> Lorem ipsum dolor sit
                              amet, consectetur adipiscing elit?
                            </div>
                            <div className="col10 fs17 fw500 mt-2 mb-3">
                              Answer:
                            </div>
                            <div className="answerDetail">
                              <ul>
                                <li>
                                  <strong>1.</strong> iste natus error sit
                                  voluptatem accusantium.
                                </li>
                                <li>
                                  <strong>2.</strong> Excepteur sint occaecat
                                  cupidatat non proident.
                                </li>
                                <li>
                                  <strong>3.</strong> Duis aute irure dolor in
                                  reprehenderit
                                </li>
                              </ul>
                            </div>
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
                      </div>
                    </div>
                  </Col>
                </>
              ) : this.state.pageType == "vlogsList" ? (
                <>
                  <Col md={8} lg={9} className="pl-1">
                    <div className="professor_search listBlogs VlogLists">
                      <Row className="mb-1">
                        <Col md={8}>
                          <div className="fs22 fw600 col10">Vlog Listing</div>
                          <div className="fw300 fs16 col14">
                            {/* Lorem Ipsum is simply dummy and typesetting industry. */}
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="text-right pro_cbtn">
                            <Button
                              type="button"
                              className="btnTyp5"
                              onClick={() =>
                                this.changepath(
                                  "/createVlog/0",
                                  "superadminget_planlist"
                                )
                              }
                            >
                              create VLOG
                            </Button>
                          </div>
                        </Col>
                      </Row>
                      <Form className="p_form mb-4">
                        <Form.Group
                          as={Row}
                          className="justify-content-center customsRadio"
                        >
                          <Form.Check
                            type="radio"
                            id="vl_type1"
                            value={1}
                            name="vl_type"
                            onChange={() => this.superadminvlogs_list(1, 10, 1)}
                            label="All"
                            className={`mr-5  ${
                              this.state.vl_type == 2 ? "" : "active"
                            }`}
                            checked={+this.state.vl_type == 1}
                          />

                          <Form.Check
                            type="radio"
                            id="vl_type2"
                            value={2}
                            name="vl_type"
                            onChange={() => this.superadminvlogs_list(1, 10, 2)}
                            label="Featured"
                            className={`mr-5  ${
                              this.state.vl_type == 1 ? "" : "active"
                            }`}
                            checked={+this.state.vl_type == 2}
                          />
                        </Form.Group>
                      </Form>
                    </div>

                    {this.state.vlogsList &&
                      this.state.vlogsList.map((item, index) => {
                        return (
                          <div className="adminlistener p-4 mb-3">
                            <div className="d-flex text-left">
                              <div className="mr-2 pt-1">
                                <Image src={item.vl_thumbnail_url} alt="" />
                              </div>
                              <div className="pl-2 w-100">
                                <div className="d-flex justify-content-between">
                                  <div className="w-100">
                                    <div className="d-flex">
                                      <div className="col1 fw600 fs18 pb-1">
                                        {item.vl_title}
                                      </div>
                                      <div className="d-flex ml-auto">
                                        <span className="pr-3 fs14 col47 fw400">
                                          {item.vl_status == "2"
                                            ? "Deactivate"
                                            : "Activate"}
                                        </span>
                                        <span className="pr-3 disabled">
                                          <Form.Check
                                            type="switch"
                                            id={"custom-switch" + index}
                                            name={"status" + index}
                                            label=""
                                            onClick={(e) => {
                                              this.modifyAllContent(
                                                "VLOGS",
                                                item.vl_id,
                                                "superadminchange_vlogsstatus",
                                                item.vl_status == "1"
                                                  ? "2"
                                                  : "1"
                                              );
                                            }}
                                            checked={item.vl_status == "1"}
                                          />
                                        </span>
                                        <span className="mr-3">
                                          <Image
                                            onClick={() =>
                                              this.changepath(
                                                "/createVlog/" + item.vl_id,
                                                "superadminvlogs_list"
                                              )
                                            }
                                            src={Editicon}
                                            alt=""
                                          />
                                        </span>
                                        <span>
                                          <Image
                                            onClick={(e) => {
                                              this.handleOpenAllConformation(
                                                item.vl_title,
                                                item.vl_id,
                                                "VLOGS"
                                              );
                                            }}
                                            src={Deleteicon}
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </div>
                                    <div className="fs16 fw400 col14 pb-1 e_detai">
                                      <strong className="fw600">
                                        Description:
                                      </strong>
                                      <span
                                        className="fs15"
                                        dangerouslySetInnerHTML={{
                                          __html: item.vl_desc,
                                        }}
                                      >
                                        {/* {item.vl_desc} */}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </Col>
                </>
              ) : (
                <Col md={8} lg={9} className="pl-1">
                  <div className="professor_search mb-3">
                    <div className="fs22 fw600 col10">Rating Requests</div>
                  </div>
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
                  Are you sure want to delete <br />{" "}
                  {this.state.deleteModalType == "admin"
                    ? profileName
                    : this.state.deleteUser}
                  ?{" "}
                </div>

                <div className="text-center mb-5">
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={(event) =>
                      this.state.deleteModalType == "admin"
                        ? this.adminUserDelete(event, this.state.profileId, 2)
                        : this.modifyDomainContent(
                            "",
                            this.state.deleteId,
                            "superadmindeletecorporatedomain",
                            2
                          )
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
                {this.state.deleteModalType == "admin" ? (
                  this.state.activeProfile == "professional" ? (
                    ""
                  ) : (
                    <>
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
                          name="reasonForDelete"
                          onChange={(event) => {
                            this.handleChange(event);
                          }}
                        />
                      </Form.Group>

                      <button
                        className="btn btn-success bt-submit text-uppercase"
                        onClick={(event) =>
                          this.adminUserDeleteReason(
                            event,
                            this.state.profileId,
                            2
                          )
                        }
                      >
                        SUBMIT & DELETE
                      </button>
                    </>
                  )
                ) : (
                  ""
                )}
              </div>
            </Modal.Body>
          </Modal>

          {/* <Modal
            show={this.state.deleteAllConformationModal}
            onHide={this.handleOpenKitConformation}
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
                  onClick={this.handleCloseKitConformation}
                />
                <div className="text-center fs24 mt-4 col64 mb-4">
                  Are you sure want to delete <br /> {this.state.deleteKit}?{" "}
                </div>

                <div className="text-center mb-5">
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={(event) =>
                      this.modifyAllContent(
                        "KIT",
                        "",
                        "superadmindelete_kitsstatus",
                        3
                      )
                    }
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-default text-uppercase sm-btn"
                    onClick={this.handleCloseKitConformation}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          */}
          <Modal
            show={this.state.deleteObjConformationModal}
            onHide={this.handleCloseAllConformation}
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
                  onClick={this.handleCloseAllConformation}
                />
                <div className="text-center fs24 mt-4 col64 mb-4">
                  Are you sure want to delete <br /> {this.state.deleteObj}?{" "}
                </div>

                <div className="text-center mb-5">
                  <button
                    className="btn btn-success text-uppercase"
                    onClick={(event) => this.modifyAllContent("", "", "", 3)}
                  >
                    Yes
                  </button>
                  <button
                    className="btn btn-default text-uppercase sm-btn"
                    onClick={this.handleCloseAllConformation}
                  >
                    No
                  </button>
                </div>
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
